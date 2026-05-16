import { Bell, Menu, Search, Settings } from "lucide-react";

const BankDashNavbar = ({
  openSidebar,
  setOpenSidebar,
}: {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <header className="h-[90px] bg-white border-b border-[#E6EFF5] px-5 lg:px-10 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <button
            onClick={() => setOpenSidebar(!openSidebar)}
            className="lg:hidden"
          >
            <Menu className="w-7 h-7 text-[#343C6A]" />
          </button>

          <h1 className="text-[26px] md:text-[30px] font-semibold text-[#343C6A]">
            Overview
          </h1>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Settings */}
          <button className="hidden md:flex w-[50px] h-[50px] rounded-full bg-[#F5F7FA] items-center justify-center">
            <Settings className="w-5 h-5 text-[#718EBF]" />
          </button>

          {/* Notification */}
          <button className="relative w-[45px] h-[45px] md:w-[50px] md:h-[50px] rounded-full bg-[#F5F7FA] flex items-center justify-center">
            <Bell className="w-5 h-5 text-[#FE5C73]" />

            <span className="absolute top-[11px] right-[11px] w-[8px] h-[8px] rounded-full bg-[#FE5C73] border border-white" />
          </button>

          {/* Profile */}
          <img
            src="https://i.pravatar.cc/150?img=47"
            alt="profile"
            className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] rounded-full object-cover"
          />
        </div>
      </header>

      {/* Mobile Search */}
      <div className="bg-white px-5 py-4 border-b border-[#E6EFF5] md:hidden">
        <div className="flex items-center gap-3 h-[48px] px-5 rounded-full bg-[#F5F7FA]">
          <Search className="w-5 h-5 text-[#718EBF]" />

          <input
            type="text"
            placeholder="Search for something"
            className="bg-transparent outline-none border-none w-full text-[15px] placeholder:text-[#8BA3CB]"
          />
        </div>
      </div>
    </>
  );
};

export default BankDashNavbar;
