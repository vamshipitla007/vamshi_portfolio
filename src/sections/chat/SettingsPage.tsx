/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Bell,
  Shield,
  Lock,
  HelpCircle,
  FileText,
  Palette,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import EmptyChat from "@/assets/chat/emptychat.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const menus = [
  {
    id: "notifications",
    label: "Notifications",
    icon: Bell,
  },
  {
    id: "privacy",
    label: "Privacy",
    icon: Shield,
  },
  {
    id: "security",
    label: "Security",
    icon: Lock,
  },
  {
    id: "help",
    label: "Help",
    icon: HelpCircle,
  },
  {
    id: "request",
    label: "Request Account Info",
    icon: FileText,
  },
  {
    id: "theme",
    label: "Theme",
    icon: Palette,
  },
];

const SettingRow = ({ title }: { title: string }) => (
  <button
    className="
      w-full

      flex
      items-center
      justify-between

      px-4
      py-3

      rounded-xl

      bg-white
      dark:bg-slate-900
    "
  >
    <span className="text-sm">{title}</span>

    <ChevronRight size={16} />
  </button>
);

const Toggle = ({ value, onChange }: any) => (
  <button
    onClick={() => onChange(!value)}
    className={`
        w-11
        h-6
        rounded-full

        ${value ? "bg-blue-500" : "bg-slate-300"}
      `}
  >
    <div
      className={`
          w-5
          h-5
          bg-white
          rounded-full

          transition-all

          ${value ? "translate-x-5" : ""}
        `}
    />
  </button>
);

const NotificationsScreen = () => {
  const [message, setMessage] = useState(true);

  const [group, setGroup] = useState(false);

  return (
    <div>
      <h2 className="text-lg font-semibold">Notifications</h2>

      <div className="mt-6 space-y-6">
        <div className="flex justify-between">
          <span className="text-sm">Message Notifications</span>

          <Toggle value={message} onChange={setMessage} />
        </div>

        <div className="flex justify-between">
          <span className="text-sm">Group Notifications</span>

          <Toggle value={group} onChange={setGroup} />
        </div>
      </div>
    </div>
  );
};

const PrivacyScreen = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Privacy</h2>

      <div className="mt-6 space-y-4">
        <SettingRow title="Blocked Contacts" />

        <SettingRow title="Last Seen" />

        <SettingRow title="Profile Photo" />

        <SettingRow title="Status" />

        <SettingRow title="Read Receipts" />
      </div>
    </div>
  );
};

const SecurityScreen = () => {
  const [secure, setSecure] = useState(true);

  return (
    <div>
      <h2 className="text-lg font-semibold">Security</h2>

      <div
        className="
          mt-6
          p-5
          rounded-xl
          bg-white
          dark:bg-slate-900
        "
      >
        <h3 className="font-medium">Two-Step Verification</h3>

        <p className="text-sm mt-2">
          Protect your account with an additional layer.
        </p>

        <button
          onClick={() => setSecure(!secure)}
          className="
            mt-4
            px-4
            py-2
            rounded-lg
            bg-blue-500
            text-white
          "
        >
          {secure ? "Enabled" : "Enable"}
        </button>
      </div>
    </div>
  );
};

const HelpScreen = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Help</h2>

      <div className="mt-6 space-y-4">
        <SettingRow title="FAQ" />

        <SettingRow title="Contact Support" />

        <SettingRow title="Terms & Conditions" />
      </div>
    </div>
  );
};

const RequestInfoScreen = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Request Account Info</h2>

      <div
        className="
          mt-6
          max-w-lg
          rounded-xl
          bg-white
          dark:bg-slate-900
          p-5
        "
      >
        <p className="text-sm">
          Create a report of your account information and settings.
        </p>

        <button
          className="
            mt-6
            px-5
            py-2
            rounded-lg
            bg-blue-500
            text-white
          "
        >
          Request Report
        </button>
      </div>
    </div>
  );
};

const colors = [
  "#5B5FC7",
  "#1D9BF0",
  "#22C55E",
  "#EF4444",
  "#F59E0B",
  "#EC4899",
  "#8B5CF6",
  "#14B8A6",
];

const ThemeScreen = () => {
  const [selected, setSelected] = useState(colors[0]);

  return (
    <div>
      <h2 className="text-lg font-semibold">Set Chat Wallpaper</h2>

      <div className="mt-6 flex gap-3 flex-wrap">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelected(color)}
            style={{
              backgroundColor: color,
            }}
            className="
              w-16
              h-16
              rounded-lg
            "
          />
        ))}
      </div>

      <div
        className="
          mt-8
          h-[350px]
          rounded-xl
        "
        style={{
          backgroundColor: selected,
        }}
      />
    </div>
  );
};

const SettingsPage = () => {
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const handleBack = () => {
    if (active) {
      setActive("");
    } else {
      // Go back to previous page or close settings
      navigate(-1);
    }
  }

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
        className=" w-[320px] shrink-0 border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-5 "
      >
        <div className="flex items-center gap-3 mb-6">
          <button
            className="
            flex
            items-center
            justify-center

            w-8
            h-8

            rounded-lg

            text-slate-700
            dark:text-slate-300

            hover:bg-slate-200
            dark:hover:bg-slate-800

            transition-colors
          "
          onClick={handleBack}
          >
            <ChevronLeft size={24} />
          </button>

          <h1
            className="
            text-2xl
            font-bold

            text-slate-900
            dark:text-slate-100
          "
          >
            Settings
          </h1>
        </div>

        {active === "" && (
          <div className="mt-8 space-y-1">
            {menus.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={`
                  w-full

                  flex
                  items-center
                  justify-between

                  px-3
                  py-3

                  rounded-xl

                  transition-all

                  ${
                    active === item.id
                      ? `
                        bg-blue-500
                        text-white
                      `
                      : `
                        hover:bg-slate-100
                        dark:hover:bg-slate-800

                        text-slate-700
                        dark:text-slate-300
                      `
                  }
                `}
                >
                  <div className="flex gap-3 items-center">
                    <Icon size={16} />

                    <span className="text-sm">{item.label}</span>
                  </div>

                  <ChevronRight size={14} />
                </button>
              );
            })}
          </div>
        )}
        {/* Right Panel */}

        <div
          className="
          flex-1
          overflow-y-auto
        "
        >
          {active === "notifications" && <NotificationsScreen />}

          {active === "privacy" && <PrivacyScreen />}

          {active === "security" && <SecurityScreen />}

          {active === "help" && <HelpScreen />}

          {active === "request" && <RequestInfoScreen />}

          {active === "theme" && <ThemeScreen />}
        </div>
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

export default SettingsPage;
