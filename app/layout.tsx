import type { Metadata } from "next";
import Script from "next/script";
import { Source_Serif_4, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://journalklar.dk"),
  title: {
    default: "JournalKlar",
    template: "%s — JournalKlar",
  },
  description: "Journaludkast fra dine egne faglige noter. Uden optagelse af sessionen.",
  openGraph: {
    siteName: "JournalKlar",
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="da"
      className={`${sourceSerif4.variable} ${sourceSans3.variable} h-full antialiased`}
    >
      <head>
        {/* Consent Mode v2 — default denied, skal køre FØR GTM */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                wait_for_update: 500,
              });
              gtag('js', new Date());
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}

        {/* GTM loader ikke i dev medmindre NEXT_PUBLIC_GTM_ID er sat i .env.local */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <>
            <Script
              id="gtm-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
                `,
              }}
            />
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        )}

        <CookieBanner />
      </body>
    </html>
  );
}
