// Route loading state
export default function Loading() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-8 sm:px-16 bg-white dark:bg-black">
        <p className="text-base font-medium text-zinc-600 dark:text-zinc-400">
          Loading recipes...
        </p>
      </main>
    </div>
  );
}