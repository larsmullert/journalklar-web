"use client";

export default function CookieSettingsButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event("openCookieSettings"))}
      className="block font-sans text-[13px] font-normal text-evergreen no-underline hover:underline leading-[1.7] bg-transparent border-none p-0 cursor-pointer text-left"
    >
      Cookieindstillinger
    </button>
  );
}
