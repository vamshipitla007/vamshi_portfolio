import { useState } from "react";
import TravelNavbar from "./TravelNavbar";
import TravelSearchBar from "./TravelSearchBar";
import Categories from "./Categories";
import DestinationCard from "./DestinationCard";
import {
  allInclusivePackages,
  destinations,
  honeymoonSpecial,
  recentlyViewed,
} from "@/data/travel";
import SummerBonanzaCard from "./SummerBonanzaCard";
import DestinationSection from "./DestinationSection";
import TravelFooter from "./TravelFooter";

export default function TravelHome() {
  const [search, setSearch] = useState("");

  const [checkIn, setCheckIn] = useState("");

  const [checkOut, setCheckOut] = useState("");

  const [guests, setGuests] = useState("1 Room, 2 Adults");

  const filtered = destinations.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <section
        className="
        relative
        h-[950px]
        bg-cover
        bg-center
      "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b')",
        }}
      >
        <div className="absolute inset-0 bg-black/35" />

        <TravelNavbar />

        <div
          className="
          relative
          mx-auto
          max-w-7xl
          px-6
          pt-32
        "
        >
          <h1
            className="
            max-w-xl
            text-5xl
            font-bold
            leading-tight
            text-white
            md:text-7xl
          "
          >
            The whole world awaits.
          </h1>

          <TravelSearchBar
            search={search}
            setSearch={setSearch}
            checkIn={checkIn}
            setCheckIn={setCheckIn}
            checkOut={checkOut}
            setCheckOut={setCheckOut}
            guests={guests}
            setGuests={setGuests}
          />

          <Categories />

          <div className="mt-16">
            <h2 className="mb-8 text-4xl font-bold text-white">
              Popular Beach Destinations
            </h2>

            <div
              className="
              flex
              gap-6
              overflow-x-auto
              pb-10
            "
            >
              {filtered.map((item) => (
                <DestinationCard key={item.id} item={item} showLike={true} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-6 mt-100">
        <section className="mt-24">
          <h2
            className="
            mb-8
            text-[40px]
            font-bold
            text-[#121212]
            "
          >
            Recently Viewed
          </h2>

          <div
            className="
            flex
            gap-8
            overflow-x-auto
            pb-6
            "
          >
            {recentlyViewed.map((item) => (
              <DestinationCard key={item.id} item={item} showLike={true} />
            ))}

            <SummerBonanzaCard />
          </div>
        </section>
        {/* All Inclusive */}

        <DestinationSection
          title="All Inclusive Packages!"
          data={allInclusivePackages}
        />

        {/* Honeymoon */}

        <DestinationSection
          title="Honeymoon Freebies Special"
          data={honeymoonSpecial}
        />
      </div>
      <TravelFooter />
    </div>
  );
}
