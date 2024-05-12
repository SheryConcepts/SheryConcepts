import Link from "next/link";
import { forwardRef } from "react";

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
      <HeaderButton href={{ path: "/resume.pdf", targetBlank: true }}>
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
  tags?: Array<Parameters<typeof Tag>[0]>;
  description: JSX.Element;
}) {
  return (
    <div className="mt-4 ml-0 mb-8  max-w-screen-md font-sans">
      <div className="flex gap-y-1 flex-wrap flex-row gap-x-3 justify-start items-center">
        <h3 className="h3">{title}</h3>
        {tags && tags.length > 0 ? (
          <div className="flex flex-row gap-y-1 justify-start items-center flex-wrap gap-x-2">
            {tags.map((i, index) => (
              <Tag key={index} icon={i.icon} href={i.href}>
                {i.children}
              </Tag>
            ))}
          </div>
        ) : null}
      </div>
      <p className="text-gray-300 mt-1 text-xs">{subTitle}</p>
      <div className="mt-2 leading-5 text-sm text-gray-300">{description}</div>
    </div>
  );
}

// { children: "Android" },
// { children: "Live", href: "https://google.com" },
// {
//   children: "Source Code",
//   href: "https://github.com/SheryConcepts",
// },

const InlineLink = forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithRef<typeof Link>
>(({ children, ...props }, ref) => {
  return (
    <Link
      {...props}
      className="text-white underline-offset-3 cursor-pointer underline"
      href={props.href}
      ref={ref}
      target={props.target ? props.target : "_blank"}
    >
      {children}
    </Link>
  );
});
InlineLink.displayName = "InlineLink";

const Portfolios: Array<Parameters<typeof PortfolioCard>[0]> = [
  {
    subTitle: "Huma Productions",
    title: "Contactless Checkout",
    tags: [
      {
        children: "iOS",
      },
      { children: "Mobile" },
      {
        children: "Live",
        href: "https://apps.apple.com/us/app/huma-contactless/id6478042324",
      },
    ],
    description: (
      <div>
        <p>
          Huma Contactless for iOS is a hassle-free self checkout app. It helps
          Shoppers find, scan, pay (self checkout) and manage their groceries. I
          was the hired as a solo developer by Huma Productions to turn their
          idea into reality.
        </p>
        <div className="ml-4">
          <li>
            <InlineLink href="https://reactnative.dev">React Native</InlineLink>{" "}
            was used as our Framework of choice, with{" "}
            <InlineLink href={"https://www.typescriptlang.org"}>
              Typescript
            </InlineLink>{" "}
            for a typesafe and modular codebase.
          </li>
          <li>
            For styling of our app we decided to use{" "}
            <InlineLink href="https://tailwindcss.com">Tailwindcss</InlineLink>{" "}
            enabled by{" "}
            <InlineLink href="https://nativewind.dev">Nativewind</InlineLink>,
            rather than simple CSS Stylesheet in React Native.
          </li>
          <li>
            Backend of the app was a bit tricky to implement, because it also
            involved CMS for Shop Owners to manag their Inventory.{" "}
            <InlineLink href={"https://www.odoo.com/"}>Odoo</InlineLink> was
            used for this purpose. Odoo was integrated into our backend with
            APIs. <InlineLink href={"https://nextjs.org"}>Nextjs</InlineLink>{" "}
            was used for writing the Backend, deployed on Serverless
            Infrastructure by{" "}
            <InlineLink href="https://vercel.com">Vercel</InlineLink>.
          </li>
          <li>
            For Authorization and Authenctication we used{" "}
            <InlineLink href="https://clerk.com">Clerk</InlineLink>.
          </li>
          <li>
            <InlineLink href="https://stripe.com">Stripe</InlineLink> was used
            for implementing Payments for our platform.
          </li>
        </div>
      </div>
    ),
  },
  {
    title: "Contactless Checkout",
    subTitle: "Huma Productions",
    tags: [
      {
        children: "Android",
      },
      { children: "Mobile" },
      {
        children: "Live",
        href: "https://play.google.com/store/apps/details?id=com.huma.contactless",
      },
    ],
    description: (
      <div className="space-y-2">
        <p>
          I was hired again for an Android version of our app. Using React
          Native paid back. I implemented a new module for our app, to allow
          shop keepers to sign as admin and scan products for administration
          puposes.
        </p>
        <p>
          Tasked with making our existing React Native Typescript codebase
          cross-platform for Android and publishing app on Playstore.
        </p>
        <p>
          Most challenging task was making iOS Product Scanner compatible with
          Android.
        </p>
      </div>
    ),
  },
  {
    title: "Headless Eccommerce Storefront",
    subTitle: "Panaverse",
    tags: [
      {
        children: "Web",
      },
      {
        children: "Source Code",
        href: "https://github.com/SheryConcepts/shopify-storefront",
      },
      {
        children: "Live",
        href: "https://shopify-storefront-plum.vercel.app/",
      },
    ],
    description: (
      <div>
        <p>
          As part of a team I was lead backend developer for the project. I was
          responsible for integrating existing Shopify Headless Storefront
          frontend code with backend using{" "}
          <InlineLink href="https://shopify.dev/docs/api/storefront">
            Shopify Storefront Graphql APIs
          </InlineLink>
          .
        </p>
        <div className="ml-4">
          <li>
            Web app uses{" "}
            <InlineLink href="http://nextjs.org">Nextjs</InlineLink> for
            performance and a great dev experience. It is built using the latest
            NextJs App Directory features.
          </li>
          <li>
            Most interesting part of the project was building a Webhooks system
            integrating Storefront and Shopify CMS, doing{" "}
            <InlineLink href="https://nextjs.org/docs/app/building-your-application/caching">
              Nextjs Cache
            </InlineLink>{" "}
            revalidation and streaming incremental segments of UI from Server,
            resulting in perfomance and better User Experience.
          </li>
          <li>
            <InlineLink href="http://vercel.com">Vercel</InlineLink> is used for
            Serverless Deployment Infrastructure.
          </li>
        </div>
      </div>
    ),
  },
  {
    title: "Eccommerce Hackathon",
    subTitle: "Panaverse",
    tags: [
      {
        children: "Web",
      },
      {
        children: "Live Site",
        href: "https://hackathon-drab.vercel.app",
      },
      {
        children: "Source Code",
        href: "https://github.com/SheryConcepts/panaverse_hackathon",
      },
    ],
    description: (
      <div>
        <p>
          I participated in a Hackathon at Panaverse for building an Open Source
          Eccommerce using the described tech stack. Participants were given 1
          week to learn the relevant tech and implement a complete functioning
          Eccomerce Store.
        </p>
        <div className="ml-4">
          <li>
            Project involved building frontend, backend, payments and a CMS for
            the Store.
          </li>
          <li>
            <InlineLink href="http://nextjs.org">Nextjs</InlineLink> a{" "}
            <InlineLink href="http://react.dev">React</InlineLink> framework
            with{" "}
            <InlineLink href="https://www.typescriptlang.org">
              Typescript
            </InlineLink>{" "}
            for a modular and typesafe codebase.
          </li>
          <li>
            <InlineLink href="http://sanity.io">Sanity</InlineLink> was used for
            Content Management.{" "}
            <InlineLink href="http://clerk.com">Clerk</InlineLink> for
            Authorization and Authenctication.{" "}
            <InlineLink href="https://orm.drizzle.team/">
              Drizzle ORM
            </InlineLink>{" "}
            with PostgresSQL database.
          </li>
          <li>
            <InlineLink href="http://stripe.com">Stripe</InlineLink> was used
            for hosted payment processing. Site is hosted on Serverless Infra by
            Vercel.
          </li>
        </div>
      </div>
    ),
  },
  // {
  //   title: "Blogger",
  //   subTitle: "Personal Project",
  //   tags: [
  //     {
  //       children: "Web",
  //     },
  //     {
  //       children: "Live Site",
  //       href: "https://blogger-eta-two.vercel.app",
  //     },
  //     {
  //       children: "Source Code",
  //       href: "https://github.com/SheryConcepts/blogger",
  //     },
  //   ],
  //   description: (
  //     <div>
  //       <p>
  //         Blogger is a blogging platform readers can read and write blogs. Its
  //         admin side allows use manage their account and publish articles in a
  //         Markdown based editor. It uses the following tech:
  //       </p>
  //       <div className="ml-4">
  //         <li>
  //           <InlineLink href="https://nextjs.org">Nextjs</InlineLink> as
  //           Framework.{" "}
  //           <InlineLink href="https:prisma.io/orm">Prisma ORM</InlineLink> with
  //           PostgresSQL database.
  //         </li>
  //         <li>
  //           <InlineLink href="http://authjs.dev">Authjs</InlineLink> for
  //           Authenctication and Authorization.
  //         </li>
  //         <li>
  //           Most fun part of the project was implementing a Markdown based
  //           editor for users to write the blogs.
  //         </li>
  //       </div>
  //     </div>
  //   ),
  // },
  {
    title: "Teacher",
    subTitle: "Panaverse",
    description: (
      <div>
        <p>
          I worked as a volunteer teacher for Panavserse. Teaching students how
          to create Shopify Storefronts as means for Event Driven Architecture.
          I really enjoyed my experience there.
        </p>
        <p className="mt-2">
          All of my classes were live streamed on{" "}
          <InlineLink href="https://www.youtube.com/@panaverse">
            Panaverse Youtube.
          </InlineLink>
        </p>
      </div>
    ),
  },
];

function Portfolio() {
  return (
    <div className="mt-8 text-gray-50">
      <h2 className="h2">Work</h2>
      {Portfolios.map((i, index) => (
        <PortfolioCard
          key={index}
          description={i.description}
          subTitle={i.subTitle}
          tags={i.tags}
          title={i.title}
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
      className="cursor-pointer flex flex-row justify-start items-center md:p-[3px] p-[2px] text-xs text-gray-300  rounded-sm bg-purple-800/50 ring-purple-300 "
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

function About() {
  return (
    <div className="mt-8 text-gray-50">
      <h2 className="h2">About</h2>
      <div className="mt-2 space-y-4 font-sans font text-gray-300">
        <div className="flex gap-x-4 flex-start items-start flex-row">
          <Tag href="mailto:chsheharyarahmed@gmail.com">
            chsheharyarahmed@gmail.com
          </Tag>
        </div>
        <p>
          I am a passionate and experienced Software Developer building Mobile
          Apps and Web apps. Having worked in teams as well as solo developer
          for companies, enables me to bootstrap technical systems and work
          efficiently with existing ones.
        </p>
        <div className="space-y-2">
          <p>I am proficient in:</p>
          <div className="flex ml-4 gap-y-2 flex-wrap gap-x-2 flex-start items-start flex-row">
            <Tag>Typescript</Tag>
            <Tag>Node.js</Tag>
            <Tag>Javascript</Tag>
            <Tag>React</Tag>
            <Tag>React Native</Tag>
            <Tag>Nextjs</Tag>
            <Tag>PostgresSQL</Tag>
            <Tag>MySQL</Tag>
            <Tag>MongoDB</Tag>
            <Tag>Firestore DB</Tag>
            <Tag>Python</Tag>
            <Tag>CSS</Tag>
            <Tag>HTML</Tag>
            <Tag>AWS</Tag>
            <Tag>Serverless</Tag>
            <Tag>IaC</Tag>
          </div>
        </div>
        <div className="space-y-2">
          <p>Tinkering with:</p>
          <div className="flex ml-4 gap-x-2 flex-start items-start flex-row">
            <Tag>Rust</Tag>
            <Tag>Go</Tag>
          </div>
        </div>
      </div>
      <p></p>
    </div>
  );
}

function Education() {
  return (
    <div className="mt-8 text-gray-50 pb-8">
      <h2 className="h2">Education</h2>
      <div className="mt-4 text-sm space-y-1 font-sans font text-gray-300">
        <p>Facult of Science, FSC (2017-2019) - Concordia College</p>
        <p>PIAIC (2022-2024)</p>
        <p>
          Bachelor of Computer Science (2024-2027) - Virtual University of
          Pakistan.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="px-4">
      <Header />
      <Hero />
      <About />
      <Portfolio />
    </main>
  );
}
