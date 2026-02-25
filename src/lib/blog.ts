import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { z } from "zod";

const CONTENT_DIR = path.join(process.cwd(), "src/content/blog");

const FRONTMATTER_REGEX = /^---\s*\n([\s\S]*?)\n---/;

const frontmatterSchema = z.object({
  title: z.string(),
  date: z.string(),
  author: z.string(),
  description: z.string(),
  image: z.string().optional(),
});

export type Frontmatter = z.infer<typeof frontmatterSchema>;

export interface BlogPost {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
  readingTime: string;
}

function parseFrontmatter(raw: string): {
  frontmatter: Frontmatter;
  content: string;
} {
  const match = raw.match(FRONTMATTER_REGEX);
  if (!match) {
    throw new Error("Missing or malformed frontmatter");
  }

  const pairs: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    pairs[key] = value;
  }

  const frontmatter = frontmatterSchema.parse(pairs);
  const content = raw.slice(match[0].length).trim();
  return { frontmatter, content };
}

function readingTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function getPostSlugs(): Promise<string[]> {
  const files = await readdir(CONTENT_DIR);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const raw = await readFile(filePath, "utf-8");
  const { frontmatter, content } = parseFrontmatter(raw);
  return { slug, frontmatter, content, readingTime: readingTime(content) };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(slugs.map(getPostBySlug));
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime(),
  );
}
