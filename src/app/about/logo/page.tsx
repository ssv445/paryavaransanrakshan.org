import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Our Logo",
  description: "The symbolism behind the Paryavaran Sanrakshan Gatividhi logo.",
};

export default function LogoPage() {
  return (
    <PagePlaceholder
      title="Our Logo"
      description="Symbols and meaning behind our identity."
    />
  );
}
