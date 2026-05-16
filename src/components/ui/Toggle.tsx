
const Toggle = ({
  active,
  onClick,
}: {
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative w-[52px] h-[28px] rounded-full transition-all ${
        active
          ? "bg-[#16DBCC]"
          : "bg-[#DFEAF2]"
      }`}
    >
      <div
        className={`absolute top-[2px] w-[24px] h-[24px] rounded-full bg-white transition-all ${
          active ? "left-[26px]" : "left-[2px]"
        }`}
      />
    </button>
  );
};

export default Toggle;