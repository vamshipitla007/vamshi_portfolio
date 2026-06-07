/* eslint-disable @typescript-eslint/no-explicit-any */
import { Search, Calendar, Users } from "lucide-react";

export default function SearchBar({
  search,
  setSearch,
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  guests,
  setGuests,
}:any) {
  return (
    <div
      className="
      mt-10
      flex
      flex-col
      overflow-hidden
      rounded-2xl
      bg-white/20
      backdrop-blur-md
      md:flex-row
    "
    >
      <div className="flex flex-1 items-center px-5">
        <Search size={18} />
        <input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search destinations, hotels"
          className="
          w-full
          bg-transparent
          px-3
          py-5
          outline-none
        "
        />
      </div>

      <div className="flex items-center px-5">
        <Calendar size={18} />
        <input
          type="date"
          value={checkIn}
          onChange={(e) =>
            setCheckIn(e.target.value)
          }
          className="bg-transparent px-2"
        />
      </div>

      <div className="flex items-center px-5">
        <Calendar size={18} />
        <input
          type="date"
          value={checkOut}
          onChange={(e) =>
            setCheckOut(e.target.value)
          }
          className="bg-transparent px-2"
        />
      </div>

      <div className="flex items-center px-5">
        <Users size={18} />

        <select
          value={guests}
          onChange={(e) =>
            setGuests(e.target.value)
          }
          className="bg-transparent px-2"
        >
          <option>1 Room, 2 Adults</option>
          <option>2 Rooms, 4 Adults</option>
        </select>
      </div>

      <button
        className="
        m-3
        rounded-full
        bg-white
        px-10
        py-3
        font-semibold
        text-blue-900
      "
      >
        Search
      </button>
    </div>
  );
}