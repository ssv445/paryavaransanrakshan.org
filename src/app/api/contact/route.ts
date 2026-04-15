import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  company?: string; // honeypot
};

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: silently succeed (don't tell bots) but don't send.
  if (body.company && body.company.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const subject = (body.subject ?? "").trim() || "Website contact";
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please fill in name, email, and message." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "[email protected]";
  const from = process.env.CONTACT_FROM_EMAIL ?? "Paryavaran Sanrakshan <[email protected]>";

  if (!apiKey) {
    // In dev / preview builds without a key, log the submission so it's not lost.
    console.warn("[contact] RESEND_API_KEY not set; submission not emailed:", { name, email, subject });
    return NextResponse.json({ ok: true, note: "Logged (email not configured)." });
  }

  const resend = new Resend(apiKey);
  try {
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[Website] ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        message,
      ].join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed", err);
    return NextResponse.json({ error: "Could not send right now. Please try again later." }, { status: 500 });
  }
}
