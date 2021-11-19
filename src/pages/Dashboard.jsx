import DashboardCard from '../components/DashboardCard';

const data = [
  { id: 1, title: 'Summary', amount: '$2,12,200.10', quantity: '100' },
  { id: 2, title: 'Total Out of Stock', amount: '30' },
  { id: 3, title: 'Order made', amount: '$2,030.10', quantity: '10' }
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
