// pages/GmailClone.tsx

import { useState } from 'react';
import type { EmailType } from './EmailList';
import Sidebar from '@/components/ui/DashStackSidebar';
import EmailList from './EmailList';
import EmailChatScreen from './EmailChatScreen';

const initialEmails: EmailType[] = [
    {
        id: 1,
        sender: 'Jullu Jalal',
        subject:
            'Our Bachelor of Commerce program is ACBSP-accredited.',
        preview: '',
        body: '',
        time: '8:38 AM',
        category: 'Primary',
        read: false,
        starred: false,
        important: true,
    },

    {
        id: 2,
        sender: 'Minerva Barnett',
        subject:
            'Get Best Advertiser In Your Side Pocket',
        preview: '',
        body: '',
        time: '8:13 AM',
        category: 'Work',
        read: true,
        starred: false,
        sent: true,
    },

    {
        id: 3,
        sender: 'Peter Lewis',
        subject: 'Vacation Home Rental Success',
        preview: '',
        body: '',
        time: '7:52 PM',
        category: 'Friends',
        read: false,
        starred: false,
        draft: true,
    },

    {
        id: 4,
        sender: 'Anthony Briggs',
        subject:
            'Free Classifieds Using Them To Promote Your Stuff Online',
        preview: '',
        body: '',
        time: '7:52 PM',
        category: 'Primary',
        read: true,
        starred: true,
    },
    {
        id: 5,
        sender: 'Clifford Morgan',
        subject:
            'Enhance Your Brand Potential With Giant Advertising Blimps',
        preview: '',
        body: '',
        time: '4:13 PM',
        category: 'Social',
        read: true,
        starred: false,
        spam: true,
    },
    {
        id: 6,
        sender: 'Dianne Russell',
        subject: 'How To Use Craigslist To Find A Job',
        preview: '',
        body: '',
        time: '3:45 PM',
        category: 'Work',
        read: false,
        starred: false,
        important: true,
    },
    {
        id: 7,
        sender: 'Courtney Henry',
        subject:
            'How To Use Craigslist To Find A Job',
        preview: '',    
        body: '',
        time: '2:30 PM',
        category: 'Friends',
        read: true,
        starred: true,
        sent: true,
    },
    {
        id: 8,
        sender: 'Jenny Wilson',
        subject:
            'How To Use Craigslist To Find A Job',
        preview: '',
        body: '',
        time: '1:15 PM',
        category: 'Primary',
        read: false,
        starred: false,
        deleted: true,
    }
];

const DashStackEmails = () => {
    const [activeMenu, setActiveMenu] =
        useState('inbox');
    const [selectedEmail, setSelectedEmail] =
    useState<EmailType | null>(null);
    const [selectedIds, setSelectedIds] = useState<
        number[]
    >([]);

    const [emails, setEmails] =
        useState<EmailType[]>(initialEmails);

    return (
        <div className='min-h-screen bg-[#F5F6FA]'>
            <div className='flex flex-col gap-6 lg:flex-row'>
                <Sidebar
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                />

                <div className='flex-1'>
                   {selectedEmail ? (
    <EmailChatScreen
        selectedEmail={selectedEmail}
        onBack={() => setSelectedEmail(null)}
    />
) : (
    <EmailList
        emails={emails}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
        setEmails={setEmails}
        activeMenu={activeMenu}
        setSelectedEmail={setSelectedEmail}
    />
)}
                </div>
            </div>
        </div>
    );
};

export default DashStackEmails;