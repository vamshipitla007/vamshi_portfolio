// components/sidebar/Sidebar.tsx
import { labels, sidebarItems } from '@/data/SidebarItems';
import { Plus } from 'lucide-react';

type Props = {
    activeMenu: string;
    setActiveMenu: (value: string) => void;
};

const Sidebar = ({ activeMenu, setActiveMenu }: Props) => {
    return (
        <aside className='w-full rounded-[22px] border border-[#E4E4E7] bg-white p-3 lg:w-[230px]'>
            {/* COMPOSE BUTTON */}

            <button className='mb-8 flex h-[42px] w-full items-center justify-center gap-2 rounded-xl bg-[#5B86F7] text-sm font-semibold text-white transition hover:bg-[#4A74E6]'>
                <Plus size={16} />

                <span>Compose</span>
            </button>

            {/* TITLE */}

            <h2 className='mb-5 text-[18px] font-bold text-[#222]'>
                My Email
            </h2>

            {/* SIDEBAR ITEMS */}

            <div className='space-y-1.5'>
                {sidebarItems.map((item) => {
                    const Icon = item.icon;

                    const isActive = activeMenu === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveMenu(item.id)}
                            className={`flex h-[46px] w-full items-center justify-between rounded-xl px-4 transition ${
                                isActive
                                    ? 'bg-[#EEF3FF] text-[#5B86F7]'
                                    : 'text-[#2D2D2D] hover:bg-[#F7F7F8]'
                            }`}
                        >
                            <div className='flex items-center gap-3'>
                                <Icon
                                    size={18}
                                    className={
                                        isActive
                                            ? 'text-[#5B86F7]'
                                            : 'text-[#2D2D2D]'
                                    }
                                />

                                <span className='text-[15px] font-medium'>
                                    {item.label}
                                </span>
                            </div>

                            <span className='text-[14px] font-medium text-[#7B7B7B]'>
                                {item.count}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* LABELS */}

            <div className='mt-10'>
                <h2 className='mb-6 text-[18px] font-bold text-[#222]'>
                    Label
                </h2>

                <div className='space-y-5'>
                    {labels.map((label) => (
                        <div
                            key={label.id}
                            className='flex items-center gap-3'
                        >
                            <div
                                className={`h-4 w-4 rounded-sm border-2 ${label.color}`}
                            />

                            <span className='text-[15px] text-[#2D2D2D]'>
                                {label.title}
                            </span>
                        </div>
                    ))}
                </div>

                {/* CREATE LABEL */}

                <button className='mt-8 flex items-center gap-3 text-[#8E8E93]'>
                    <Plus size={16} />

                    <span className='text-[15px]'>
                        Create New Label
                    </span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;