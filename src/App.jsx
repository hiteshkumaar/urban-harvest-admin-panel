import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Products } from './pages/Products';
import { Layout } from './components/layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        {/* Placeholder routes for other nav items */}
        <Route path="orders" element={<div className="p-8 text-center text-gray-500">Orders Page Coming Soon</div>} />
        <Route path="customers" element={<div className="p-8 text-center text-gray-500">Customers Page Coming Soon</div>} />
        <Route path="analytics" element={<div className="p-8 text-center text-gray-500">Analytics Page Coming Soon</div>} />
        <Route path="settings" element={<div className="p-8 text-center text-gray-500">Settings Page Coming Soon</div>} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default App;
