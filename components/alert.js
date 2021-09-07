import Container from "./container";
import cn from "classnames";
import i18n from "../lib/i18n";
import { useRouter } from "next/router";

export default function Alert({ preview }) {
  const { locale } = useRouter();

  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              {i18n.alert.draftContent[locale]}{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                {i18n.alert.clickCta[locale]}
              </a>{" "}
              {i18n.alert.exitPreview[locale]}
            </>
          ) : (
            <>
              {i18n.alert.publishedContent[locale]}{" "}
              <a
                href="/api/preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                {i18n.alert.clickCta[locale]}
              </a>{" "}
              {i18n.alert.enterPreview[locale]}
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
