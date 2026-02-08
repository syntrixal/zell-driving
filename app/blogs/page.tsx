import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PAGE_CONTENT } from "@/lib/pageContent";
import { getAllBlogs } from "@/lib/blogs";

export default function BlogsPage() {
  const content = PAGE_CONTENT.blogs;
  const blogs = getAllBlogs();

  return (
    <div className="min-h-screen bg-[#FAFAF9] pt-28">
      <section className="bg-white py-20 md:py-24">
        <Container className="px-6 sm:px-8 lg:px-12">
          <span className="inline-block rounded-full border-2 border-gray-200 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-wider text-gray-600">
            BLOGS
          </span>
          <h1
            className="mt-8 text-4xl font-black leading-tight gradient-text sm:text-5xl lg:text-6xl"
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
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.slug}
                className="card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-48 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    {blog.date}
                  </p>
                  <h2 className="mt-2 text-lg font-bold leading-tight text-gray-900">
                    {blog.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {blog.excerpt}
                  </p>
                  <div className="mt-6">
                    <Link href={`/blogs/${blog.slug}`} className="btn-secondary">
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
