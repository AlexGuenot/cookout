// app/api/teams/route.ts
// route for hhtpie /api/teams etc....
import { NextResponse } from 'next/server';
import { getCollectionData } from '@/app/api/getCollectionData'; // Adjust the import path as needed

export async function GET() {
  try {
    const recipes = await getCollectionData();
    return NextResponse.json(recipes, { status: 200 });
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
