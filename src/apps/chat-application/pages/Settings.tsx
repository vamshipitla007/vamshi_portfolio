import { useChat } from '../context/ChatContext';
import { Button } from '../components/common/Button';
import { SettingsCard } from '../components/settings/SettingsCard';
import { Toggle } from '../components/common/Toggle';

export function Settings() {
  const { settings, updateSettings, logout } = useChat();

  return (
    <div className="space-y-4">
      <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-4">
        <h2 className="text-2xl font-semibold text-slate-100">Settings</h2>
        <p className="text-sm text-slate-400">Tune the experience to fit your rhythm.</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <SettingsCard title="Notifications" description="Stay updated on new replies and mentions.">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-300">Enable push notifications</span>
            <Toggle enabled={settings.notifications} onChange={(value) => updateSettings({ notifications: value })} />
          </div>
        </SettingsCard>

        <SettingsCard title="Privacy" description="Control how your presence is shared.">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-300">Display online status</span>
            <Toggle enabled={settings.privacy} onChange={(value) => updateSettings({ privacy: value })} />
          </div>
        </SettingsCard>

        <SettingsCard title="Appearance" description="Switch between light and dark themes.">
          <select value={settings.appearance} onChange={(event) => updateSettings({ appearance: event.target.value as 'system' | 'dark' | 'light' })} className="w-full rounded-2xl border border-white/10 bg-slate-800 px-3 py-2 text-sm text-slate-200">
            <option value="dark">Dark</option>
            <option value="light">Light</option>
            <option value="system">System</option>
          </select>
        </SettingsCard>

        <SettingsCard title="Language" description="Choose the language for your workspace.">
          <select value={settings.language} onChange={(event) => updateSettings({ language: event.target.value })} className="w-full rounded-2xl border border-white/10 bg-slate-800 px-3 py-2 text-sm text-slate-200">
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </SettingsCard>
      </div>

      <div className="flex justify-end">
        <Button variant="secondary" onClick={logout}>Log out</Button>
      </div>
    </div>
  );
}
