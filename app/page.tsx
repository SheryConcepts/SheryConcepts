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
      <div className="mt-2 text-sm text-gray-300">{description}</div>
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
            involved CMS for Shop Owners to manager their Inventory.{" "}
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
          Native paid back back. I implemented a new module for our app, to
          allow shop keeper to sign as admin and scan products for adminstration
          puposes.
        </p>
        <p>
          Tasked with making our existing React Native Typescript code base
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
    description: <div></div>,
  },
];

function Portfolio() {
  return (
    <div className="mt-8 text-gray-50">
      <h2 className="h2">Portfolio</h2>
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
