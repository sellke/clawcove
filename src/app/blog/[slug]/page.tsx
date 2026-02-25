import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  formatDate,
  getAllPosts,
  getPostBySlug,
  getPostSlugs,
} from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const { title, description, date, image } = post.frontmatter;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: date,
      ...(image && { images: [{ url: image }] }),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const posts = await getAllPosts();
  const currentIndex = posts.findIndex((p) => p.slug === slug);

  const prev = posts[currentIndex + 1] ?? null;
  const next = currentIndex > 0 ? posts[currentIndex - 1] : null;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-foreground-muted hover:text-foreground transition-colors mb-10"
      >
        <span aria-hidden="true">&larr;</span> Back to Blog
      </Link>

      <article>
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl leading-[1.1]">
            {post.frontmatter.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-foreground-muted">
            <time dateTime={post.frontmatter.date}>
              {formatDate(post.frontmatter.date)}
            </time>
            <span aria-hidden="true">&middot;</span>
            <span>{post.frontmatter.author}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none prose-headings:tracking-tight prose-a:text-primary-500 hover:prose-a:text-primary-600 prose-a:transition-colors">
          <MDXRemote source={post.content} />
        </div>
      </article>

      <nav className="mt-16 flex items-center justify-between border-t border-border pt-8 text-sm">
        {prev ? (
          <Link
            href={`/blog/${prev.slug}`}
            className="text-foreground-muted hover:text-foreground transition-colors"
          >
            <span aria-hidden="true">&larr;</span> {prev.frontmatter.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/blog/${next.slug}`}
            className="text-foreground-muted hover:text-foreground transition-colors text-right"
          >
            {next.frontmatter.title} <span aria-hidden="true">&rarr;</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </main>
  );
}
