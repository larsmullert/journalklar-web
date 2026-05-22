"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="print-hide"
      style={{
        fontFamily: "inherit",
        fontSize: "14px",
        fontWeight: 500,
        backgroundColor: "#E8E4DF",
        color: "#1D3A2F",
        border: "none",
        cursor: "pointer",
        padding: "8px 18px",
        lineHeight: 1.4,
        whiteSpace: "nowrap",
      }}
    >
      Download som PDF
    </button>
  );
}
