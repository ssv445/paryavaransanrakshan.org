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

/**
 * Parse an event `date` string into a sortable (year, month, day) tuple.
 * Accepts: "2020", "January 2025", "10 March 2019".
 * Missing month/day default to 0 so date-less entries sort to the end of their year.
 */
const MONTHS: Record<string, number> = {
  january: 1, february: 2, march: 3, april: 4, may: 5, june: 6,
  july: 7, august: 8, september: 9, october: 10, november: 11, december: 12,
};

function dateKey(date: string, fallbackYear: number): [number, number, number] {
  const tokens = date.trim().split(/\s+/);
  let year = fallbackYear;
  let month = 0;
  let day = 0;
  if (tokens.length === 1) {
    // "2020"
    const y = parseInt(tokens[0], 10);
    if (!Number.isNaN(y)) year = y;
  } else if (tokens.length === 2) {
    // "January 2025"
    month = MONTHS[tokens[0].toLowerCase()] ?? 0;
    const y = parseInt(tokens[1], 10);
    if (!Number.isNaN(y)) year = y;
  } else if (tokens.length >= 3) {
    // "10 March 2019"
    const d = parseInt(tokens[0], 10);
    if (!Number.isNaN(d)) day = d;
    month = MONTHS[tokens[1].toLowerCase()] ?? 0;
    const y = parseInt(tokens[2], 10);
    if (!Number.isNaN(y)) year = y;
  }
  return [year, month, day];
}

export const programs: Entry[] = readCollection<Entry>("programs");
export const karyavibhag: Entry[] = readCollection<Entry>("karyavibhag");

// Events: sort by full date (year, month, day) descending.
// Entries with only a year fall to the end of their year.
export const events: EventEntry[] = readCollection<EventEntry>("events").sort((a, b) => {
  const [ay, am, ad] = dateKey(a.date, a.year);
  const [by, bm, bd] = dateKey(b.date, b.year);
  return by - ay || bm - am || bd - ad;
});

export const stories: StoryEntry[] = readCollection<StoryEntry>("stories");
