// components/sidebar/SidebarItems.tsx

import {
    Inbox,
    Star,
    Send,
    FilePenLine,
    TriangleAlert,
    BadgeAlert,
    Trash2,
} from 'lucide-react';

export const sidebarItems = [
    {
        id: 'inbox',
        label: 'Inbox',
        icon: Inbox,
        count: '1253',
    },
    {
        id: 'starred',
        label: 'Starred',
        icon: Star,
        count: '245',
    },
    {
        id: 'sent',
        label: 'Sent',
        icon: Send,
        count: '24,532',
    },
    {
        id: 'draft',
        label: 'Draft',
        icon: FilePenLine,
        count: '09',
    },
    {
        id: 'spam',
        label: 'Spam',
        icon: TriangleAlert,
        count: '14',
    },
    {
        id: 'important',
        label: 'Important',
        icon: BadgeAlert,
        count: '18',
    },
    {
        id: 'bin',
        label: 'Bin',
        icon: Trash2,
        count: '9',
    },
];

export const labels = [
    {
        id: 1,
        title: 'Primary',
        color: 'border-emerald-400',
    },
    {
        id: 2,
        title: 'Social',
        color: 'border-blue-400',
    },
    {
        id: 3,
        title: 'Work',
        color: 'border-orange-400',
    },
    {
        id: 4,
        title: 'Friends',
        color: 'border-violet-400',
    },
];