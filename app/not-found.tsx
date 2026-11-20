import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-start justify-center gap-4 py-32 px-8 sm:px-16 bg-white dark:bg-black">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          404 &bull; Not Found
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Recipe not found
        </h1>
        <p className="max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-400">
          We couldn&apos;t find the recipe you were looking for. It may have been
          moved or doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
        >
          &larr; Back to recipes
        </Link>
      </main>
    </div>
  );
}