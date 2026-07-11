/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useMemo, useRef, useState } from "react";

import {
  Search,
  SlidersHorizontal,
  Plus,
  MoreVertical,
  X,
  Camera,
} from "lucide-react";

/* ====================================================== */
/* TYPES */
/* ====================================================== */

interface Contact {
  id: number;

  firstName: string;

  lastName: string;

  email: string;

  phone: string;

  location: string;

  designation: string;

  birthday: string;

  avatar: string;

  notes: string;

  favorite: boolean;
}

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  designation: "",
  address: "",
  day: "17",
  month: "March",
  year: "1995",
  notes: "",
  avatar: "",
};

/* ====================================================== */
/* DUMMY DATA */
/* ====================================================== */

const dummyContacts: Contact[] = [
  {
    id: 1,
    firstName: "Regina",
    lastName: "Cooper",
    email: "cooper@example.com",
    phone: "+1 (070) 123-4567",
    location: "Sochi, Russia",
    designation: "Manager",
    birthday: "17 March, 1995",
    avatar: "https://i.pravatar.cc/150?img=12",
    notes: "Project manager with leadership experience.",
    favorite: true,
  },

  {
    id: 2,
    firstName: "Judith",
    lastName: "Black",
    email: "black@example.com",
    phone: "+1 (070) 123-8459",
    location: "New York, USA",
    designation: "Creative Director",
    birthday: "17 March, 1995",
    avatar: "https://i.pravatar.cc/150?img=18",
    notes: "Creative design lead.",
    favorite: false,
  },

  {
    id: 3,
    firstName: "Ronald",
    lastName: "Robertson",
    email: "robe@example.com",
    phone: "+1 (070) 123-9221",
    location: "Paris, France",
    designation: "Manager",
    birthday: "17 March, 1995",
    avatar: "https://i.pravatar.cc/150?img=15",
    notes: "Experienced team leader.",
    favorite: true,
  },

  {
    id: 4,
    firstName: "Dustin",
    lastName: "Williamson",
    email: "williams@example.com",
    phone: "+1 (070) 123-0507",
    location: "Sydney, Australia",
    designation: "Designer",
    birthday: "17 March, 1995",
    avatar: "https://i.pravatar.cc/150?img=20",
    notes: "UI Designer.",
    favorite: false,
  },

  {
    id: 5,
    firstName: "Calvin",
    lastName: "Flores",
    email: "flores@example.com",
    phone: "+1 (070) 123-3791",
    location: "Berlin, Germany",
    designation: "Manager",
    birthday: "17 March, 1995",
    avatar: "https://i.pravatar.cc/150?img=22",
    notes: "Operations manager.",
    favorite: false,
  },
];

const Contacts = () => {
  const [contacts, setContacts] = useState(dummyContacts);

  const [selectedContact, setSelectedContact] = useState<Contact>(
    dummyContacts[0],
  );

  const [search, setSearch] = useState("");

  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const [selectedAction, setSelectedAction] = useState("Actions");

  const [showAddModal, setShowAddModal] = useState(false);

  const [editingContact, setEditingContact] = useState<Contact | null>(null);

  const [form, setForm] = useState(initialForm);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const [loading, setLoading] = useState(false);

  const [actionMenu, setActionMenu] = useState<number | null>(null);

  const [deleteContact, setDeleteContact] = useState<Contact | null>(null);

  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 10;

  const fileRef = useRef<HTMLInputElement>(null);

  const filteredContacts = useMemo(() => {
    return contacts.filter(
      (contact) =>
        `${contact.firstName} ${contact.lastName}`
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        contact.email.toLowerCase().includes(search.toLowerCase()) ||
        contact.location.toLowerCase().includes(search.toLowerCase()),
    );
  }, [contacts, search]);

  useEffect(() => {
    const close = () => setActionMenu(null);

    window.addEventListener("click", close);

    return () => window.removeEventListener("click", close);
  }, []);

  useEffect(() => {
    if (!editingContact) {
      setForm(initialForm);

      return;
    }

    const parts = editingContact.birthday.split(" ");

    setForm({
      firstName: editingContact.firstName,

      lastName: editingContact.lastName,

      email: editingContact.email,

      phone: editingContact.phone,

      designation: editingContact.designation,

      address: editingContact.location,

      notes: editingContact.notes,

      avatar: editingContact.avatar,

      day: parts[0],

      month: parts[1].replace(",", ""),

      year: parts[2],
    });
  }, [editingContact]);

  const change = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setForm((prev) => ({
        ...prev,
        avatar: reader.result as string,
      }));
    };

    reader.readAsDataURL(file);
  };

  const saveContact = async () => {
    const e: Record<string, string> = {};

    if (!form.firstName.trim()) e.firstName = "Required";

    if (!form.email.trim()) e.email = "Required";

    setErrors(e);

    if (Object.keys(e).length) return;

    setLoading(true);

    await new Promise((r) => setTimeout(r, 800));

    if (editingContact) {
      setContacts((prev) =>
        prev.map((contact) =>
          contact.id === editingContact.id
            ? {
                ...contact,
                firstName: form.firstName,
                lastName: form.lastName,
                email: form.email,
                phone: form.phone,
                location: form.address,
                designation: form.designation,
                notes: form.notes,
                avatar: form.avatar || contact.avatar,
                birthday: `${form.day} ${form.month}, ${form.year}`,
              }
            : contact,
        ),
      );
    } else {
      const newContact: Contact = {
        id: Date.now(),

        firstName: form.firstName,

        lastName: form.lastName,

        email: form.email,

        phone: form.phone,

        location: form.address,

        designation: form.designation,

        birthday: `${form.day} ${form.month}, ${form.year}`,

        notes: form.notes,

        avatar: form.avatar || "https://i.pravatar.cc/150",

        favorite: false,
      };

      setContacts((prev) => [newContact, ...prev]);
    }

    setLoading(false);

    setShowAddModal(false);

    setEditingContact(null);

    setForm(initialForm);
  };

  //   const toggleRow = (id: number) => {
  //     setSelectedRows((prev) =>
  //       prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
  //     );
  //   };

  const toggleAllRows = () => {
    if (selectedRows.length === filteredContacts.length) {
      setSelectedRows([]);

      return;
    }

    setSelectedRows(filteredContacts.map((x) => x.id));
  };

  const removeContact = () => {
    if (!deleteContact) return;

    setContacts((prev) => prev.filter((x) => x.id !== deleteContact.id));

    if (selectedContact.id === deleteContact.id) {
      const next = contacts.find((x) => x.id !== deleteContact.id);

      if (next) {
        setSelectedContact(next);
      }
    }

    setDeleteContact(null);
  };

  const totalPages = Math.ceil(filteredContacts.length / pageSize);

  const paginatedContacts = filteredContacts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-[32px] font-semibold text-[#374151]">Contacts</h1>

        <button
          onClick={() => {
            setEditingContact(null);

            setShowAddModal(true);
          }}
          className="flex h-11 items-center gap-2 rounded-xl bg-[#2BA84A] px-5 text-[13px] font-medium text-white transition hover:bg-[#24913C]"
        >
          <Plus size={17} />
          Add Contact
        </button>
      </div>

      <div className="overflow-hidden rounded-[28px] border border-[#ECECEC] bg-white">
        <div className="grid lg:grid-cols-[1fr_330px]">
          {/* LEFT */}

          <div className="border-r border-[#ECECEC]">
            {/* Search */}

            <div className="flex flex-col gap-4 border-b border-[#ECECEC] p-5 lg:flex-row">
              <div className="relative flex-1">
                <Search
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]"
                />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search contact..."
                  className="h-11 w-full rounded-xl border border-[#ECECEC] pl-11 pr-4 text-[13px] text-[#98A2B3] outline-none focus:border-[#2BA84A]"
                />
              </div>

              <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ECECEC]">
                <SlidersHorizontal color="#98A2B3" size={17} />
              </button>

              <select
                value={selectedAction}
                onChange={(e) => setSelectedAction(e.target.value)}
                className="h-11 rounded-xl border border-[#ECECEC] text-[#98A2B3] px-5 text-[13px]"
              >
                <option className="text-[#98A2B3]">Actions</option>

                <option className="text-[#98A2B3]">Delete</option>

                <option className="text-[#98A2B3]">Favorite</option>
              </select>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="h-[52px] border-b border-[#ECECEC]">
                    <th className="w-14">
                      <input
                        type="checkbox"
                        checked={
                          filteredContacts.length > 0 &&
                          selectedRows.length === filteredContacts.length
                        }
                        onChange={toggleAllRows}
                        className="h-4 w-4 accent-[#2BA84A]"
                      />
                    </th>

                    <th className="text-left text-[12px] font-semibold text-[#98A2B3]">
                      NAME
                    </th>

                    <th className="text-left text-[12px] font-semibold text-[#98A2B3]">
                      EMAIL
                    </th>

                    <th className="text-left text-[12px] font-semibold text-[#98A2B3]">
                      LOCATION
                    </th>

                    <th className="text-left text-[12px] font-semibold text-[#98A2B3]">
                      PHONE
                    </th>

                    <th className="w-14" />
                  </tr>
                </thead>

                <tbody>
                  {paginatedContacts.map((contact) => (
                    <tr
                      key={contact.id}
                      onClick={() => setSelectedContact(contact)}
                      className="cursor-pointer border-b border-[#F3F4F6] transition hover:bg-[#FAFBFC]"
                    >
                      <td className="px-4 py-4">
                        <input
                          type="checkbox"
                          checked={
                            filteredContacts.length > 0 &&
                            selectedRows.length === filteredContacts.length
                          }
                          onChange={toggleAllRows}
                          className="h-4 w-4 accent-[#2BA84A]"
                        />
                      </td>

                      <td>
                        <div className="flex items-center gap-3">
                          <img
                            src={contact.avatar}
                            className="h-10 w-10 rounded-full"
                          />

                          <div>
                            <h4 className="text-[14px] font-medium text-[#374151]">
                              {contact.firstName} {contact.lastName}
                            </h4>

                            <p className="text-[12px] text-[#98A2B3]">
                              {contact.designation}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="text-[13px] text-[#6B7280]">
                        {contact.email}
                      </td>

                      <td className="text-[13px] text-[#6B7280]">
                        {contact.location}
                      </td>

                      <td className="text-[13px] text-[#6B7280]">
                        {contact.phone}
                      </td>

                      <td>
                        <div className="relative">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();

                              setActionMenu(
                                actionMenu === contact.id ? null : contact.id,
                              );
                            }}
                            className="rounded-lg p-2 hover:bg-[#F3F4F6]"
                          >
                            <MoreVertical color="#98A2B3" size={17} />
                          </button>

                          {actionMenu === contact.id && (
                            <div className="absolute right-0 top-10 z-40 w-44 overflow-hidden rounded-2xl border border-[#ECECEC] bg-white shadow-xl">
                              <button
                                onClick={() => {
                                  setEditingContact(contact);

                                  setShowAddModal(true);

                                  setActionMenu(null);
                                }}
                                className="flex w-full items-center px-5 py-3 text-[13px] text-[#374151] hover:bg-[#F8F9FB]"
                              >
                                Edit Contact
                              </button>

                              <button
                                onClick={() => {
                                  setDeleteContact(contact);

                                  setActionMenu(null);
                                }}
                                className="flex w-full items-center px-5 py-3 text-[13px] text-red-500 hover:bg-red-50"
                              >
                                Delete Contact
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* RIGHT PANEL */}

          <div className="bg-white p-7">
            <div className="flex flex-col items-center">
              <img
                src={selectedContact.avatar}
                className="h-28 w-28 rounded-full object-cover"
              />

              <h2 className="mt-5 text-[28px] font-semibold text-[#374151]">
                {selectedContact.firstName} {selectedContact.lastName}
              </h2>

              <p className="text-[14px] text-[#98A2B3]">
                {selectedContact.designation}
              </p>
            </div>

            <hr className="my-8" />

            <h4 className="mb-5 text-[13px] font-semibold text-[#374151]">
              INFO
            </h4>

            <div className="space-y-5 text-[13px]">
              <div>
                <p className="text-[#98A2B3]">EMAIL</p>

                <p className="mt-1 text-[#374151]">{selectedContact.email}</p>
              </div>

              <div>
                <p className="text-[#98A2B3]">PHONE</p>

                <p className="mt-1">{selectedContact.phone}</p>
              </div>

              <div>
                <p className="text-[#98A2B3]">BIRTHDAY</p>

                <p className="mt-1">{selectedContact.birthday}</p>
              </div>

              <div>
                <p className="text-[#98A2B3]">LOCATION</p>

                <p className="mt-1">{selectedContact.location}</p>
              </div>
            </div>

            <hr className="my-8" />

            <h4 className="mb-5 text-[13px] font-semibold">FAVORITES</h4>

            <div className="space-y-4">
              {contacts
                .filter((x) => x.favorite)
                .map((friend) => (
                  <div key={friend.id} className="flex items-center gap-3">
                    <img
                      src={friend.avatar}
                      className="h-11 w-11 rounded-full"
                    />

                    <div>
                      <p className="text-[13px] font-medium">
                        {friend.firstName} {friend.lastName}
                      </p>

                      <p className="text-[12px] text-[#98A2B3]">
                        {friend.designation}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* PART 2 CONTINUES HERE */}
      {showAddModal && (
        <>
          <div
            onClick={() => {
              setShowAddModal(false);
              setEditingContact(null);
            }}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-5">
            <div
              className="
                    w-full
                    max-w-[620px]
                    max-h-[90vh]
                    overflow-y-auto
                    rounded-[26px]
                    bg-white
                    shadow-[0_25px_80px_rgba(0,0,0,.15)]
                    "
            >
              <div className="w-full max-w-[620px] overflow-hidden rounded-[26px] bg-white shadow-[0_25px_80px_rgba(0,0,0,.15)]">
                {/* Header */}

                <div className="flex items-center justify-between px-8 py-7">
                  <h2 className="text-[34px] font-semibold text-[#374151]">
                    {editingContact ? "Edit Contact" : "New Contact"}
                  </h2>

                  <button
                    onClick={() => {
                      setShowAddModal(false);

                      setEditingContact(null);
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F6F7F8]"
                  >
                    <X color="#333" size={18} />
                  </button>
                </div>

                {/* Body */}

                <div className="space-y-6 px-8 pb-8">
                  {/* Avatar */}

                  <div className="flex justify-center">
                    <div
                      onClick={() => fileRef.current?.click()}
                      className="group relative flex h-28 w-28 cursor-pointer items-center justify-center overflow-hidden rounded-[26px] border border-dashed border-[#D6D6D6]"
                    >
                      <input
                        ref={fileRef}
                        hidden
                        type="file"
                        accept="image/*"
                        onChange={uploadImage}
                      />

                      {form.avatar ? (
                        <img
                          src={form.avatar}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <Plus color="#98A2B3" size={34} />
                      )}

                      <div className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow">
                        <Camera color="#333" size={15} />
                      </div>
                    </div>
                  </div>

                  {/* Names */}

                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="mb-2 block text-[13px] text-[#98A2B3]">
                        First Name
                      </label>

                      <input
                        value={form.firstName}
                        onChange={(e) => change("firstName", e.target.value)}
                        className="h-12 w-full rounded-xl border border-[#E5E7EB] px-4 text-[13px] text-[#333] outline-none focus:border-[#2BA84A]"
                      />

                      {errors.firstName && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="mb-2 block text-[13px] text-[#98A2B3]">
                        Last Name
                      </label>

                      <input
                        value={form.lastName}
                        onChange={(e) => change("lastName", e.target.value)}
                        className="h-12 w-full rounded-xl border border-[#E5E7EB] px-4 text-[13px] text-[#333] outline-none focus:border-[#2BA84A]"
                      />
                    </div>
                  </div>
                  {/* Email */}

                  <div>
                    <label className="mb-2 block text-[13px] text-[#98A2B3]">
                      Email
                    </label>

                    <input
                      value={form.email}
                      onChange={(e) => change("email", e.target.value)}
                      className="h-12 w-full rounded-xl border border-[#E5E7EB] px-4 text-[13px] text-[#333] outline-none focus:border-[#2BA84A]"
                    />

                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}

                  <div>
                    <label className="mb-2 block text-[13px] text-[#98A2B3]">
                      Phone
                    </label>

                    <input
                      value={form.phone}
                      onChange={(e) => change("phone", e.target.value)}
                      className="h-12 w-full rounded-xl border border-[#E5E7EB] px-4 text-[13px] text-[#333] outline-none focus:border-[#2BA84A]"
                    />
                  </div>

                  {/* Job */}

                  <div>
                    <label className="mb-2 block text-[13px] text-[#98A2B3]">
                      Job Title
                    </label>

                    <input
                      value={form.designation}
                      onChange={(e) => change("designation", e.target.value)}
                      className="h-12 w-full rounded-xl border border-[#E5E7EB] px-4 text-[13px] text-[#333] outline-none focus:border-[#2BA84A]"
                    />
                  </div>

                  {/* Address */}

                  <div>
                    <label className="mb-2 block text-[13px] text-[#98A2B3]">
                      Address
                    </label>

                    <input
                      value={form.address}
                      onChange={(e) => change("address", e.target.value)}
                      className="h-12 w-full rounded-xl border border-[#E5E7EB] px-4 text-[13px] text-[#333] outline-none focus:border-[#2BA84A]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[13px] text-[#98A2B3]">
                      Date Of Birth
                    </label>

                    <div className="grid grid-cols-3 gap-4">
                      <select
                        value={form.day}
                        onChange={(e) => change("day", e.target.value)}
                        className="h-11 rounded-xl border border-[#E5E7EB] px-3 text-[13px] text-[#333]"
                      >
                        {Array.from({ length: 31 }).map((_, i) => (
                          <option key={i + 1} className="text-[#333]">
                            {i + 1}
                          </option>
                        ))}
                      </select>

                      <select
                        value={form.month}
                        onChange={(e) => change("month", e.target.value)}
                        className="h-11 rounded-xl border border-[#E5E7EB] px-3 text-[13px] text-[#333]"
                      >
                        {[
                          "January",
                          "February",
                          "March",
                          "April",
                          "May",
                          "June",
                          "July",
                          "August",
                          "September",
                          "October",
                          "November",
                          "December",
                        ].map((month) => (
                          <option className="text-[#333]" key={month}>
                            {month}
                          </option>
                        ))}
                      </select>

                      <select
                        value={form.year}
                        onChange={(e) => change("year", e.target.value)}
                        className="h-11 rounded-xl border border-[#E5E7EB] px-3 text-[13px] text-2xl text-[#333]"
                      >
                        {Array.from({ length: 40 }).map((_, i) => (
                          <option className="text-[#333]" key={1990 + i}>
                            {1990 + i}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Notes */}

                  <div>
                    <label className="mb-2 block text-[13px] text-[#98A2B3]">
                      Notes
                    </label>

                    <textarea
                      rows={6}
                      value={form.notes}
                      onChange={(e) => change("notes", e.target.value)}
                      placeholder="Type something"
                      className="w-full rounded-2xl border border-[#E5E7EB] px-4 py-4 text-[13px] text-[#333] leading-6 outline-none focus:border-[#2BA84A]"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      disabled={loading}
                      onClick={saveContact}
                      className="rounded-xl bg-[#2BA84A] px-8 py-3 text-[14px] font-semibold text-white hover:bg-[#24913C]"
                    >
                      {loading
                        ? "Saving..."
                        : editingContact
                          ? "Update Contact"
                          : "Add Contact"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {deleteContact && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/30"
            onClick={() => setDeleteContact(null)}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-5">
            <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
              <h2 className="text-[24px] font-semibold text-[#374151]">
                Delete Contact
              </h2>

              <p className="mt-5 text-[14px] leading-7 text-[#6B7280]">
                Are you sure you want to delete this contact?
              </p>

              <div className="mt-10 flex justify-end gap-4">
                <button
                  onClick={() => setDeleteContact(null)}
                  className="rounded-xl border border-[#E5E7EB] px-6 py-3 text-[14px] font-medium text-[#374151] hover:bg-[#F3F4F6]"
                >
                  Cancel
                </button>

                <button
                  onClick={removeContact}
                  className="rounded-xl bg-red-500 px-6 py-3 font-medium text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="flex flex-col gap-5 border-t border-[#ECECEC] px-6 py-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          <select className="h-10 rounded-xl border border-[#ECECEC] px-4 text-[13px]">
            <option>10</option>

            <option>25</option>

            <option>50</option>
          </select>

          <p className="text-[13px] text-[#98A2B3]">
            Showing{" "}
            {Math.min(
              (currentPage - 1) * pageSize + 1,
              filteredContacts.length,
            )}
            -{Math.min(currentPage * pageSize, filteredContacts.length)}
            of {filteredContacts.length}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ECECEC]"
          >
            ‹
          </button>

          {Array.from({
            length: totalPages,
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`flex h-10 w-10 items-center justify-center rounded-xl text-[13px]
                ${
                currentPage === index + 1
                    ? "bg-[#2BA84A] text-white"
                    : "border border-[#ECECEC]"
                }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ECECEC]"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
