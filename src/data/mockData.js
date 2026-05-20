export const dashboardStats = [
  { id: 1, title: 'Total Orders', value: '1,234', trend: '+12%', isPositive: true },
  { id: 2, title: 'Revenue', value: '$45,678', trend: '+8%', isPositive: true },
  { id: 3, title: 'Active Users', value: '892', trend: '-2%', isPositive: false },
  { id: 4, title: 'Pending Deliveries', value: '45', trend: '+5%', isPositive: true },
];

export const recentOrders = [
  { id: '#ORD-001', customer: 'Alice Smith', product: 'Organic Apples', amount: '$24.00', status: 'Paid', deliveryStatus: 'Delivered' },
  { id: '#ORD-002', customer: 'Bob Johnson', product: 'Fresh Tomatoes', amount: '$15.50', status: 'Pending', deliveryStatus: 'On the way' },
  { id: '#ORD-003', customer: 'Charlie Brown', product: 'Carrots', amount: '$8.20', status: 'Paid', deliveryStatus: 'Processing' },
  { id: '#ORD-004', customer: 'Diana Ross', product: 'Avocados', amount: '$32.00', status: 'Failed', deliveryStatus: 'Cancelled' },
  { id: '#ORD-005', customer: 'Evan Wright', product: 'Bananas', amount: '$12.00', status: 'Paid', deliveryStatus: 'Delivered' },
];

export const products = [
  { id: '1', name: 'Organic Apples', price: '$4.99/lb', category: 'Fruits', stockStatus: 'Available', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6faa6?auto=format&fit=crop&q=80&w=200' },
  { id: '2', name: 'Fresh Tomatoes', price: '$2.99/lb', category: 'Vegetables', stockStatus: 'Available', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=200' },
  { id: '3', name: 'Carrots', price: '$1.49/lb', category: 'Vegetables', stockStatus: 'Out of Stock', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=200' },
  { id: '4', name: 'Avocados', price: '$1.99/ea', category: 'Fruits', stockStatus: 'Available', image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=200' },
];
