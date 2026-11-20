import Link from "next/link";
import type { Recipe } from "../data/recipes";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      href={`/recipe/${recipe.id}`}
      className="flex flex-col gap-2 rounded-xl border border-zinc-200 bg-white p-4 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-600"
    >
      <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
        {recipe.cuisine} &bull; {recipe.minutes} min
      </p>
      <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
        {recipe.title}
      </h2>
      <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {recipe.summary}
      </p>
    </Link>
  );
}