import { PhoneOff } from "lucide-react";

interface CallingModalProps {
  open: boolean;
  callerName: string;
  receiverName: string;
  callerAvatar: string;
  receiverAvatar: string;
  onHangup: () => void;
}

const CallingModal = ({
  open,
  callerName,
  receiverName,
  callerAvatar,
  receiverAvatar,
  onHangup,
}: CallingModalProps) => {
  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50

        flex
        items-start
        justify-end

        bg-black/30
        backdrop-blur-[2px]
        p-4
      "
    >
      <div
        className="
          relative

          w-full
          max-w-[520px]

          rounded-[24px]

          bg-white
          dark:bg-slate-900

          p-8

          shadow-2xl
        "
      >
        {/* Users */}

        <div className="flex justify-center items-center gap-10">
          {/* Caller */}

          <div className="text-center">
            <img
              src={callerAvatar}
              alt={callerName}
              className="
                w-24
                h-24
                rounded-full
                object-cover
                mx-auto
              "
            />

            <p
              className="
                mt-3
                text-sm
                font-medium
                text-slate-900
                dark:text-white
              "
            >
              {callerName}
            </p>
          </div>

          {/* Wave Animation */}

          <div className="relative w-24 h-10">
            <span className="wave wave-1"></span>
            <span className="wave wave-2"></span>
            <span className="wave wave-3"></span>
          </div>

          {/* Receiver */}

          <div className="text-center">
            <img
              src={receiverAvatar}
              alt={receiverName}
              className="
                w-24
                h-24
                rounded-full
                object-cover
                mx-auto
              "
            />

            <p
              className="
                mt-3
                text-sm
                font-medium
                text-slate-900
                dark:text-white
              "
            >
              {receiverName}
            </p>
          </div>
        </div>

        {/* Status */}

        <h3
          className="
            text-center
            mt-10

            text-2xl
            font-semibold

            text-slate-900
            dark:text-white
          "
        >
          Connecting...
        </h3>

        {/* Hangup */}

        <div className="flex justify-center mt-8">
          <button
            onClick={onHangup}
            className="
              flex
              items-center
              gap-2

              px-4
              py-2

              text-xs
              font-medium

              border
              border-red-400

              text-red-500

              rounded-lg

              hover:bg-red-50
              dark:hover:bg-red-950/20

              transition-all
            "
          >
            <PhoneOff size={14} />
            Hang Up
          </button>
        </div>
      </div>

      <style>
        {`
          .wave {
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            height: 2px;
            background: #4f8cff;
            transform-origin: center;
            animation: waveAnim 1.2s infinite ease-in-out;
          }

          .wave-2 {
            animation-delay: 0.2s;
          }

          .wave-3 {
            animation-delay: 0.4s;
          }

          @keyframes waveAnim {
            0% {
              transform: translateY(-50%) scaleX(0.6);
              opacity: 0.2;
            }

            50% {
              transform: translateY(-50%) scaleX(1);
              opacity: 1;
            }

            100% {
              transform: translateY(-50%) scaleX(0.6);
              opacity: 0.2;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CallingModal;