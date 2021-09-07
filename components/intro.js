import { useRouter } from "next/router";
import i18n from "../lib/i18n";

export default function Intro() {
  const { locale } = useRouter();
  const formattedLocale = locale.split("-")[0];
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        {i18n.intro.example[formattedLocale]}{" "}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Next.js
        </a>{" "}
        {i18n.intro.and[formattedLocale]}{" "}
        <a
          href="https://www.datocms.com/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          DatoCMS
        </a>
        .
      </h4>
    </section>
  );
}
