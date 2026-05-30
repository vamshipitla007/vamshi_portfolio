import { selectGroup, type Group } from "@/utils/groupSlice";
import type { RootState } from "@/utils/store";
import { Search, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import CreateGroupModal from "./CreateGroupModal";
import { useState } from "react";

const GroupChatList = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const groups = useSelector((state: RootState) => state.group.groups);

  const selectedGroup = useSelector(
    (state: RootState) => state.group.selectedGroup,
  );

  const pinnedGroups = groups.filter((group) => group.pinned);

  const otherGroups = groups.filter((group) => !group.pinned);

  const GroupCard = ({ group }: { group: Group }) => {
    const isSelected = selectedGroup?.id === group.id;

    return (
      <div
        onClick={() => dispatch(selectGroup(group))}
        className={`
          p-3
          rounded-xl
          cursor-pointer
          transition-all
          duration-200

          ${
            isSelected
              ? `
                bg-blue-500
                text-white
                shadow-md
              `
              : `
                bg-white
                dark:bg-slate-800

                hover:bg-slate-50
                dark:hover:bg-slate-700

                border
                border-slate-200
                dark:border-slate-700
              `
          }
        `}
      >
        <div className="flex items-center gap-3">
          {/* Avatar */}

          <div className="relative">
            <img
              src={group.avatar}
              alt={group.name}
              className="
                w-11
                h-11
                rounded-full
                object-cover
              "
            />

            {group.online && (
              <span
                className="
                  absolute
                  bottom-0
                  right-0

                  w-3
                  h-3

                  rounded-full
                  bg-green-500

                  border-2
                  border-white
                  dark:border-slate-800
                "
              />
            )}
          </div>

          {/* Content */}

          <div className="flex-1 min-w-0">
            <div className="flex justify-between">
              <h4
                className="
                  text-sm
                  font-semibold
                  truncate
                "
              >
                {group.name}
              </h4>

              <span
                className={`
                  text-xs
                  ${
                    isSelected
                      ? "text-blue-100"
                      : "text-slate-400 dark:text-slate-500"
                  }
                `}
              >
                {group.time}
              </span>
            </div>

            <div className="flex justify-between items-center mt-1">
              <p
                className={`
                  text-xs
                  truncate

                  ${
                    isSelected
                      ? "text-blue-50"
                      : "text-slate-500 dark:text-slate-400"
                  }
                `}
              >
                {group.lastMessage}
              </p>

              {group.unread > 0 && (
                <span
                  className={`
                    min-w-[20px]
                    h-5
                    px-1

                    rounded-full

                    text-[10px]
                    font-medium

                    flex
                    items-center
                    justify-center

                    ${
                      isSelected
                        ? "bg-white text-blue-500"
                        : "bg-blue-500 text-white"
                    }
                  `}
                >
                  {group.unread}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <aside
      className="
        w-[340px]
        shrink-0

        border-r
        border-slate-200
        dark:border-slate-800

        bg-slate-50
        dark:bg-slate-900

        p-5

        overflow-y-auto
      "
    >
      {/* Header */}

      <h1
        className="
          text-3xl
          font-bold
          text-slate-900
          dark:text-slate-100
        "
      >
        Groups
      </h1>

      {/* Search */}

      <div
        className="
          mt-6
          flex
          items-center
          gap-2

          px-4
          h-11

          rounded-xl

          bg-white
          dark:bg-slate-800

          border
          border-slate-200
          dark:border-slate-700
        "
      >
        <Search
          size={16}
          className="
            text-slate-400
            dark:text-slate-500
          "
        />

        <input
          placeholder="Search"
          className="
            flex-1
            bg-transparent
            outline-none

            text-sm

            text-slate-900
            dark:text-slate-100

            placeholder:text-slate-400
            dark:placeholder:text-slate-500
          "
        />
      </div>

      {/* Create Group */}

      <div
        className="
          mt-6
          flex
          items-center
          justify-between
        "
      >
        <button
          className="
            text-sm
            font-medium
            text-blue-500
          "
          onClick={() => setOpen(true)}
        >
          Create New Group
        </button>

        <button
          className="
            w-8
            h-8

            rounded-lg

            flex
            items-center
            justify-center

            hover:bg-slate-100
            dark:hover:bg-slate-800
          "
          onClick={() => setOpen(true)}
        >
          <Plus size={18} className="text-blue-500" />
        </button>
      </div>

      {/* Pinned */}

      <div className="mt-6">
        <h3
          className="
            text-sm
            font-semibold
            mb-3

            text-slate-700
            dark:text-slate-300
          "
        >
          Pinned
        </h3>

        <div className="space-y-3">
          {pinnedGroups.map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </div>
      </div>

      {/* All Chats */}

      <div className="mt-8">
        <h3
          className="
            text-sm
            font-semibold
            mb-3

            text-slate-700
            dark:text-slate-300
          "
        >
          All Chats
        </h3>

        <div className="space-y-3">
          {otherGroups.map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </div>
      </div>

      <CreateGroupModal open={open} onClose={() => setOpen(false)} />
    </aside>
  );
};

export default GroupChatList;
