import Head from "next/head";

export const SITE_URL = "https://itsiakkas.com";
export const SITE_NAME = "Ioannis Tsiakkas";
export const SITE_DESCRIPTION =
  "Software engineer and part time photographer.";
export const DEFAULT_SHARE_IMAGE =
  "https://avatars.githubusercontent.com/u/23459466?v=4";
export const GITHUB_URL = "https://github.com/keybraker";
export const LINKEDIN_URL = "https://www.linkedin.com/in/itsiakkas";
export const PERSON_ID = `${SITE_URL}/#person`;

export type JsonLd = Record<string, unknown>;

const personJsonLd: JsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  image: DEFAULT_SHARE_IMAGE,
  jobTitle: "Software Engineer",
  description:
    "Software engineer with professional experience building web applications, focused on backend systems, infrastructure and system architecture. Also a part time photographer.",
  sameAs: [GITHUB_URL, LINKEDIN_URL],
  knowsAbout: [
    "Software Engineering",
    "System Architecture",
    "Backend Development",
    "Cloud Infrastructure",
    "Photography",
  ],
};

function toAbsoluteUrl(url: string) {
  const absolute = /^https?:\/\//.test(url)
    ? url
    : `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
  return encodeURI(absolute);
}

export { toAbsoluteUrl };

function serializeJsonLd(data: JsonLd) {
  // Prevent a value from terminating the surrounding script element early.
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

interface SeoProps {
  title: string;
  description?: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "profile" | "article";
  noindex?: boolean;
  canonical?: boolean;
  preloadImage?: string;
  jsonLd?: JsonLd | JsonLd[];
}

export default function Seo({
  title,
  description = SITE_DESCRIPTION,
  path,
  image = DEFAULT_SHARE_IMAGE,
  imageAlt,
  type = "website",
  noindex = false,
  canonical = true,
  preloadImage,
  jsonLd,
}: SeoProps) {
  const url = toAbsoluteUrl(path);
  const shareImage = toAbsoluteUrl(image);
  const shareImageAlt = imageAlt ?? title;
  const structuredData = [personJsonLd, ...(jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [])];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex,follow" : "index,follow"} />

      {canonical && <link rel="canonical" href={url} />}
      {preloadImage && <link rel="preload" as="image" href={preloadImage} />}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={shareImage} />
      <meta property="og:image:alt" content={shareImageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={shareImage} />
      <meta name="twitter:image:alt" content={shareImageAlt} />

      {structuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
        />
      ))}
    </Head>
  );
}
