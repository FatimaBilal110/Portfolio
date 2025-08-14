import clientPromise from "@/lib/db";
import Link from "next/link";

export default async function BlogPage({ searchParams }) {
  const params = await searchParams
  const page = parseInt(params?.page) || 1;
  const limit = 5;
  const skip = (page - 1) * limit;

  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB_NAME);
    const collection = db.collection("blogs");

    const blogs = await collection
      .find({}, { projection: { title: 1, summary: 1, content: 1, imageUrl: 1, createdAt: 1 } })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    const totalBlogs = await collection.countDocuments();
    const totalPages = Math.ceil(totalBlogs / limit);

    return (
      <main className="max-w-5xl mx-auto bg-slate-300 p-10">
        <h1 className="text-3xl font-bold text-pink-500 text-center mt-9 mb-6">BLOGS</h1>
        <ul >
          {blogs.map((blog) => (
            <li
              key={blog._id.toString()}
              className="mb-6 pb-4 border-b flex flex-row items-start space-x-4"
            >
      <Link
        href={`/blog/${blog._id}`}
        className="block md:flex md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4 p-2 rounded hover:bg-gray-200 transition shadow-sm"
      >
              <img
                src={blog.imageUrl || `/Images/image.png`}
                alt={blog.title}
                className="w-full md:w-32 h-32 object-cover rounded-lg shadow"
              />
              <div className="flex-1">
                <h2 className="text-blue-800 hover:underline text-lg font-semibold">
            {blog.title}
          </h2>
                <p className="text-gray-600 mt-1">
                  {blog.summary || (blog.content?.substring(0, 100) || "") + "..."}
                </p>
              </div>
        </Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-center items-center mt-6 space-x-4">
          <Link
            href={`/blog?page=${page - 1}`}
            className={`px-4 py-2 bg-green-500 rounded ${
              page <= 1 ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            Prev
          </Link>
          <span>
            Page {page} of {totalPages}
          </span>
          <Link
            href={`/blog?page=${page + 1}`}
            className={`px-4 py-2 bg-green-500 rounded ${
              page >= totalPages ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            Next
          </Link>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error loading blogs:", error);
    return <p>Error loading blogs: {error.message}</p>;
  }
}
