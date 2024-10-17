import React from 'react';

const Card = ({ title, amount, color, icon }) => (
  <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
    <div className={`text-${color}-500`}>
      <i className={`fas fa-${icon} fa-2x`}></i>
    </div>
    <div>
      <h2 className="text-gray-700 font-bold">{title}</h2>
      <p className={`text-${color}-500 text-xl`}>{amount}</p>
    </div>
  </div>
);

const Dashboard = () => (
  <div className="flex justify-between space-x-4">
    <Card title="Wallet" amount="₹2875.00" color="green" icon="wallet" />
    <Card title="Earnings" amount="₹2875.00" color="blue" icon="money-bill-wave" />
    <Card title="Referrals" amount="2417" color="yellow" icon="arrow-right" />
  </div>
);

export default Dashboard;
