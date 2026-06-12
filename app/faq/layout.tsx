export const metadata = {
  title: "Ofte stillede spørgsmål om AI-journalnotat",
  description:
    "Har du spørgsmål om AI i psykologisk praksis? Her finder du svar om faglighed, ansvar, GDPR, datasikkerhed og den daglige arbejdsgang med JournalKlar.",
  alternates: {
    canonical: "https://www.journalklar.dk/faq",
  },
  openGraph: {
    title: "Ofte stillede spørgsmål om AI-journalnotat · JournalKlar",
    description:
      "Har du spørgsmål om AI i psykologisk praksis? Her finder du svar om faglighed, ansvar, GDPR, datasikkerhed og den daglige arbejdsgang med JournalKlar.",
    url: "https://www.journalklar.dk/faq",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
