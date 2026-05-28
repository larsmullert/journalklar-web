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

export const DPA_VERSIONS = {
  "1.0": {
    version: "1.0",
    effectiveDate: "2026-05",
    textPath: "/dpa-v1.txt",
    sha256: "cc038680920e11fda276a05f797f618f850a02ab8ebee9ff8bfba7445044a259",
  },
} as const;

export const CURRENT_DPA_VERSION = "1.0" as const;
export const CURRENT_DPA = DPA_VERSIONS[CURRENT_DPA_VERSION];
