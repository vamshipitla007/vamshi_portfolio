/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { Phone, Video, X } from "lucide-react";
import { contacts } from "@/data/dummyChats";
import { closeNewCallModal } from "@/utils/callSlice";

export const NewConversationModal = () => {
  const dispatch = useDispatch();
  const open = useSelector((state: any) => state.call.showNewCallModal);

  if (!open) return null;

  const ContactRow = ({ contact }: any) => {
    return (
      <div
        className="
        flex
        items-center
        justify-between
      "
      >
        <div className="flex gap-3">
          <img
            src={contact.avatar}
            className="
            w-10
            h-10
            rounded-full
          "
          />

          <div>
            <h4>{contact.name}</h4>

            <p className="text-xs">{contact.time}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <Phone size={18} />

          <Video size={18} />
        </div>
      </div>
    );
  };

  return (
    <div
      className="
      fixed
      inset-0
      bg-black/40
      flex
      items-center
      justify-center
      z-50
    "
    >
      <div
        className="
        relative
        w-[450px]
        rounded-2xl
        bg-white
        dark:bg-slate-900
        p-5
      "
      >
        {/* Close Button */}
        <button
          onClick={() => dispatch(closeNewCallModal())}
          className="
          absolute
          top-4
          right-4

          p-2
          rounded-lg

          text-slate-500
          dark:text-slate-400

          hover:bg-slate-100
          dark:hover:bg-slate-800

          transition-colors
        "
        >
          <X size={18} />
        </button>

        {/* Title */}
        <h2
          className="
          text-lg
          font-semibold
          text-slate-900
          dark:text-slate-100
          mb-5
        "
        >
          Start New Conversation
        </h2>

        {/* Search */}
        <input
          placeholder="Search"
          className="
          w-full
          h-11
          rounded-xl
          px-4

          bg-slate-100
          dark:bg-slate-800

          text-slate-900
          dark:text-slate-100

          placeholder:text-slate-400
          dark:placeholder:text-slate-500
        "
        />

        {/* Contacts */}
        <div className="mt-5 space-y-3 max-h-[400px] overflow-y-auto">
          {contacts.map((contact) => (
            <ContactRow key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
    </div>
  );
};
