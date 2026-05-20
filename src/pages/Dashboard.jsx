import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { StatCard } from '../components/dashboard/StatCard';
import { RevenueChart } from '../components/dashboard/RevenueChart';
import { RecentOrdersTable } from '../components/dashboard/RecentOrdersTable';
import { ShoppingBag, DollarSign, Users, Truck } from 'lucide-react';

const iconMap = {
  'Total Orders': ShoppingBag,
  'Revenue': DollarSign,
  'Active Users': Users,
  'Pending Deliveries': Truck,
};

export const Dashboard = () => {
  const { stats, recentOrders } = useSelector((state) => state.dashboard);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Welcome back! Here's what's happening today.</p>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-primary sm:w-auto w-full">Download Report</button>
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
      >
        {stats.map((stat) => (
          <StatCard 
            key={stat.id} 
            title={stat.title} 
            value={stat.value} 
            trend={stat.trend} 
            isPositive={stat.isPositive} 
            Icon={iconMap[stat.title]} 
          />
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div className="lg:col-span-1">
          {/* Quick Actions or some other widget could go here, for now let's just make RevenueChart full width or add a placeholder */}
           <div className="card p-6 h-full flex flex-col items-center justify-center text-center">
             <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <Truck size={32} />
             </div>
             <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Need to schedule a delivery?</h3>
             <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Quickly arrange a new shipment to your customers.</p>
             <button className="btn btn-primary">Schedule Delivery</button>
           </div>
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Orders</h2>
          <button className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400">View All</button>
        </div>
        <RecentOrdersTable orders={recentOrders} />
      </div>
    </div>
  );
};
