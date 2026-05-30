/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  PhoneIncoming,
  PhoneOutgoing,
  PhoneMissed,
  Phone,
} from "lucide-react";

export const CallLogCard = ({
  log,
}: any) => {
  const Icon =
    log.type === "incoming"
      ? PhoneIncoming
      : log.type === "outgoing"
      ? PhoneOutgoing
      : PhoneMissed;

  return (
    <div
      className="
        p-3
        mx-3
        rounded-xl
        cursor-pointer
        hover:bg-slate-100
        dark:hover:bg-slate-800
      "
    >
      <div className="flex gap-3">
        <img
          src={log.avatar}
          className="
            w-10
            h-10
            rounded-full
          "
        />

        <div className="flex-1">
          <h4>{log.name}</h4>

          <div className="flex items-center gap-1">
            <Icon size={12} />

            <span className="text-xs">
              {log.time}
            </span>
          </div>
        </div>

        <Phone size={16} />
      </div>
    </div>
  );
};