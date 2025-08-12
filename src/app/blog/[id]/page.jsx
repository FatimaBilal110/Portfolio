import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

const BlogViewPage = async ({ params }) => {
  const { id } = params;

  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection("blogs");

    const blog = await collection.findOne({ _id: new ObjectId(id) });

    if (!blog) {
      return <p>Blog not found</p>;
    }

    return (
      <main className="max-w-4xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
        <article className="prose prose-lg">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </article>
      </main>
    );
  } catch (error) {
    return <p>Error loading blog: {error.message}</p>;
  } finally {
    await client.close();
  }
};

export default BlogViewPage;
