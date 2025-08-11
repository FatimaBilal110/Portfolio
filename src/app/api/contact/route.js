import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function POST(request) {
  try {
    const body = await request.json();
    await client.connect();
    
    const db = client.db(); 
    const collection = db.collection('contacts'); 
    await collection.insertOne({
      name: body.name,
      email: body.email,
      message: body.message,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } 
  catch (error) {
    console.error('Error saving to MongoDB:', error);
    return NextResponse.json({ success: false, error: 'Something went wrong.' }, { status: 500 });
  } 
  finally {
    await client.close();
  }
}
