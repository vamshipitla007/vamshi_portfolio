interface ProfileCardProps {
  cover: string;
  avatar: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  about: string;
}

export function ProfileCard({ cover, avatar, name, username, email, phone, about }: ProfileCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-black/20">
      <img src={cover} alt="cover" className="h-36 w-full object-cover" />
      <div className="px-6 pb-6">
        <div className="-mt-8 flex items-end gap-4">
          <img src={avatar} alt={name} className="h-20 w-20 rounded-full border-4 border-slate-900 object-cover" />
          <div>
            <h3 className="text-xl font-semibold text-slate-100">{name}</h3>
            <p className="text-sm text-slate-400">@{username}</p>
          </div>
        </div>
        <div className="mt-6 grid gap-3 text-sm text-slate-300">
          <div><span className="text-slate-500">Email</span> {email}</div>
          <div><span className="text-slate-500">Phone</span> {phone}</div>
          <div><span className="text-slate-500">About</span> {about}</div>
        </div>
      </div>
    </div>
  );
}
