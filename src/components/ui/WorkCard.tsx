// src/components/ui/WorkCard.tsx

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function WorkCard({ title, description, image }: Props) {
  return (
    <div
      className="
  relative rounded-2xl p-6 overflow-hidden
  transition duration-300 hover:scale-[1.02]
  border-t-[5px] border-[#4F228D]
  bg-[linear-gradient(110.49deg,#130428_19.95%,#251043_67.64%,#38126D_107.08%,#261045_156.61%,#190634_183.21%)]
"
    >
      <div className="flex items-center gap-6">
        {/* Image */}
        <img src={image} alt="" className="w-20 h-20 object-contain" />

        {/* Content */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white">{title}</h3>

          <p className="text-sm text-gray-300 max-w-sm">{description}</p>

          <button className="px-4 py-2 border border-purple-400 rounded-lg text-sm text-white hover:bg-purple-500/20 transition">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
}
