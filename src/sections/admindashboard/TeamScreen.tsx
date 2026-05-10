import { useState } from "react";

import {
  Mail,
  Plus,
  User,
  Briefcase,
} from "lucide-react";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  email: string;
  image: string;
};

const initialMembers: TeamMember[] = [
  {
    id: 1,
    name: "Jason Price",
    role: "Admin",
    email: "janick_parisian@yahoo.com",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
  },

  {
    id: 2,
    name: "Jukkoe Sisao",
    role: "CEO",
    email: "sibyl_kozey@gmail.com",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800",
  },

  {
    id: 3,
    name: "Harriet King",
    role: "CTO",
    email: "nadia_block@hotmail.com",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
  },

  {
    id: 4,
    name: "Lenora Benson",
    role: "Lead",
    email: "feil.wallace@kunde.us",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=800",
  },

  {
    id: 5,
    name: "Olivia Reese",
    role: "Strategist",
    email: "kemmer.hattie@cremin.us",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
  },

  {
    id: 6,
    name: "Bertha Valdez",
    role: "CEO",
    email: "loraine.koelpin@tromp.io",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
  },

  {
    id: 7,
    name: "Harriett Payne",
    role: "Digital Marketer",
    email: "nannie_west@estrella.tv",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
  },

  {
    id: 8,
    name: "George Bryant",
    role: "Social Media",
    email: "delmer.kling@gmail.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
  },

  {
    id: 9,
    name: "Lily French",
    role: "Strategist",
    email: "lucienne.herman@hotmail.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
  },

  {
    id: 10,
    name: "Howard Adkins",
    role: "CEO",
    email: "wiegand.leonor@herman.us",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
  },

  {
    id: 11,
    name: "Earl Bowman",
    role: "Digital Marketer",
    email:
      "waino_altenwerth@nicolette.tv",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
  },

  {
    id: 12,
    name: "Patrick Padilla",
    role: "Social Media",
    email:
      "octavia.nienow@gleichner.net",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
  },
];

const randomImages = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",

  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800",

  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",

  "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=800",

  "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=800",

  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800",

  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
];

export default function TeamScreen() {
  const [members, setMembers] =
    useState(initialMembers);

  const [showModal, setShowModal] =
    useState(false);

  const [form, setForm] =
    useState({
      name: "",
      role: "",
      email: "",
    });

  // ADD MEMBER

  const handleAddMember = () => {
    if (
      !form.name.trim() ||
      !form.role.trim() ||
      !form.email.trim()
    ) {
      return;
    }

    const randomImage =
      randomImages[
        Math.floor(
          Math.random() *
            randomImages.length,
        )
      ];

    const newMember: TeamMember = {
      id: Date.now(),
      name: form.name,
      role: form.role,
      email: form.email,
      image: randomImage,
    };

    setMembers((prev) => [
      newMember,
      ...prev,
    ]);

    setForm({
      name: "",
      role: "",
      email: "",
    });

    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      {/* HEADER */}

      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-[26px] font-bold text-[#202224] md:text-[34px]">
          Team
        </h1>

        {/* BUTTON */}

        <button
          onClick={() =>
            setShowModal(true)
          }
          className="flex h-[42px] items-center justify-center gap-2 rounded-lg bg-[#4F7CF7] px-5 text-[13px] font-semibold text-white transition hover:bg-[#3E6EF0]"
        >
          <Plus size={16} />

          <span>
            Add New Member
          </span>
        </button>
      </div>

      {/* TEAM GRID */}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {members.map((member) => (
          <div
            key={member.id}
            className="relative overflow-hidden rounded-[24px] border border-[#ECECEC] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* PATTERN */}

            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(#000 1px, transparent 1px)",
                backgroundSize:
                  "22px 22px",
              }}
            />

            {/* CONTENT */}

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* IMAGE */}

              <img
                src={member.image}
                alt={member.name}
                className="h-[92px] w-[92px] rounded-full object-cover"
              />

              {/* INFO */}

              <h2 className="mt-5 text-[22px] font-semibold text-[#202224]">
                {member.name}
              </h2>

              <p className="mt-1 text-[15px] text-[#8E8E93]">
                {member.role}
              </p>

              <p className="mt-3 text-[13px] text-[#71717A]">
                {member.email}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ADD MEMBER MODAL */}

      {showModal && (
        <div
          onClick={() =>
            setShowModal(false)
          }
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 p-4"
        >
          <div
            onClick={(e) =>
              e.stopPropagation()
            }
            className="w-full max-w-[420px] rounded-[24px] bg-white p-6 shadow-xl"
          >
            {/* TITLE */}

            <h2 className="mb-6 text-[22px] font-bold text-[#202224]">
              Add New Member
            </h2>

            {/* NAME */}

            <div className="mb-4">
              <label className="mb-2 block text-[13px] font-medium text-[#202224]">
                Full Name
              </label>

              <div className="relative">
                <User
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8E8E93]"
                />

                <input
                  type="text"
                  placeholder="Enter member name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      name:
                        e.target.value,
                    }))
                  }
                  className="h-[46px] w-full text-[#000000] rounded-xl border border-[#E5E7EB] pl-11 pr-4 text-[13px] outline-none transition focus:border-[#4F7CF7]"
                />
              </div>
            </div>

            {/* ROLE */}

            <div className="mb-4">
              <label className="mb-2 block text-[13px] font-medium text-[#202224]">
                Role
              </label>

              <div className="relative">
                <Briefcase
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8E8E93]"
                />

                <input
                  type="text"
                  placeholder="Enter role"
                  value={form.role}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      role:
                        e.target.value,
                    }))
                  }
                  className="h-[46px] w-full text-[#000000] rounded-xl border border-[#E5E7EB] pl-11 pr-4 text-[13px] outline-none transition focus:border-[#4F7CF7]"
                />
              </div>
            </div>

            {/* EMAIL */}

            <div>
              <label className="mb-2 block text-[13px] font-medium text-[#202224]">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8E8E93]"
                />

                <input
                  type="email"
                  placeholder="Enter email address"
                  value={form.email}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      email:
                        e.target.value,
                    }))
                  }
                  onKeyDown={(e) => {
                    if (
                      e.key ===
                      "Enter"
                    ) {
                      handleAddMember();
                    }
                  }}
                  className="h-[46px] w-full text-[#000000] rounded-xl border border-[#E5E7EB] pl-11 pr-4 text-[13px] outline-none transition focus:border-[#4F7CF7]"
                />
              </div>
            </div>

            {/* BUTTONS */}

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                onClick={() =>
                  setShowModal(
                    false,
                  )
                }
                className="h-[40px] rounded-lg border border-[#E5E7EB] px-5 text-[13px] font-medium text-[#202224] transition hover:bg-[#F7F7F7]"
              >
                Cancel
              </button>

              <button
                onClick={
                  handleAddMember
                }
                className="h-[40px] rounded-lg bg-[#4F7CF7] px-5 text-[13px] font-medium text-white transition hover:bg-[#3E6EF0]"
              >
                Add Member
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}