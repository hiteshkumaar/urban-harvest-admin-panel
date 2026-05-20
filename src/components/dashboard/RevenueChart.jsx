import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useSelector } from 'react-redux';

const data = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 5000 },
  { name: 'Apr', revenue: 2780 },
  { name: 'May', revenue: 6890 },
  { name: 'Jun', revenue: 8390 },
  { name: 'Jul', revenue: 7490 },
];

export const RevenueChart = () => {
  const { isDarkMode } = useSelector((state) => state.theme);

  return (
    <div className="card p-6 h-[400px] flex flex-col">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue Overview</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Monthly revenue for the current year</p>
      </div>
      
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: isDarkMode ? '#9ca3af' : '#6b7280', fontSize: 12 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: isDarkMode ? '#9ca3af' : '#6b7280', fontSize: 12 }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
                borderColor: isDarkMode ? '#374151' : '#e5e7eb',
                borderRadius: '0.5rem',
                color: isDarkMode ? '#f3f4f6' : '#111827'
              }}
              itemStyle={{ color: '#0ea5e9', fontWeight: 600 }}
              formatter={(value) => [`$${value}`, 'Revenue']}
            />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="#0ea5e9" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorRevenue)" 
              activeDot={{ r: 6, strokeWidth: 0, fill: '#0ea5e9' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
