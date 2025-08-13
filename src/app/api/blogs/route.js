import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page")) || 1;
    const limit = parseInt(url.searchParams.get("limit")) || 5;
    const skip = (page - 1) * limit;

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
  } finally {
    await client.close();
  }
}
