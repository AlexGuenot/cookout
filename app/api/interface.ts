interface Recipe {
    _id: string;
    name: string;
    ingredients : string[];
    instructions : string[];
    prep_time : string;
    cook_time : string;
    tags : string[];
    isLiked : boolean;
  }

  export type { Recipe }; // Export the Team type
