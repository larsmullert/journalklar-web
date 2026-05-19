export default function Footer() {
  return (
    <footer className="border-t border-sand py-[52px] px-16 bg-parchment">
      <div className="max-w-[1100px] mx-auto grid grid-cols-[1fr_auto] gap-16 items-start">

        <div>
          <div className="font-serif text-[17px] font-normal text-evergreen mb-[14px] tracking-[-0.01em]">
            [PLACEHOLDER logo]
          </div>
          <p className="font-sans text-[12px] font-light text-muted leading-[1.75] max-w-[540px] mb-5">
            [PLACEHOLDER — disclaimer om produktets status, ansvar og outputtype.]
          </p>
          <p className="font-sans text-[12px] text-muted-light mb-0">
            [PLACEHOLDER — copyright og CVR]
          </p>
        </div>

        <div className="flex flex-col gap-[10px] text-right">
          {["[PLACEHOLDER link 1]", "[PLACEHOLDER link 2]", "[PLACEHOLDER link 3]", "[PLACEHOLDER link 4]"].map((label) => (
            <a
              key={label}
              href="#"
              className="font-sans text-[13px] text-muted hover:text-evergreen transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
