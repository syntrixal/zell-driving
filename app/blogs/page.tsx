import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PAGE_CONTENT } from "@/lib/pageContent";
import { getAllBlogs } from "@/lib/blogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Zell Driving School | Automatic Driving Lessons Liverpool",
  description:
    "Driving tips, learning advice, and updates from Zell Driving School. Automatic driving lessons in Liverpool – stay informed and build your confidence.",
};

export default function BlogsPage() {
  const content = PAGE_CONTENT.blogs;
  const blogs = getAllBlogs();

  return (
    <div className="min-h-screen bg-[#FAFAF9] pt-24">
      <section className="bg-white py-16 md:py-20">
        <Container className="px-6 sm:px-8 lg:px-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
            Latest Blogs
          </span>
          <h1
            className="mt-6 text-4xl font-black leading-tight text-[#ae2027] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            {content.title}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            {content.intro}
          </p>
        </Container>
      </section>

      <section className="bg-[#FAFAF9] py-20 md:py-24">
        <Container className="px-6 sm:px-8 lg:px-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {blogs.map((blog) => (
              <article
                key={blog.slug}
                className="group overflow-hidden rounded-3xl border-2 border-gray-200 hover:border-[#ae2027] bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-8 lg:p-10">
                  <h2 className="mb-5 font-bold text-lg leading-tight">
                    {blog.title}
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">
                    {blog.excerpt}
                  </p>
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="flex items-center gap-2 text-sm font-bold text-[#ae2027] transition hover:text-[#8a191f]"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
