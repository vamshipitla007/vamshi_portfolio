export interface Tournament {
  id: string
  name: string
  category: string
  prizePool: string
  date: string
  teams: number
  image: string
}

export interface Player {
  id: string
  nick: string
  role: string
  country: string
  photo: string
  kills: number
  winRate: number
  socials: { name: string; url: string }[]
}

export interface Match {
  id: string
  team1: { name: string; logo: string }
  team2: { name: string; logo: string }
  date: string
  time: string
  tournament: string
  status: 'LIVE' | 'UPCOMING' | 'FINISHED'
}

export const TOURNAMENTS: Tournament[] = [
  {
    id: 't1',
    name: 'Valorant Global Championship',
    category: 'Valorant',
    prizePool: '$2,500,000',
    date: 'Aug 12 - Aug 21, 2026',
    teams: 32,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=5d3a2eb5b4a0dd5446e2b7e36cc5b9f7'
  },
  {
    id: 't2',
    name: 'Battle Royale Masters',
    category: 'Battle Royale',
    prizePool: '$1,000,000',
    date: 'Sep 3 - Sep 10, 2026',
    teams: 48,
    image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: 't3',
    name: 'League World Arena',
    category: 'MOBA',
    prizePool: '$3,200,000',
    date: 'Oct 1 - Oct 15, 2026',
    teams: 24,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=7c6f9a0a5e6b4f23'
  },
  {
    id: 't4',
    name: 'Cyber Legends Cup',
    category: 'FPS',
    prizePool: '$750,000',
    date: 'Nov 8 - Nov 12, 2026',
    teams: 16,
    image: 'https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=f7f49b1b8f5f8f9b'
  }
]

export const PLAYERS: Player[] = [
  {
    id: 'p1',
    nick: 'NIGHTFOX',
    role: 'Sniper',
    country: 'SE',
    photo:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800',
    kills: 12458,
    winRate: 72,
    socials: [
      { name: 'twitter', url: '#' },
      { name: 'twitch', url: '#' }
    ]
  },
  {
    id: 'p2',
    nick: 'VOIDLORD',
    role: 'Leader',
    country: 'US',
    photo:
      'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800',
    kills: 9840,
    winRate: 68,
    socials: [
      { name: 'youtube', url: '#' },
      { name: 'discord', url: '#' }
    ]
  },
  {
    id: 'p3',
    nick: 'SPECTRA',
    role: 'Support',
    country: 'KR',
    photo:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800',
    kills: 7320,
    winRate: 75,
    socials: [
      { name: 'instagram', url: '#' },
      { name: 'tiktok', url: '#' }
    ]
  }
];

export const MATCHES: Match[] = [
  {
    id: 'm1',
    team1: {
      name: 'Alpha Wolves',
      logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=AlphaWolves'
    },
    team2: {
      name: 'Neon Titans',
      logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=NeonTitans'
    },
    date: 'Jun 20, 2026',
    time: '18:00 GMT',
    tournament: 'Valorant Global Championship',
    status: 'LIVE'
  },
  {
    id: 'm2',
    team1: {
      name: 'Rogue Squadron',
      logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=RogueSquadron'
    },
    team2: {
      name: 'Cyber Knights',
      logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=CyberKnights'
    },
    date: 'Jun 22, 2026',
    time: '20:30 GMT',
    tournament: 'Battle Royale Masters',
    status: 'UPCOMING'
  }
];
export const SPONSORS = [
  {
    id: "s1",
    name: "NVIDIA",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nvidia.svg",
  },
  {
    id: "s2",
    name: "ASUS ROG",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/republicofgamers.svg",
  },
  {
    id: "s3",
    name: "Intel",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/intel.svg",
  },
  {
    id: "s4",
    name: "Logitech G",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/logitech.svg",
  },
  {
    id: "s5",
    name: "Razer",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/razer.svg",
  },
];
