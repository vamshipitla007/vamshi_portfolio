/* eslint-disable @typescript-eslint/no-explicit-any */
type Props = {
  selectedEvent: any;
  setSelectedEvent: React.Dispatch<React.SetStateAction<any | null>>;
};

const EventPopup = ({
  selectedEvent,
  setSelectedEvent
}: Props) => {
  return (
    <div   onClick={() =>
        setSelectedEvent(null)
      } className="absolute left-1/2 top-[260px] z-50 hidden w-[280px] -translate-x-1/2 overflow-hidden rounded-[18px] border border-[#E5E7EB] bg-white shadow-[0px_25px_60px_rgba(0,0,0,0.12)] xl:block">
      <img
        src={selectedEvent.image}
        alt="event"
        className="h-[150px] w-full object-cover"
      />

      <div className="p-5">
        <h3 className="text-[18px] font-bold text-[#202224]">
          {selectedEvent.title}
        </h3>

        <p className="mt-2 text-[12px] text-[#71717A]">
          Zillul Design Agency
        </p>

        <p className="mt-2 text-[12px] text-[#71717A]">
          Today 07:19 AM
        </p>

        <p className="mt-2 text-[12px] text-[#71717A]">
          56 Davion Mission Suite 157
        </p>

        <div className="mt-5 flex items-center">
          {selectedEvent.members.map(
            (
              member: string,
              index: number,
            ) => (
              <img
                key={index}
                src={member}
                alt="member"
                className="-ml-2 h-[30px] w-[30px] rounded-full border-2 border-white object-cover first:ml-0"
              />
            ),
          )}

          <div className="ml-2 flex h-[30px] w-[30px] items-center justify-center rounded-full border border-[#4F7CF7] text-[10px] font-semibold text-[#4F7CF7]">
            {selectedEvent.extra}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPopup;