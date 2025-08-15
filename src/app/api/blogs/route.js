import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page")) || 1;
    const limit = parseInt(url.searchParams.get("limit")) || 5;
    const skip = (page - 1) * limit;

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB_NAME);
    const collection = db.collection("blogs");

    const cursor = collection
      .find({}, { projection: { title: 1, author: 1, createdAt: 1, image: 1, slug:1 } })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const docs = await cursor.toArray();
    const blogs = docs.map(b => ({ ...b, _id: b._id.toString() }));
    const totalBlogs = await collection.countDocuments();
    const totalPages = Math.ceil(totalBlogs / limit);

    return NextResponse.json({
      blogs,
      totalBlogs,
      totalPages,
      currentPage: page,
    });
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
