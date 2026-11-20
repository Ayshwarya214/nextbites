"use client";

import { useState } from "react";
import type { Recipe } from "../data/recipes";
import { RecipeCard } from "./RecipeCard";

export function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(normalizedQuery) ||
      recipe.cuisine.toLowerCase().includes(normalizedQuery)
  );

  return (
    <div className="flex w-full flex-col gap-6">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes by title or cuisine..."
        aria-label="Search recipes by title or cuisine"
        className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-black placeholder:text-zinc-500 focus:border-zinc-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-400"
      />

      {filteredRecipes.length === 0 ? (
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          No recipes match &ldquo;{query}&rdquo;. Try another title or cuisine.
        </p>
      ) : (
        <div
          className="w-full"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
            gap: "1rem",
          }}
        >
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}