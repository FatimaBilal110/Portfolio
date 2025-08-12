export const dynamic = "force-dynamic";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

const BlogPage = async () => {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection("blogs");
    const blogs = await collection.find({}).toArray();

    return (
      <main className="max-w-5xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Blog List</h1>
        <ul>
          {blogs.map((blog) => (
            <li
              key={blog._id.toString()}
              className="mb-6 pb-4 border-b flex flex-row items-start space-x-4"
            >
              <img
                src={
                  blog.imageUrl || `/Images/image.png"`
                }
                alt={blog.title}
                className="w-32 h-32 object-cover rounded-lg shadow"
              />
              <div>
                <a
                  href={`/blog/${blog._id}`}
                  className="text-blue-600 hover:underline text-lg font-semibold"
                >
                  {blog.title}
                </a>
                <p className="text-gray-600 mt-1">
                  {blog.summary || blog.content.substring(0, 100) + "..."}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    );
  } catch (error) {
    return <p>Error loading blogs: {error.message}</p>;
  } finally {
    await client.close();
  }
};

export default BlogPage;
