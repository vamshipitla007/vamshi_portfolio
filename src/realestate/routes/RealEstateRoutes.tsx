import { Route, Routes } from 'react-router-dom';
import { RealEstateLayout } from '../layouts/RealEstateLayout';
import { HomePage } from '../pages/HomePage';
import { ListingPage } from '../pages/ListingPage';
import { PropertyDetailsPage } from '../pages/PropertyDetailsPage';
import { AgentsPage } from '../pages/AgentsPage';
import { AgentProfilePage } from '../pages/AgentProfilePage';

export function RealEstateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RealEstateLayout />}>
        <Route index element={<HomePage />} />
        <Route path="listings" element={<ListingPage />} />
        <Route path="properties/:propertyId" element={<PropertyDetailsPage />} />
        <Route path="agents" element={<AgentsPage />} />
        <Route path="agents/:agentId" element={<AgentProfilePage />} />
      </Route>
    </Routes>
  );
}
