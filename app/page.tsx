function HeaderButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="underline cursor-pointer flex-none tracking-wider underline-offset-2">
      {children}
    </button>
  );
}

function Header() {
  return (
    <div className="h-8 flex flex-row text-gray-50 py-6 w-full gap-x-4 justify-end items-center">
      <HeaderButton>Github</HeaderButton>
      <HeaderButton>Resume</HeaderButton>
    </div>
  );
}

function Hero() {
  return (
    <div className="py-4 mt-8 text-gray-50">
      <h1 className="text-6xl font-serif">Sheharyar Ahmed</h1>
      <p className="font-sans text-md">Software Developer</p>
      <p className="font-sans text-xl mt-2">
        Building modern digital experiences es on Mobile and Web.
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
    </main>
  );
}
