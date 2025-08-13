export const dynamic = "force-dynamic";
import { MongoClient } from "mongodb";
import Link from "next/link";


const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

const BlogPage = async ({ searchParams }) => {
  const page = parseInt(searchParams?.page) || 1;
  const limit = 5;
  const skip = (page - 1) * limit;

  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection("blogs");

 
    const blogs = await collection
      .find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    const totalBlogs = await collection.countDocuments();
    const totalPages = Math.ceil(totalBlogs / limit);

    return (
      <main className="max-w-5xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">BLOGS </h1>
        <ul>
          {blogs.map((blog) => (
            <li
              key={blog._id.toString()}
              className="mb-6 pb-4 border-b flex flex-row items-start space-x-4"
            >
              <img
                src={blog.imageUrl || `/Images/image.png`}
                alt={blog.title}
                className="w-32 h-32 object-cover rounded-lg shadow"
              />
              <div>
                <Link href={`/blog/${blog._id}`} className="text-blue-600 hover:underline text-lg font-semibold">
                {blog.title}
                </Link>
                <p className="text-gray-600 mt-1">
                  {blog.summary || blog.content.substring(0, 100) + "..."}
                </p>
              </div>
            </li>
          ))}
        </ul>

  <div className="flex justify-center items-center mt-6 space-x-4">
         <Link
           href={`/blog?page=${page - 1}`}
           className={`px-4 py-2 bg-gray-200 rounded ${page <= 1 ? "opacity-50 pointer-events-none" : ""}`}
         >
           Prev
         </Link>
  <span>
    Page {page} of {totalPages}
  </span>
          <Link
            href={`/blog?page=${page + 1}`}
            className={`px-4 py-2 bg-gray-200 rounded ${page >= totalPages ? "opacity-50 pointer-events-none" : ""}`}
          >
           Next
          </Link>
</div>
      </main>
    );
  } catch (error) {
    return <p>Error loading blogs: {error.message}</p>;
  } finally {
    await client.close();
  }
};

export default BlogPage;
