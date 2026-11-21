"use client";
// Client error boundary with Try again reset
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-start justify-center gap-4 py-32 px-8 sm:px-16 bg-white dark:bg-black">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          Something went wrong
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Could not load this page
        </h1>
        <p className="max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-400">
          An unexpected error occurred while rendering NextBites. You can try
          loading the view again.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-2 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200"
        >
          Try again
        </button>
      </main>
    </div>
  );
}