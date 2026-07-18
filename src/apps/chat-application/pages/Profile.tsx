import { useMemo, useState } from 'react';
import { Camera, Mail, Phone, Sparkles } from 'lucide-react';
import { useChat } from '../context/ChatContext';
import { Button } from '../components/common/Button';
import { Modal } from '../components/common/Modal';
import { ProfileCard } from '../components/profile/ProfileCard';
import { Input } from '../components/common/Input';

export function Profile() {
  const { auth } = useChat();
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState(() => ({ name: auth.user?.name ?? '', email: auth.user?.email ?? '', phone: auth.user?.phone ?? '', about: auth.user?.about ?? '' }));

  const user = auth.user;

  const sharedMedia = useMemo(() => [
    'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=300&q=80',
  ], []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-[28px] border border-white/10 bg-slate-950/70 p-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-100">Profile</h2>
          <p className="text-sm text-slate-400">A calm snapshot of the person behind the messages.</p>
        </div>
        <Button variant="secondary" onClick={() => setIsEditing(true)}>Edit profile</Button>
      </div>

      {user ? <ProfileCard cover={user.cover} avatar={user.avatar} name={form.name || user.name} username={user.username} email={form.email || user.email} phone={form.phone || user.phone} about={form.about || user.about} /> : null}

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-4">
          <div className="flex items-center gap-2 text-cyan-300">
            <Sparkles size={16} />
            <h3 className="font-semibold">Shared media</h3>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {sharedMedia.map((src) => <img key={src} src={src} alt="shared media" className="h-24 w-full rounded-2xl object-cover" />)}
          </div>
        </div>
        <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-4">
          <h3 className="font-semibold text-slate-100">Quick details</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <div className="flex items-center gap-3"><Mail size={16} /> {form.email || user?.email}</div>
            <div className="flex items-center gap-3"><Phone size={16} /> {form.phone || user?.phone}</div>
            <div className="flex items-center gap-3"><Camera size={16} /> Avatar and cover ready for updates</div>
          </div>
        </div>
      </div>

      <Modal open={isEditing} title="Edit profile" onClose={() => setIsEditing(false)}>
        <div className="space-y-3">
          <Input label="Name" value={form.name} onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))} />
          <Input label="Email" value={form.email} onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))} />
          <Input label="Phone" value={form.phone} onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))} />
          <Input label="About" value={form.about} onChange={(e) => setForm((prev) => ({ ...prev, about: e.target.value }))} />
          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setIsEditing(false)}>Cancel</Button>
            <Button onClick={() => setIsEditing(false)}>Save</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
