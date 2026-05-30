/* eslint-disable @typescript-eslint/no-explicit-any */
import { Phone, Search } from "lucide-react";
import { CallLogCard } from "./CallLogCard";
import { useDispatch, useSelector } from "react-redux";
import { openNewCallModal } from "@/utils/callSlice";

const CallLogList = () => {
  const { callLogs, search } = useSelector((state: any) => state.call);

  const filteredLogs = callLogs.filter((log: any) =>
    log.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="pb-4 overflow-y-auto">
      {filteredLogs.map((log: any) => (
        <CallLogCard key={log.id} log={log} />
      ))}
    </div>
  );
};

export const CallList = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="
        w-[340px]
        bg-white
        dark:bg-slate-900
        border-r
      "
    >
      <div className="p-5">
        <h1 className="text-2xl font-bold">Call Log</h1>

        <div className="mt-4 relative">
          <Search
            size={16}
            className="
              absolute
              left-3
              top-3
            "
          />

          <input
            placeholder="Search"
            className="
              w-full
              pl-10
              h-10
              rounded-xl
              bg-slate-100
              dark:bg-slate-800
            "
          />
        </div>

        <button
          className="
            mt-4
            flex
            items-center
            gap-2
            text-blue-500
            text-sm
          "
          onClick={() => {
            // Dispatch action to open new conversation modal
            dispatch(openNewCallModal());
          }}
        >
          Start new conversation
          <Phone size={14} />
        </button>
      </div>

      <CallLogList />
    </div>
  );
};
