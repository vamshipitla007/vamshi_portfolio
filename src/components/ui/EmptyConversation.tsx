import { MessageSquareMore } from "lucide-react";

const EmptyConversation = () => {
  return (
    <div
      className="
        flex-1
        flex
        flex-col
        items-center
        justify-center
        bg-slate-50
        dark:bg-slate-950
        px-6
      "
    >
      {/* Icon Container */}
      <div
        className="
          w-28
          h-28
          rounded-full
          flex
          items-center
          justify-center
          bg-blue-100
          dark:bg-blue-950/40
          border
          border-blue-200
          dark:border-blue-800
        "
      >
        <MessageSquareMore
          size={48}
          className="
            text-blue-600
            dark:text-blue-400
          "
        />
      </div>

      {/* Heading */}
      <h2
        className="
          mt-6
          text-2xl
          font-semibold
          text-slate-900
          dark:text-slate-100
        "
      >
        No Conversation Selected
      </h2>

      {/* Description */}
      <p
        className="
          mt-2
          max-w-md
          text-center
          text-sm
          leading-6
          text-slate-500
          dark:text-slate-400
        "
      >
        Choose a chat from the sidebar to start messaging,
        collaborate with your team, and stay connected in
        real time.
      </p>

      {/* Decorative Card */}
      <div
        className="
          mt-8
          w-full
          max-w-md
          rounded-2xl
          border
          border-slate-200
          dark:border-slate-800
          bg-white
          dark:bg-slate-900
          p-5
          shadow-sm
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              w-10
              h-10
              rounded-full
              bg-blue-500
            "
          />

          <div className="flex-1">
            <div
              className="
                h-3
                w-32
                rounded
                bg-slate-200
                dark:bg-slate-700
              "
            />

            <div
              className="
                h-2
                w-20
                rounded
                mt-2
                bg-slate-100
                dark:bg-slate-800
              "
            />
          </div>
        </div>

        <div
          className="
            h-3
            w-full
            rounded
            mt-5
            bg-slate-100
            dark:bg-slate-800
          "
        />

        <div
          className="
            h-3
            w-4/5
            rounded
            mt-3
            bg-slate-100
            dark:bg-slate-800
          "
        />
      </div>
    </div>
  );
};

export default EmptyConversation;