import { nanoid } from 'nanoid';

import { DashboardCard } from '../components';

const data = [
  { id: nanoid(), title: 'Summary', amount: '$2,12,200.10', quantity: '100' },
  { id: nanoid(), title: 'Total Out of Stock', amount: '30' },
  { id: nanoid(), title: 'Order made', amount: '$2,030.10', quantity: '10' }
];

const Dashboard = () => {
  return (
    <div className="flex flex-wrap flex-auto gap-4 xl:gap-8 justify-between">
      {data.map((item, index) => (
        <DashboardCard
          key={item.id}
          index={index}
          title={item.title}
          heading={item.amount}
          subHeading={item.quantity}
        />
      ))}
    </div>
  );
};

export default Dashboard;
