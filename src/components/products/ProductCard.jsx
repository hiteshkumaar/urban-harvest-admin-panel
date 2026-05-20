import { StatusBadge } from '../common/StatusBadge';
import { Edit2, Trash2, MoreVertical } from 'lucide-react';

export const ProductCard = ({ product }) => {
  return (
    <div className="card overflow-hidden group">
      <div className="relative h-48 bg-gray-100 dark:bg-gray-800">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <StatusBadge status={product.stockStatus} />
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-semibold text-gray-900 dark:text-white truncate pr-2">{product.name}</h3>
          <p className="font-bold text-primary-600 dark:text-primary-400 whitespace-nowrap">{product.price}</p>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{product.category}</p>
        
        <div className="flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-700">
          <button className="text-sm text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
            View Details
          </button>
          <div className="flex gap-2">
            <button className="p-1.5 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-gray-50 dark:bg-gray-800 rounded-md">
              <Edit2 size={16} />
            </button>
            <button className="p-1.5 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors bg-gray-50 dark:bg-gray-800 rounded-md">
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
