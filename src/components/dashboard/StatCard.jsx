import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import clsx from 'clsx';

export const StatCard = ({ title, value, trend, isPositive, Icon }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={itemVariants}
      className="card p-6 flex flex-col group hover:border-primary-200 dark:hover:border-primary-800 transition-colors cursor-default"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          <Icon size={24} />
        </div>
        <div className={clsx(
          "flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full",
          isPositive 
            ? "text-green-700 bg-green-50 dark:text-green-400 dark:bg-green-900/20" 
            : "text-red-700 bg-red-50 dark:text-red-400 dark:bg-red-900/20"
        )}>
          {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          <span>{trend}</span>
        </div>
      </div>
      
      <div>
        <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">{title}</h3>
        <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
      </div>
    </motion.div>
  );
};
