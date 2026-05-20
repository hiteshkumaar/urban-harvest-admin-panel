import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ProductCard } from '../components/products/ProductCard';
import { ProductTable } from '../components/products/ProductTable';
import { LayoutGrid, List, Plus, Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

export const Products = () => {
  const [viewMode, setViewMode] = useState('grid');
  const { products } = useSelector((state) => state.dashboard);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Products</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage your inventory and product listings.</p>
        </div>
        <button className="btn btn-primary flex items-center gap-2">
          <Plus size={18} />
          <span>Add Product</span>
        </button>
      </div>

      <div className="card p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex flex-1 w-full gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-transparent dark:border-gray-700 focus:border-primary-500 focus:bg-white dark:focus:bg-gray-800 rounded-lg text-sm transition-all outline-none text-gray-900 dark:text-white"
            />
          </div>
          <button className="btn bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2">
            <Filter size={18} />
            <span className="hidden sm:inline">Filter</span>
          </button>
        </div>

        <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg self-end md:self-auto w-full md:w-auto">
          <button 
            className={`flex-1 md:flex-none p-1.5 rounded-md flex items-center justify-center transition-colors ${viewMode === 'grid' ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
            onClick={() => setViewMode('grid')}
            title="Grid View"
          >
            <LayoutGrid size={18} />
          </button>
          <button 
            className={`flex-1 md:flex-none p-1.5 rounded-md flex items-center justify-center transition-colors ${viewMode === 'list' ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
            onClick={() => setViewMode('list')}
            title="List View"
          >
            <List size={18} />
          </button>
        </div>
      </div>

      <motion.div 
        key={viewMode}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="card overflow-hidden">
            <ProductTable products={products} />
          </div>
        )}
      </motion.div>
    </div>
  );
};
