import type { Recipe } from "../data/recipes";
export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="mb-2 flex items-center justify-between gap-2 text-xs font-medium text-neutral-600">
        <span className="rounded-full bg-amber-100 px-2.5 py-1 text-amber-900">
          {recipe.cuisine}
        </span>
        <span>{recipe.minutes} mins</span>
      </div>
      <h2 className="mb-2 text-lg font-semibold text-neutral-900">
        {recipe.title}
      </h2>
      <p className="text-sm leading-relaxed text-neutral-600">
        {recipe.summary}
      </p>
    </article>
  );
}