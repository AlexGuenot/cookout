// app/api/teams/route.ts
// route for hhtpie /api/teams etc....
import { NextResponse } from 'next/server';
import { getCollectionData } from '@/app/api/getCollectionData'; // Adjust the import path as needed

export async function GET() {
  try {
    const teams = await getCollectionData();
    return NextResponse.json(teams, { status: 200 });
  } catch (error) {
    console.error("Error fetching teams:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
