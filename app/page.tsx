export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome to Sentinel
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec euismod, nisl eget consectetur sagittis, nisl nunc 
            faucibus nulla, eu fermentum sem magna ut sapien. 
            Integer sed justo nec nulla dignissim tincidunt. 
            Vivamus non diam ut libero vestibulum malesuada.
          </p>
        </div>

        <footer className="mt-10 text-sm text-zinc-500 dark:text-zinc-400">
          faucibus nulla, ❤️ nec nulla dignissim tincidunt.
        </footer>
      </main>
    </div>
  );
}
