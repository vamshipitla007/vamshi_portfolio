export default function SummerBonanzaCard() {
  return (
    <div
      className="
      relative
      h-[611px]
      w-[379px]
      overflow-hidden
      rounded-[18px]
      shadow-lg
    "
    >
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        alt=""
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#65B9FF]/70
          via-[#2687FF]/60
          to-[#0048C8]/90
        "
      />

      <div className="relative z-10 p-8 text-white">
        <h3 className="text-[30px] font-bold">
          Summer Bonanza!
        </h3>

        <div className="mt-8 space-y-8">
          <p className="text-[18px] leading-8">
            Enjoy comfortable transfers in
            shared coaches
          </p>

          <p className="text-[18px] leading-8">
            Choose from 5 flights per week
          </p>

          <p className="text-[18px] leading-8">
            Get a free Rapid Antigen Test
            at selected hotels
          </p>
        </div>
      </div>
    </div>
  );
}