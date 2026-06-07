/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Heart,
  Star,
  Plane,
  Building2,
  Car,
  MapPinned,
} from "lucide-react";

export default function DestinationCard({ item, showLike }: any) {
  return (
    <div
      className="
        flex
        h-[611px]
        w-[379px]
        flex-col
        rounded-[18px]
        bg-white
        p-[18px]
        shadow-[0_10px_35px_rgba(0,0,0,0.12)]
        transition-all
        duration-300
        hover:-translate-y-2
      "
    >
      {/* Image */}
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          style={{
            height: "221px",
            width: "100%",
            borderRadius: "18px",
            objectFit: "cover",
          }}
          className="h-[221px] w-full rounded-[18px] object-cover"
        />

       {showLike && <button
          className="
            absolute
            right-4
            top-4
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-black/10
            backdrop-blur-sm
          "
        >
          <Heart size={28} className="text-white" />
        </button>}
      </div>

      {/* Content */}
      <div className="mt-7 flex flex-1 flex-col">
        {/* Title */}
        <div className="flex items-center justify-between">
          <h3
            className="
              text-[16px]
              font-semibold
              text-[#323232]
            "
          >
            {item.name}
          </h3>

          <div className="flex items-center gap-2">
            <Star size={16} fill="#323232" className="text-[#323232]" />

            <span
              className="
                text-[16px]
                font-medium
                text-[#323232]
              "
            >
              {item.rating}
            </span>
          </div>
        </div>

        {/* Duration */}
        <p
          className="
            mt-3
            text-[16px]
            font-medium
            text-[#8A8A8A]
          "
        >
          {item.duration}
        </p>

        {/* Services */}
        <div
          className="
            mt-8
            grid
            grid-cols-4
            gap-4
            text-center
          "
        >
          <div>
            <Plane size={16} className="mx-auto text-[#8A8A8A]" />
            <p className="mt-2 text-[10px] text-[#8A8A8A]">2 Flights</p>
          </div>

          <div>
            <Building2 size={16} className="mx-auto text-[#8A8A8A]" />
            <p className="mt-2 text-[10px] text-[#8A8A8A]">1 Hotel</p>
          </div>

          <div>
            <Car size={16} className="mx-auto text-[#8A8A8A]" />
            <p className="mt-2 text-[10px] text-[#8A8A8A]">2 Transfers</p>
          </div>

          <div>
            <MapPinned size={16} className="mx-auto text-[#8A8A8A]" />
            <p className="mt-2 text-[10px] text-[#8A8A8A]">4 Activities</p>
          </div>
        </div>

        {/* Features */}
        <ul
          className="
            mt-8
            flex-1
            space-y-3
            pl-5
            text-[16px]
            text-[#8A8A8A]
          "
        >
          <li>Tour combo with return airport transfer</li>

          <li>City Tour</li>

          <li>Curious Corner</li>
        </ul>

        {/* Price */}
        <div
          className="
            mt-auto
            flex
            items-end
            gap-4
            pt-6
          "
        >
          <span
            className="
              text-[12px]
              text-[#8A8A8A]
              line-through
            "
          >
            ₹98,952
          </span>

          <div className="flex items-end gap-2">
            <span
              className="
                text-[22px]
                font-bold
                leading-none
                text-black
              "
            >
              ₹88,952
            </span>

            <span
              className="
                mb-1
                text-[12px]
                text-[#8A8A8A]
              "
            >
              Per person
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
