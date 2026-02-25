import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on AI agents, OpenClaw, and building ClawCove.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        <p className="mt-3 text-lg text-foreground-muted">
          Thoughts on AI agents, OpenClaw, and building ClawCove
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-foreground-muted">No posts yet. Check back soon.</p>
      ) : (
        <div className="flex flex-col gap-10">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-2xl font-semibold tracking-tight group-hover:text-primary-500 transition-colors">
                  {post.frontmatter.title}
                </h2>
                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-foreground-muted">
                  <time dateTime={post.frontmatter.date}>
                    {formatDate(post.frontmatter.date)}
                  </time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{post.frontmatter.author}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{post.readingTime}</span>
                </div>
                <p className="mt-3 text-foreground-muted leading-relaxed">
                  {post.frontmatter.description}
                </p>
              </Link>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
