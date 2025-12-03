import type { ReactNode } from "react";

interface SocialItem {
  icon: ReactNode;
  href: string;
}

interface FooterProps {
  nav: { label: string; href: string }[];
  social: SocialItem[];
  copyright: string;
}

export default function Footer({ nav, social, copyright }: FooterProps) {
  return (
    <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center border-t pt-6 border-gray-300">
          {/* nav - start */}
          <nav className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
            {nav.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-black transition duration-100 hover:text-green-500 active:text-green-600"
              >
                {item.label}
              </a>
            ))}
          </nav>
          {/* nav - end */}

          {/* social - start */}
          <div className="flex gap-4">
            {social.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                className="text-black transition duration-100 hover:text-green-500 active:text-green-600"
              >
                {item.icon}
              </a>
            ))}
          </div>
          {/* social - end */}
        </div>

        <div className="py-8 text-center text-sm text-black">
          {copyright}
        </div>
      </footer>
    </div>
  );
}