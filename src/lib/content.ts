/**
 * Content registry — reads Markdown files from /content at build time.
 *
 * Frontmatter carries structured fields; body is the `intro` prose.
 * Events are sorted newest-first; stories are listed in file-name order
 * (same as the previous hand-ordered array).
 *
 * Adding content = drop a new .md file under content/<kind>/.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";

export type Entry = {
  slug: string;
  title: string;
  titleHi?: string;
  summary: string;
  tagline?: string;
  intro?: string;
  objectives?: string[];
  focusAreas?: string[];
};

export type EventEntry = Entry & {
  date: string;
  year: number;
  images?: string[];
};

export type StoryEntry = Entry & {
  type: "impact" | "dispatch" | "photo-essay";
  location?: string;
  topics?: string[];
  images?: string[];
};

const CONTENT_DIR = join(process.cwd(), "content");

function readCollection<T extends Entry>(kind: string): T[] {
  const dir = join(CONTENT_DIR, kind);
  return readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = readFileSync(join(dir, file), "utf8");
      const { data, content } = matter(raw);
      const intro = content.trim() || undefined;
      return { slug, ...(data as object), ...(intro ? { intro } : {}) } as T;
    });
}

export const programs: Entry[] = readCollection<Entry>("programs");
export const karyavibhag: Entry[] = readCollection<Entry>("karyavibhag");

// Events: newest first (by year, stable within year).
export const events: EventEntry[] = readCollection<EventEntry>("events").sort(
  (a, b) => b.year - a.year,
);

export const stories: StoryEntry[] = readCollection<StoryEntry>("stories");
