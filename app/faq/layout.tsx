export const metadata = {
  title: "FAQ",
  description:
    "De spørgsmål du bør stille, før du bruger AI i psykologisk praksis. Svar om faglighed, ansvar, data, sikkerhed og arbejdsgang.",
  alternates: {
    canonical: "https://www.journalklar.dk/faq",
  },
  openGraph: {
    title: "FAQ · JournalKlar",
    description:
      "De spørgsmål du bør stille, før du bruger AI i psykologisk praksis. Svar om faglighed, ansvar, data, sikkerhed og arbejdsgang.",
    url: "https://www.journalklar.dk/faq",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
