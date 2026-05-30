import { useState, useRef } from "react";
import { ChevronLeft, Camera } from "lucide-react";
import EmptyChat from "@/assets/chat/emptychat.png";

const Profile = () => {
  const fileRef =
    useRef<HTMLInputElement>(null);

  const [profile, setProfile] =
    useState({
      name: "Shreyansh shah",
      about:
        "Hey there, I am learning from coding monk",
      image:
        "https://i.pravatar.cc/300?img=12",
    });

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file =
      e.target.files?.[0];

    if (!file) return;

    setProfile((prev) => ({
      ...prev,
      image:
        URL.createObjectURL(file),
    }));
  };

  const handleSave = () => {
    console.log(profile);

    alert("Profile Saved");
  };

  return (
    <div
      className="
        flex
        h-full
        bg-slate-50
        dark:bg-slate-950
      "
    >
      {/* Left Panel */}

      <div
        className="
          w-[380px]
          shrink-0

          border-r
          border-slate-200
          dark:border-slate-800

          bg-slate-50
          dark:bg-slate-900

          p-8

          overflow-y-auto
        "
      >
        {/* Header */}

        <div className="flex items-center gap-4">
          <button
            className="
              text-slate-600
              dark:text-slate-300
            "
          >
            <ChevronLeft size={28} />
          </button>

          <h1
            className="
              text-[22px]
              font-bold

              text-slate-900
              dark:text-slate-100
            "
          >
            Profile
          </h1>
        </div>

        {/* Avatar */}

        <div className="mt-10 flex justify-center">
          <div className="relative">
            <img
              src={profile.image}
              alt="profile"
              className="
                w-32
                h-32
                rounded-full
                object-cover
              "
            />

            <button
              onClick={() =>
                fileRef.current?.click()
              }
              className="
                absolute
                bottom-2
                right-2

                w-9
                h-9

                rounded-full

                bg-blue-500
                text-white

                flex
                items-center
                justify-center

                shadow-lg
              "
            >
              <Camera size={16} />
            </button>

            <input
              ref={fileRef}
              hidden
              type="file"
              accept="image/*"
              onChange={
                handleImageChange
              }
            />
          </div>
        </div>

        {/* Name */}

        <div className="mt-12">
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
            value={profile.name}
            onChange={(e) =>
              setProfile((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
            className="
              mt-2
              w-full
              h-14

              rounded-xl

              border-2
              border-blue-500

              px-4

              text-[15px]

              bg-transparent

              text-slate-900
              dark:text-slate-100

              focus:outline-none
            "
          />
        </div>

        <p
          className="
            mt-4

            text-sm

            text-slate-500
            dark:text-slate-400
          "
        >
          This name is visible to your contacts
        </p>

        {/* About */}

        <div className="mt-8">
          <label
            className="
              text-xs
              text-slate-500
              dark:text-slate-400
            "
          >
            About
          </label>

          <textarea
            value={profile.about}
            onChange={(e) =>
              setProfile((prev) => ({
                ...prev,
                about:
                  e.target.value,
              }))
            }
            rows={4}
            className="
              mt-2
              w-full

              rounded-xl

              border
              border-slate-300
              dark:border-slate-700

              bg-transparent

              px-4
              py-4

              text-sm

              resize-none

              text-slate-900
              dark:text-slate-100

              focus:outline-none
            "
          />
        </div>

        {/* Save */}

        <button
          onClick={handleSave}
          className="
            mt-10
            w-full
            h-12

            rounded-xl

            border
            border-blue-500

            text-blue-500
            font-medium

            hover:bg-blue-50
            dark:hover:bg-blue-950/20

            transition-colors
          "
        >
          Save
        </button>
      </div>

      {/* Right Panel */}

      <div
        className="
          flex-1

          hidden
          md:flex

          items-center
          justify-center

          bg-white
          dark:bg-slate-950
        "
      >
        <div className="text-center">
          <img
            src={EmptyChat}
            alt="empty"
            className="
              w-60
              mx-auto
            "
          />

          <p
            className="
              mt-6
              text-lg
              font-medium

              text-slate-900
              dark:text-slate-100
            "
          >
            Select a conversation or
            start a{" "}
            <span
              className="
                text-blue-500
              "
            >
              new one
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;