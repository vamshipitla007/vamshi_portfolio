import { useState } from "react";

import { Camera, Mail, Plus } from "lucide-react";

type ContactType = {
  id: number;

  firstName: string;

  lastName: string;

  email: string;

  phone: string;

  dob: string;

  gender: string;

  image: string;
};

const initialContacts: ContactType[] = [
  {
    id: 1,
    firstName: "Jason",
    lastName: "Price",
    email: "kuhlman.jermy@yahoo.com",
    phone: "+1 987654321",
    dob: "1998-02-12",
    gender: "Male",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
  },

  {
    id: 2,
    firstName: "Duane",
    lastName: "Dean",
    email: "rusty.botsford@wilfrid.io",
    phone: "+1 987654322",
    dob: "1997-04-18",
    gender: "Male",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800",
  },

  {
    id: 3,
    firstName: "Jonathan",
    lastName: "Barker",
    email: "cora_haley@quinn.biz",
    phone: "+1 987654323",
    dob: "1995-08-22",
    gender: "Male",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=800",
  },

  {
    id: 4,
    firstName: "Rosie",
    lastName: "Glover",
    email: "lockman.marqus@hotmail.com",
    phone: "+1 987654324",
    dob: "1996-11-10",
    gender: "Female",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
  },

  {
    id: 5,
    firstName: "Patrick",
    lastName: "Greer",
    email: "pearlie.eichmann@trevor.net",
    phone: "+1 987654325",
    dob: "1999-01-05",
    gender: "Male",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
  },

  {
    id: 6,
    firstName: "Darrell",
    lastName: "Ortega",
    email: "chaya.shields@ferry.info",
    phone: "+1 987654326",
    dob: "1994-06-17",
    gender: "Male",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
  },
];

export default function ContactScreen() {
  const [contacts, setContacts] = useState(initialContacts);

  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    firstName: "",

    lastName: "",

    email: "",

    phone: "",

    dob: "",

    gender: "Male",

    image: "https://i.pravatar.cc/300?img=44",
  });

  // ADD CONTACT

  const resetForm = () => {
    setForm({
      firstName: "",

      lastName: "",

      email: "",

      phone: "",

      dob: "",

      gender: "Male",

      image: "https://i.pravatar.cc/300?img=44",
    });
  };

  const handleAddContact = () => {
    if (!form.firstName || !form.lastName || !form.email) {
      return;
    }

    const newContact = {
      id: Date.now(),

      ...form,
    };

    setContacts((prev) => [newContact, ...prev]);

    resetForm();

    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      {/* HEADER */}

      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-[24px] font-bold text-[#202224] md:text-[32px]">
          Contact
        </h1>

        {/* ADD BUTTON */}

        <button
          onClick={() => setShowModal(true)}
          className="flex h-[42px] items-center justify-center gap-2 rounded-lg bg-[#4F7CF7] px-5 text-[13px] font-semibold text-white transition hover:bg-[#3E6EF0]"
        >
          <Plus size={16} />

          <span>Add New Contact</span>
        </button>
      </div>

      {/* CONTACT GRID */}

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="overflow-hidden rounded-[22px] border border-[#E5E7EB] bg-white transition hover:-translate-y-1 hover:shadow-lg"
          >
            {/* IMAGE */}

            <div className="h-[230px] overflow-hidden">
              <img
                src={contact.image}
                alt={`${contact.firstName} ${contact.lastName}`}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* CONTENT */}

            <div className="flex flex-col items-center px-5 py-5 text-center">
              <h2 className="text-[18px] font-semibold text-[#202224]">
                {contact.firstName} {contact.lastName}
              </h2>

              <p className="mt-1 text-[13px] text-[#8E8E93]">{contact.email}</p>

              {/* MESSAGE BUTTON */}

              <button className="mt-5 flex h-[38px] items-center justify-center gap-2 rounded-lg border border-[#E5E7EB] px-5 text-[13px] font-medium text-[#71717A] transition hover:bg-[#F7F7F7]">
                <Mail size={14} />

                <span>Message</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ADD CONTACT MODAL */}

      {/* ADD CONTACT MODAL */}

      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[780px] rounded-[18px] bg-white px-8 py-7 shadow-[0px_20px_60px_rgba(0,0,0,0.08)]"
          >
            {/* TOP */}

            <div className="mb-8 flex flex-col items-center">
              {/* IMAGE */}

              <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#F3F4F6]">
                <Camera size={20} className="text-[#5B5B5B]" />
              </div>

              {/* TEXT */}

              <button className="mt-3 text-[11px] font-medium text-[#4F7CF7]">
                Upload Photo
              </button>
            </div>

            {/* FORM */}

            <div className="grid grid-cols-1 gap-x-7 gap-y-5 md:grid-cols-2">
              {/* FIRST NAME */}

              <div>
                <label className="mb-2 block text-[11px] font-medium text-[#202224]">
                  First Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your first name"
                  value={form.firstName}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }))
                  }
                  className="h-[42px] w-full rounded-md border border-[#E5E7EB] bg-[#F9FAFB] px-4 text-[12px] outline-none placeholder:text-[#A1A1AA] focus:border-[#4F7CF7]"
                />
              </div>

              {/* LAST NAME */}

              <div>
                <label className="mb-2 block text-[11px] font-medium text-[#202224]">
                  Last Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your last name"
                  value={form.lastName}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }))
                  }
                  className="h-[42px] w-full rounded-md border border-[#E5E7EB] bg-[#F9FAFB] px-4 text-[12px] outline-none placeholder:text-[#A1A1AA] focus:border-[#4F7CF7]"
                />
              </div>

              {/* EMAIL */}

              <div>
                <label className="mb-2 block text-[11px] font-medium text-[#202224]">
                  Your email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className="h-[42px] w-full rounded-md border border-[#E5E7EB] bg-[#F9FAFB] px-4 text-[12px] outline-none placeholder:text-[#A1A1AA] focus:border-[#4F7CF7]"
                />
              </div>

              {/* PHONE */}

              <div>
                <label className="mb-2 block text-[11px] font-medium text-[#202224]">
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                  className="h-[42px] w-full rounded-md border border-[#E5E7EB] bg-[#F9FAFB] px-4 text-[12px] outline-none placeholder:text-[#A1A1AA] focus:border-[#4F7CF7]"
                />
              </div>

              {/* DATE */}

              <div>
                <label className="mb-2 block text-[11px] font-medium text-[#202224]">
                  Date of Birth
                </label>

                <input
                  type="date"
                  value={form.dob}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      dob: e.target.value,
                    }))
                  }
                  className="h-[42px] w-full rounded-md border border-[#E5E7EB] bg-[#F9FAFB] px-4 text-[12px] outline-none focus:border-[#4F7CF7]"
                />
              </div>

              {/* GENDER */}

              <div>
                <label className="mb-2 block text-[11px] font-medium text-[#202224]">
                  Gender
                </label>

                <select
                  value={form.gender}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      gender: e.target.value,
                    }))
                  }
                  className="h-[42px] w-full rounded-md border border-[#E5E7EB] bg-[#F9FAFB] px-4 text-[12px] outline-none focus:border-[#4F7CF7]"
                >
                  <option value="">Male</option>

                  <option value="Male">Male</option>

                  <option value="Female">Female</option>
                </select>
              </div>
            </div>

            {/* BUTTON */}

            <div className="mt-8 flex justify-center">
              <button
                onClick={handleAddContact}
                className="flex h-[42px] min-w-[135px] items-center justify-center rounded-lg bg-[#4F7CF7] px-6 text-[13px] font-medium text-white transition hover:bg-[#3E6EF0]"
              >
                Add Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
