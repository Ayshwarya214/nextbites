import { RecipeGrid } from "./components/RecipeGrid";
import { recipes } from "./data/recipes";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          NextBites
        </h1>
        <p className="mt-2 text-base text-zinc-600">
          Quick, flavorful recipes built with static site generation.
        </p>
      </header>

      <RecipeGrid recipes={recipes} />
    </main>
  );
}