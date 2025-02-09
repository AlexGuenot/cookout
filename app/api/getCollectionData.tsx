import { connectToDatabase } from '@/app/api/lib/mongodb';
import { Recipe } from '@/app/api/interface';

export async function getCollectionData(): Promise<Recipe[]> {
    try {
      const db = await connectToDatabase();
      const recipes = await db.collection<Recipe>('recipes').find().toArray();

      const formattedRecipes = recipes.map(recipe => ({
        ...recipe,
        _id: recipe._id.toString(),
      }));

      return formattedRecipes;
    } catch (error) {
      console.error("Error fetching recipes:", error);
      return [];
    }
  }

