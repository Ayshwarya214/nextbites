import { recipes } from "./data/recipes";
import { RecipeGrid } from "./components/RecipeGrid";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex w-full flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <div className="flex flex-col gap-2">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Recipes
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Browse quick meals by cuisine and prep time.
            </p>
          </div>

          <RecipeGrid recipes={recipes} />
        </div>
      </main>
    </div>
  );
}