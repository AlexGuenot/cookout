import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

if (!dbName) {
  throw new Error("Please define the MONGODB_DB_NAME environment variable inside .env.local");
}

let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<Db> {
  if (cachedDb) {
    return cachedDb;
  }

  try {
    const client = new MongoClient(uri as string);
    await client.connect();
    const db = client.db(dbName);

    try {
      await db.admin().ping();
      console.log("Database connected and pinged successfully.");
    } catch (pingError) {
      console.error("Ping error:", pingError);
      console.error("Database connection problem.");
      throw pingError;
    }

    cachedDb = db;
    return db;
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw new Error("Failed to connect to the database.");
  }
}

export async function isDatabaseConnected(): Promise<boolean> {
    try {
        const db = await connectToDatabase();
        return !!db;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return false;
    }
}
