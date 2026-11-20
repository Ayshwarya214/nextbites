import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../../data/recipes";

export function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: recipe.id,
  }));
}

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col gap-8 py-16 px-8 sm:px-16 bg-white dark:bg-black">
        <Link
          href="/"
          className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          &larr; Back to recipes
        </Link>

        <header className="flex flex-col gap-2">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {recipe.cuisine} &bull; {recipe.minutes} min
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            {recipe.title}
          </h1>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            {recipe.summary}
          </p>
        </header>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
            Ingredients
          </h2>
          <ul className="list-disc space-y-1.5 pl-6 text-zinc-700 dark:text-zinc-300">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={`${recipe.id}-ing-${index}`}>{ingredient}</li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
            Steps
          </h2>
          <ol className="list-decimal space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
            {recipe.steps.map((step, index) => (
              <li key={`${recipe.id}-step-${index}`}>{step}</li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  );
}