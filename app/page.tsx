import Link from "next/link";

function HeaderButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: { path: string; targetBlank: true };
}) {
  return href.targetBlank ? (
    <Link
      href={href.path}
      target="_blank"
      className="flex cursor-pointer flex-row items-center"
    >
      <button className="underline cursor-pointer text-sm flex-none tracking-wider underline-offset-2">
        {children}
      </button>
      <ArrowOutward />
    </Link>
  ) : (
    <Link
      href={href.path}
      className="flex flex-row cursor-pointer items-center"
    >
      <button className="underline cursor-pointer text-sm flex-none tracking-wider underline-offset-2">
        {children}
      </button>
      <ArrowOutward /> :
    </Link>
  );
}

function Header() {
  return (
    <div className="h-8 flex flex-row text-gray-50 py-6 w-full gap-x-4 justify-end items-center font-sans">
      <HeaderButton
        href={{ path: "https://github.com/SheryConcepts", targetBlank: true }}
      >
        Github
      </HeaderButton>
      <HeaderButton href={{ path: "https://google.com", targetBlank: true }}>
        Resume
      </HeaderButton>
    </div>
  );
}

function Hero() {
  return (
    <div className="py-4 mt-8 text-gray-50">
      <h1 className="h1">Sheharyar Ahmed</h1>
      <p className="font-sans text-md">Software Developer</p>
      <p className="font-sans text-xl mt-2">
        Building modern digital experiences on Mobile and Web.
      </p>
    </div>
  );
}

function PortfolioCard({
  title,
  subTitle,
  tags,
  description,
}: {
  title: string;
  subTitle: string;
  tags: Array<Parameters<typeof Tag>[0]>;
  description: React.ReactNode;
}) {
  return (
    <div className="mt-4 ml-0 mb-8  max-w-screen-md font-sans">
      <div className="flex gap-y-1 flex-wrap flex-row gap-x-3 justify-start items-center">
        <h3 className="h3">{title}</h3>
        <div className="flex flex-row gap-y-1 justify-start items-center flex-wrap gap-x-2">
          {tags.map((i, index) => (
            <Tag key={index} icon={i.icon} href={i.href}>
              {i.children}
            </Tag>
          ))}
        </div>
      </div>
      <p className="text-gray-300 mt-1 text-xs">{subTitle}</p>
      <div className="mt-2 text-gray-300">{description}</div>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="mt-8 text-gray-50">
      <h2 className="h2">Portfolio</h2>
      {Array.from({ length: 4 }).map((_, index) => (
        <PortfolioCard
          key={index}
          description="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis."
          subTitle="Huma Productions"
          tags={[
            { children: "Live", href: "https://google.com" },
            { children: "Android" },
            {
              children: "Source Code",
              href: "https://github.com/SheryConcepts",
            },
          ]}
          title="Contactless Checkout"
        />
      ))}
    </div>
  );
}

function Tag({
  children,
  href,
  icon,
}: {
  children?: React.ReactNode;
  href?: string;
  icon?: () => React.ReactNode;
}) {
  return href ? (
    <Link
      className="cursor-pointer flex flex-row justify-start items-center md:p-[3px] p-[2px] text-xs text-gray-300  rounded-sm bg-gray-800 ring-gray-600 ring-1"
      href={href}
      target="_blank"
    >
      <span className="">{children}</span>
      <ArrowOutward />
    </Link>
  ) : (
    <div className="flex flex-row justify-start items-center md:p-[3px] p-[2px] text-xs text-gray-300  rounded-sm bg-gray-800 ring-gray-600 ring-1">
      <span className="">{children}</span>
    </div>
  );
}

function ArrowOutward() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="15px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#e8eaed"
    >
      <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
    </svg>
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
