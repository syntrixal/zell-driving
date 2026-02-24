import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { getAllBlogSlugs, getBlogBySlug } from "@/lib/blogs";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return getAllBlogSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = getBlogBySlug(params.slug);
  if (!blog) return { title: "Blog | Zell Driving School" };

  return {
    title: `${blog.title} | Zell Driving School`,
    description: blog.excerpt,
  };
}

export default function BlogDetailPage({ params }: Props) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[#FAFAF9] pt-24">
      <section className="bg-white py-16 md:py-20">
        <Container className="px-6 sm:px-8 lg:px-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
            Blog
          </span>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
            {blog.date}
          </p>
          <h1
            className="mt-3 text-3xl font-black leading-tight text-[#ae2027] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            {blog.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            {blog.excerpt}
          </p>
        </Container>
      </section>

      <section className="bg-[#FAFAF9] pb-20 md:pb-24">
        <Container className="px-6 sm:px-8 lg:px-12">
          <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
            <img
              src={blog.image}
              alt={blog.title}
              className="h-72 w-full object-cover sm:h-80 md:h-96"
            />
            <div className="prose max-w-none p-6 sm:p-8 lg:p-10 prose-p:text-gray-700 prose-headings:text-gray-900">
              {blog.content.split("\n\n").map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/blogs" className="btn-secondary">
              ← Back to all blogs
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

