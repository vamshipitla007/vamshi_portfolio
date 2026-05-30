/* eslint-disable @typescript-eslint/no-explicit-any */

const MessageBubble = ({
  message,
}: {
  message: any;
}) => {
  const isMe = message.sender === "me";

  return (
    <div
      className={`flex ${
        isMe
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-[75%]
          md:max-w-[60%]
          px-4
          py-3
          rounded-2xl
          shadow-sm
          break-words

          ${
            isMe
              ? `
                bg-blue-500
                text-white
                rounded-br-md
              `
              : `
                bg-white
                dark:bg-slate-800
                text-slate-900
                dark:text-slate-100
                border
                border-slate-200
                dark:border-slate-700
                rounded-bl-md
              `
          }
        `}
      >
        <p className="text-sm leading-6">
          {message.text}
        </p>

        <div
          className={`
            mt-1
            text-[11px]
            flex
            justify-end

            ${
              isMe
                ? "text-blue-100"
                : "text-slate-400 dark:text-slate-500"
            }
          `}
        >
          {message.time}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;