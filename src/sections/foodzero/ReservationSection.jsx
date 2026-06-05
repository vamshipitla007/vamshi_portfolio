export default function ReservationSection() {
  return (
    <section className="bg-[#EBF0E4] py-24">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <h2 className="font-serif text-5xl md:text-7xl text-[#233000]">
          Make a Reservation
        </h2>

        <p className="mt-3 text-xs text-gray-500">
          Get in touch with restaurant
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <input
            type="date"
            className="border bg-transparent p-4 text-sm text-[#233000]"
          />

          <select className="border bg-transparent p-4 text-sm text-[#233000]">
            <option>6:30 pm</option>
          </select>

          <select className="border bg-transparent p-4 text-sm text-[#233000]">
            <option>2 Person</option>
          </select>
        </div>

        <button className="mt-10 bg-[#5E6600] px-10 py-4 text-sm text-white">
          Book Now
        </button>
      </div>
    </section>
  );
}