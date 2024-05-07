function HeaderButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="underline cursor-pointer flex-none tracking-wider underline-offset-2">
      {children}
    </button>
  );
}

function Header() {
  return (
    <div className="h-8 flex flex-row text-gray-50 py-6 w-full gap-x-4 justify-end items-center font-sans">
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
        Building modern digital experiences on Mobile and Web.
      </p>
    </div>
  );
}

function PortfolioCard() {
  return (
    <div className="mt-4 ml-0 mb-8  max-w-screen-md font-sans">
      <div className="flex flex-row gap-x-2 justify-start items-center">
        <h3 className="text-xl">Contactless Checkout</h3>
        <Tag>Android</Tag> 
        <Tag>Live</Tag>
      </div>
      <p className="text-gray-300 text-xs">Huma Production</p>
      <p className="mt-2">
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
        nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
        minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
        elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor
        Lorem duis laboris cupidatat officia voluptate. Culpa proident
        adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
        Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
        Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa
        et culpa duis.
      </p>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="mt-8 text-gray-50">
      <h2 className="font-serif text-4xl">Portfolio</h2>
      {Array.from({ length: 4 }).map((_, index) => (
        <PortfolioCard key={index} />
      ))}
    </div>
  );
}

function Tag({
  children,
  action,
}: {
  children: React.ReactNode;
  action?: () => void;
}) {
  return (
    <span
      onClick={action}
      className="p-1 text-xs  rounded-md bg-gray-900 ring-gray-300 ring-1"
    >
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="px-4">
      <Header />
      <Hero />
      <Portfolio />
    </main>
  );
}
