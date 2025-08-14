import clientPromise from "@/lib/db";
import { ObjectId } from "mongodb";

export default async function BlogViewPage({ params }) {
  try {
    const resolvedParams = await params; 
    const { id } = resolvedParams;
 
    if (!ObjectId.isValid(id)) {
      return <p className="text-center mt-10">Invalid blog ID</p>;
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB_NAME);
    const blog = await db
      .collection("blogs")
      .findOne({ _id: new ObjectId(id) });

    if (!blog) {
      return <p className="text-center mt-10">Blog not found</p>;
    }

    return (
      <main className="max-w-4xl mx-auto p-4">
        <h1 className="text-4xl text-gray-600 underline font-bold mt-14 mb-6">{blog.title}</h1>
        <article className="prose prose-lg">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </article>
      </main>
    );
  } catch (error) {
    console.error("Error loading blog:", error);
    return <p className="text-center mt-10">Error loading blog</p>;
  }
}
