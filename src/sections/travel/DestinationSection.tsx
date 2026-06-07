/* eslint-disable @typescript-eslint/no-explicit-any */
import DestinationCard from "./DestinationCard";

export default function DestinationSection({
  title,
  data,
}:any) {
  return (
    <section className="mt-20">
      <h2
        className="
          mb-8
          text-[40px]
          font-bold
          text-[#121212]
        "
      >
        {title}
      </h2>

      <div
        className="
          flex
          gap-8
          overflow-x-auto
          pb-4
          scrollbar-hide
        "
      >
        {data.map((item:any) => (
          <DestinationCard
            key={item.id}
            item={item}
            showLike={false}
          />
        ))}
      </div>
    </section>
  );
}