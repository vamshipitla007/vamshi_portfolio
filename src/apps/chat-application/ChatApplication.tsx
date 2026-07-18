import { Toaster } from 'react-hot-toast';
import { ChatProvider } from './context/ChatContext';
import { ChatRoutes } from './routes/ChatRoutes';
import './styles/chat-app.css';

export default function ChatApplication() {
  return (
    <ChatProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <ChatRoutes />
        <Toaster
          position="top-right"
          toastOptions={{
            className: 'bg-slate-900 text-slate-100 border border-white/10',
            duration: 3200,
          }}
        />
      </div>
    </ChatProvider>
  );
}
