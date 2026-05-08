type AdminDashboardNavbarProps = {
    handleMenu: () => void;
};

const AdminDashboardNavbar = ({
    handleMenu,
}: AdminDashboardNavbarProps) => {

    return (
        <header className='w-full h-[70px] bg-white border-b border-[#F1F1F1] px-2 flex items-center justify-between'>
            {/* Left Section */}
            <div className='flex items-center gap-6'>
                {/* Menu Icon */}
                <button
                    className='w-11 h-8 rounded-xl hover:bg-[#F5F6FA] flex items-center justify-center transition-all'
                    onClick={handleMenu}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={2}
                        stroke='currentColor'
                        className='w-6 h-6 text-[#646464]'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5'
                        />
                    </svg>
                </button>

                {/* Search */}
                <div className='hidden md:flex items-center w-[420px] h-[40px] bg-[#F5F6FA] rounded-full px-5 border border-[#ECECEC]'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={2}
                        stroke='currentColor'
                        className='w-5 h-5 text-[#9CA3AF]'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6 6a7.5 7.5 0 0 0 10.65 10.65Z'
                        />
                    </svg>

                    <input
                        type='text'
                        placeholder='Search'
                        className='bg-transparent outline-none border-none w-full px-3 text-[15px] text-[#4B5563] placeholder:text-[#9CA3AF]'
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className='flex items-center gap-5'>
                {/* Notification */}
                <button className='relative w-11 h-8 rounded-xl hover:bg-[#F5F6FA] flex items-center justify-center transition-all'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                        className='w-6 h-6 text-[#4F7CF3]'
                    >
                        <path d='M12 2a6 6 0 0 0-6 6v3.586L4.293 13.293A1 1 0 0 0 5 15h14a1 1 0 0 0 .707-1.707L18 11.586V8a6 6 0 0 0-6-6Zm0 20a3 3 0 0 0 2.995-2.824L15 19h-6a3 3 0 0 0 3 3Z' />
                    </svg>

                    <div className='absolute top-1 right-1 w-5 h-5 rounded-full bg-[#FF4D6D] text-white text-[11px] font-semibold flex items-center justify-center'>
                        6
                    </div>
                </button>

                {/* Language */}
                <div className='hidden sm:flex items-center gap-3 cursor-pointer'>
                    <img
                        src='https://flagcdn.com/w40/gb.png'
                        alt='flag'
                        className='w-6 h-5 rounded-md object-cover'
                    />

                    <div className='flex items-center gap-2'>
                        <span className='text-[12px] font-medium text-[#4B4B4B]'>
                            English
                        </span>

                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 18 18'
                            strokeWidth={2}
                            stroke='currentColor'
                            className='w-3 h-3 text-[#7B7B7B]'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='m19.5 8.25-7.5 7.5-7.5-7.5'
                            />
                        </svg>
                    </div>
                </div>

                {/* Profile */}
                <div className='flex items-center gap-3 cursor-pointer mr-4'>
                    <img
                        src='https://i.pravatar.cc/150?img=32'
                        alt='profile'
                        className='w-12 h-12 rounded-full object-cover'
                    />

                    <div className='hidden md:block'>
                        <h3 className='text-[12px] font-semibold text-[#232323] leading-none'>
                            Moni Roy
                        </h3>

                        <p className='text-[8px] text-[#8A8A8A] mt-2'>
                            Admin
                        </p>
                    </div>

                    <button className='hidden md:flex w-8 h-8 rounded-full border border-[#E5E7EB] items-center justify-center'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 20 20'
                            strokeWidth={2}
                            stroke='currentColor'
                            className='w-3 h-3 text-[#7B7B7B]'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='m19.5 8.25-7.5 7.5-7.5-7.5'
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default AdminDashboardNavbar;