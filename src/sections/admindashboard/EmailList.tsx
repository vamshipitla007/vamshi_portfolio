/* eslint-disable no-useless-assignment */
import { useMemo, useState } from "react";

import {
  Archive,
  Download,
  Info,
  Search,
  Star,
  Trash2,
} from "lucide-react";

export type EmailType = {
  id: number;
  sender: string;
  subject: string;
  preview: string;
  body: string;
  time: string;
  category: "Primary" | "Social" | "Work" | "Friends";
  read: boolean;
  starred: boolean;
  sent?: boolean;
  draft?: boolean;
  spam?: boolean;
  important?: boolean;
  deleted?: boolean;
};

type Props = {
  emails: EmailType[];
  selectedIds: number[];
  setSelectedIds: React.Dispatch<React.SetStateAction<number[]>>;
  setEmails: React.Dispatch<React.SetStateAction<EmailType[]>>;
  activeMenu: string;
  setSelectedEmail: (email: EmailType) => void;
};

const EmailList = ({
  emails,
  selectedIds,
  setSelectedIds,
  setEmails,
  activeMenu,
  setSelectedEmail,
}: Props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmails = useMemo(() => {
    let result = [];

    switch (activeMenu) {
      case "starred":
        result = emails.filter((email) => email.starred);
        break;

      case "sent":
        result = emails.filter((email) => email.sent);
        break;

      case "draft":
        result = emails.filter((email) => email.draft);
        break;

      case "spam":
        result = emails.filter((email) => email.spam);
        break;

      case "important":
        result = emails.filter((email) => email.important);
        break;

      case "bin":
        result = emails.filter((email) => email.deleted);
        break;

      default:
        result = emails.filter((email) => !email.deleted);
    }

    return result.filter(
      (email) =>
        email.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
        email.subject.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [activeMenu, emails, searchTerm]);

  const allSelected =
    filteredEmails.length > 0 &&
    filteredEmails.every((email) => selectedIds.includes(email.id));

  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredEmails.map((item) => item.id));
    }
  };

  const toggleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const deleteEmails = (ids: number[]) => {
    setEmails((prev) =>
      prev.map((email) =>
        ids.includes(email.id) ? { ...email, deleted: true } : email,
      ),
    );

    setSelectedIds([]);
  };

  const archiveEmails = (ids: number[]) => {
    setEmails((prev) => prev.filter((email) => !ids.includes(email.id)));

    setSelectedIds([]);
  };

  const toggleStar = (id: number) => {
    setEmails((prev) =>
      prev.map((email) =>
        email.id === id
          ? {
              ...email,
              starred: !email.starred,
            }
          : email,
      ),
    );
  };

  // const toggleRead = (id: number) => {
  //   setEmails((prev) =>
  //     prev.map((email) =>
  //       email.id === id
  //         ? {
  //             ...email,
  //             read: !email.read,
  //           }
  //         : email,
  //     ),
  //   );
  // };

  return (
    <div className="overflow-hidden rounded-[22px] border border-[#E7E7E9] bg-white">
      <div className="border-b border-[#ECECEC] px-5 py-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* SEARCH */}

          <div className="relative w-full max-w-[360px]">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8E8E93]"
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search mail"
              className="h-[46px] w-full rounded-full border text-[#8E8E93] border-[#E4E4E7] bg-[#F8F8FA] pl-11 pr-4 text-[14px] outline-none transition focus:border-[#5B86F7]"
            />
          </div>

          {/* ACTION ICONS */}

          <div className="flex overflow-hidden rounded-xl border border-[#E4E4E7]">
            <button className="flex h-[46px] w-[50px] items-center justify-center border-r border-[#E4E4E7] transition hover:bg-[#F5F5F5]">
              <Download size={18} color="#8E8E93" />
            </button>

            <button className="flex h-[46px] w-[50px] items-center justify-center border-r border-[#E4E4E7] transition hover:bg-[#F5F5F5]">
              <Info size={18} color="#8E8E93" />
            </button>

            <button
              onClick={() => deleteEmails(selectedIds)}
              className="flex h-[46px] w-[50px] items-center justify-center transition hover:bg-[#F5F5F5]"
            >
              <Trash2 size={18} color="#8E8E93" />
            </button>
          </div>
        </div>
      </div>
      {/* TOP TOOLBAR */}

      <div className="flex items-center justify-between border-b border-[#ECECEC] px-4 py-3">
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={handleSelectAll}
            className="h-4 w-4"
          />

          {selectedIds.length > 0 && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => archiveEmails(selectedIds)}
                className="rounded-lg p-2 transition hover:bg-[#F5F5F5]"
              >
                <Archive size={17} />
              </button>

              <button
                onClick={() => deleteEmails(selectedIds)}
                className="rounded-lg p-2 transition hover:bg-[#F5F5F5]"
              >
                <Trash2 size={17} />
              </button>
            </div>
          )}
        </div>

        <div className="text-[14px] font-medium text-[#71717A]">
          {filteredEmails.length} Emails
        </div>
      </div>

      {/* EMAILS */}

      {filteredEmails.map((email) => (
        <div
          key={email.id}
          onClick={() => setSelectedEmail(email)}
          className="group flex cursor-pointer items-center gap-4 border-b border-[#F1F1F1] px-4 py-4 transition hover:bg-[#FAFAFA]"
        >
          {/* CHECKBOX */}

          <input
            type="checkbox"
            checked={selectedIds.includes(email.id)}
            onChange={(e) => {
              e.stopPropagation();
              toggleSelect(email.id);
            }}
            className="h-4 w-4"
          />

          {/* STAR */}

          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleStar(email.id);
            }}
          >
            <Star
              size={18}
              className={`transition ${
                email.starred
                  ? "fill-[#F5C451] text-[#F5C451]"
                  : "text-[#C7C7CC]"
              }`}
            />
          </button>

          {/* SENDER */}

          <div className="w-[170px] shrink-0">
            <h3
              className={`truncate text-[15px] ${
                email.read
                  ? "font-medium text-[#444]"
                  : "font-semibold text-[#1D1D1F]"
              }`}
            >
              {email.sender}
            </h3>
          </div>

          {/* SUBJECT */}

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-3">
              <span className="rounded-md bg-[#EEF8F5] px-3 py-[4px] text-[11px] font-medium text-[#12B886]">
                {email.category}
              </span>

              <p className="truncate text-[14px] text-[#333]">
                {email.subject}
              </p>
            </div>
          </div>

          {/* TIME */}

          <span className="w-[80px] text-right text-[13px] font-medium text-[#71717A]">
            {email.time}
          </span>

          {/* HOVER ACTIONS */}
          {/* 
          <div className="hidden items-center gap-1 group-hover:flex">
            <button
              onClick={() => toggleRead(email.id)}
              className="rounded-md p-1.5 transition hover:bg-[#EEE]"
            >
              <MailOpen size={15} />
            </button>

            <button
              onClick={() => deleteEmails([email.id])}
              className="rounded-md p-1.5 transition hover:bg-[#EEE]"
            >
              <Trash2 size={15} />
            </button>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default EmailList;
