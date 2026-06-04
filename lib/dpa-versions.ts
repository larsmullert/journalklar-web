/**
 * Kanonisk kilde: public/dpa-v1.txt
 * Tilgængelig på: journalklar.dk/dpa-v1.txt
 *
 * SHA-256 beregnet med: shasum -a 256 public/dpa-v1.txt
 *
 * VIGTIGT: Opdatér denne fil og public/dpa-v*.txt synkront ved enhver
 * revision af DPA-teksten. DPAAftaleContent.tsx skal afspejle samme indhold.
 * Bump version-nøglen ved juridisk væsentlige ændringer — bevar gamle versioner.
 */

// CURRENT_DPA defineres direkte — ikke via opslag — for at undgå
// build-fejl i Next.js's server/client module-graph.
export const CURRENT_DPA = {
  version: "1.0",
  effectiveDate: "2026-05",
  textPath: "/dpa-v1.txt",
  sha256: "d562b9a5c8014e4a7bda21209ad58a0ab3dd7f500e537bb0acec611247205069",
} as const;

export const CURRENT_DPA_VERSION = CURRENT_DPA.version;

// Historisk register — bevar gamle versioner her ved fremtidige opdateringer.
export const DPA_VERSIONS = {
  "1.0": CURRENT_DPA,
} as const;
