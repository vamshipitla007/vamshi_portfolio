type Props = {
  event: any;
};

const EventCard = ({
  event,
}: Props) => {
  return (
    <div className="border-b border-[#F0F0F0] px-5 py-5 last:border-none">
      <div className="flex gap-3">
        <img
          src={event.image}
          alt={event.title}
          className="h-[42px] w-[42px] rounded-full object-cover"
        />

        <div className="flex-1">
          <h3 className="text-[14px] font-semibold text-[#2B2B2B]">
            {event.title}
          </h3>

          <p className="mt-1 text-[11px] text-[#6B7280]">
            {event.date}
          </p>

          <p className="mt-1 text-[11px] text-[#6B7280]">
            {event.address}
          </p>

          <p className="mt-1 text-[11px] text-[#6B7280]">
            {event.location}
          </p>

          <div className="mt-3 flex items-center">
            {event.members.map(
              (
                member: string,
                index: number,
              ) => (
                <img
                  key={index}
                  src={member}
                  alt="member"
                  className="-ml-2 h-[24px] w-[24px] rounded-full border-2 border-white object-cover first:ml-0"
                />
              ),
            )}

            <div className="ml-2 flex h-[24px] w-[24px] items-center justify-center rounded-full border border-[#4F7CF7] text-[9px] font-semibold text-[#4F7CF7]">
              {event.extra}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;