import { Link, Outlet, useNavigate } from 'react-router-dom';

function DashboardLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here (e.g., clearing tokens)
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-200">
      <aside className="w-64 bg-blue-800 text-white flex flex-col">
        <div className="p-6 font-bold text-2xl bg-blue-900">Dashboard</div>
        <nav className="flex-grow">
          <Link to="/dashboard/home" className="block p-4 hover:bg-blue-700">Home</Link>
          <Link to="/dashboard/profile" className="block p-4 hover:bg-blue-700">Profile</Link>
        </nav>
        <button 
          onClick={handleLogout} 
          className="p-4 bg-red-600 hover:bg-red-700 w-full"
        >
          Logout
        </button>
      </aside>
      <main className="flex-grow p-10 bg-white shadow-lg overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;