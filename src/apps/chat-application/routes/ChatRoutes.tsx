import { Navigate, Route, Routes } from 'react-router-dom';
import { useChat } from '../context/ChatContext';
import { MainLayout } from '../layouts/MainLayout';
import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';
import { ForgotPassword } from '../pages/ForgotPassword';
import { Dashboard } from '../pages/Dashboard';
import { Contacts } from '../pages/Contacts';
import { Profile } from '../pages/Profile';
import { Settings } from '../pages/Settings';
import { APP_ROUTES } from '../constants';

function ProtectedLayout() {
  const { auth } = useChat();
  if (!auth.isAuthenticated) {
    return <Navigate to={APP_ROUTES.login} replace />;
  }

  return (
    <MainLayout>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<Navigate to={APP_ROUTES.dashboard} replace />} />
      </Routes>
    </MainLayout>
  );
}

export function ChatRoutes() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<ProtectedLayout />} />
    </Routes>
  );
}
