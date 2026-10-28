import { ImageResponse } from "next/og";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { site } from "@/config/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = isLocale(locale) ? (locale as Locale) : "en";
  const dict = getDictionary(currentLocale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "76px 80px",
          background: "#0b0b0c",
          color: "#f2f0eb",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <span
            style={{
              fontSize: "26px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Pulso
          </span>
          <span
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "999px",
              background: "#d6ee54",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.02,
              maxWidth: "900px",
            }}
          >
            {`${dict.hero.titleLead} ${dict.hero.titleEmphasis} ${dict.hero.titleTail}`}
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#a9aaa5",
              maxWidth: "720px",
              lineHeight: 1.4,
            }}
          >
            {dict.meta.ogTagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #2e2f2c",
            paddingTop: "26px",
            fontSize: "16px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#8b8c87",
          }}
        >
          <span>{site.domain}</span>
          <span>{dict.footer.locations}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
