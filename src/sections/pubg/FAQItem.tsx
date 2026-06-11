type Props = {
  question: string;
  answer: string;
  open: boolean;
  onClick: () => void;
};

export default function FAQItem({
  question,
  answer,
  open,
  onClick,
}: Props) {
  return (
    <div
      className="
        bg-white
        rounded-sm
        shadow-[0_8px_20px_rgba(0,0,0,0.03)]
        overflow-hidden
      "
    >
      <button
        onClick={onClick}
        className="
          w-full
          px-6
          py-6
          flex
          justify-between
          items-center
          text-left
        "
      >
        <h3
          className="
            text-[16px]
            md:text-[18px]
            font-semibold
            text-[#2A355E]
          "
        >
          {question}
        </h3>

        <span
          className="
            text-[#00BFFF]
            text-[32px]
            leading-none
            font-light
          "
        >
          {open ? "×" : "+"}
        </span>
      </button>


      <div
        className={`
          transition-all
          duration-300
          overflow-hidden
          ${open ? "max-h-40 pb-6 px-6" : "max-h-0"}
        `}
      >
        <div className="border-l-2 border-[#00BFFF] pl-4">
          <p
            className="
              text-[14px]
              md:text-[15px]
              text-[#8C92A9]
              leading-7
            "
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}