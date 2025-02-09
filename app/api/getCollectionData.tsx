import { connectToDatabase } from '@/app/api/lib/mongodb';
import { Team } from '@/app/api/interface';

export async function getCollectionData(): Promise<Team[]> {
    try {
      const db = await connectToDatabase();
      const teams = await db.collection<Team>('teams').find().toArray();

      const formattedTeams = teams.map(team => ({
        ...team,
        _id: team._id.toString(),
      }));

      return formattedTeams;
    } catch (error) {
      console.error("Error fetching teams:", error);
      return [];
    }
  }
