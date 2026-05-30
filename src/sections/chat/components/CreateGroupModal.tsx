import { X, XCircle } from "lucide-react";
import { useState } from "react";

interface Member {
  id: string;
  name: string;
  avatar: string;
}

interface CreateGroupModalProps {
  open: boolean;
  onClose: () => void;
}

const dummyMembers: Member[] = [
  {
    id: "1",
    name: "Chip",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: "2",
    name: "Dog Hat",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: "3",
    name: "Cute Turtle",
    avatar: "https://i.pravatar.cc/150?img=13",
  },
];

const CreateGroupModal = ({
  open,
  onClose,
}: CreateGroupModalProps) => {
  const [groupName, setGroupName] =
    useState("");

  const [members, setMembers] =
    useState<Member[]>([
      dummyMembers[0],
      dummyMembers[1],
    ]);

  const removeMember = (
    memberId: string
  ) => {
    setMembers((prev) =>
      prev.filter(
        (member) =>
          member.id !== memberId
      )
    );
  };

  const handleCreate = () => {
    console.log({
      groupName,
      members,
    });

    onClose();
  };

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50

        flex
        items-center
        justify-center

        bg-black/50
        backdrop-blur-[2px]

        p-4
      "
      onClick={onClose}
    >
      <div
        onClick={(e) =>
          e.stopPropagation()
        }
        className="
          relative

          w-full
          max-w-[420px]

          rounded-3xl

          bg-white
          dark:bg-slate-900

          shadow-2xl

          p-6
        "
      >
        {/* Close */}

        <button
          onClick={onClose}
          className="
            absolute
            right-5
            top-5

            text-slate-400
            hover:text-slate-600

            dark:hover:text-slate-200
          "
        >
          <X size={18} />
        </button>

        {/* Title */}

        <h2
          className="
            text-[28px]
            font-semibold

            text-slate-900
            dark:text-slate-100
          "
        >
          Create New Group
        </h2>

        {/* Group Name */}

        <div className="mt-8">
          <label
            className="
              text-xs
              text-slate-500
              dark:text-slate-400
            "
          >
            Name
          </label>

          <input
            value={groupName}
            onChange={(e) =>
              setGroupName(
                e.target.value
              )
            }
            placeholder="Group Name"
            className="
              mt-2
              w-full
              h-12

              rounded-xl

              border
              border-blue-500

              px-4

              text-sm

              bg-transparent

              focus:outline-none
            "
          />
        </div>

        {/* Members */}

        <div className="mt-6">
          <label
            className="
              text-xs
              text-slate-500
              dark:text-slate-400
            "
          >
            Members
          </label>

          <div
            className="
              mt-2

              min-h-[56px]

              border
              border-slate-300
              dark:border-slate-700

              rounded-xl

              p-3

              flex
              flex-wrap
              gap-2
            "
          >
            {members.map(
              (member) => (
                <div
                  key={member.id}
                  className="
                    flex
                    items-center
                    gap-2

                    rounded-full

                    bg-slate-100
                    dark:bg-slate-800

                    px-2
                    py-1
                  "
                >
                  <img
                    src={member.avatar}
                    alt=""
                    className="
                      w-6
                      h-6
                      rounded-full
                    "
                  />

                  <span
                    className="
                      text-xs
                      font-medium
                    "
                  >
                    {member.name}
                  </span>

                  <button
                    onClick={() =>
                      removeMember(
                        member.id
                      )
                    }
                  >
                    <XCircle
                      size={14}
                      className="
                        text-slate-400
                      "
                    />
                  </button>
                </div>
              )
            )}
          </div>
        </div>

        {/* Create Button */}

        <div
          className="
            mt-8
            flex
            justify-end
          "
        >
          <button
            onClick={handleCreate}
            className="
              h-11
              px-8

              rounded-xl

              bg-blue-600
              hover:bg-blue-700

              text-white
              text-sm
              font-medium

              shadow-lg

              transition-all
            "
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateGroupModal;