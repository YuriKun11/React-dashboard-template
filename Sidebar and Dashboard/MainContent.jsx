import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const MainContent = () => {

  const pieData = {
    labels: ['Sales', 'Marketing', 'Development', 'Support'],
    datasets: [
      {
        data: [300, 50, 100, 120],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4caf50'], 
        hoverBackgroundColor: ['#ff4b5c', '#2e93c8', '#ffb833', '#6ddc64']
      }
    ]
  };

  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Revenue (₱)',
        data: [1500, 2000, 1700, 2200, 1800, 2500], 
        backgroundColor: '#4caf50',
        borderColor: '#388e3c', 
        borderWidth: 1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      }
    },
    aspectRatio: 1, 
  };

  return (
    <main className="flex-1 p-6 bg-gray-50">
      <div className="container text-left">
        <h1 className="text-xl font-medium">Dashboard</h1>
        <p className="mt-4 text-gray-600">Welcome back, here's an overview of your stats.</p>

        {/* ------------------------- Stat Cards ------------------------- */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* ------- Card 1 ------- */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-medium text-gray-800">Total Users</h2>
            <p className="mt-2 text-3xl font-semibold text-indigo-600">1,245</p>
          </div>

          {/* ------- Card 2 ------- */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-medium text-gray-800">Orders</h2>
            <p className="mt-2 text-3xl font-semibold text-green-600">523</p>
          </div>

          {/*------- Card 3 -------*/}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-medium text-gray-800">Revenue</h2>
            <p className="mt-2 text-3xl font-semibold text-yellow-600">₱32,560</p>
          </div>
        </div>

        <div className="mt-8 flex space-x-6">
        {/*------------------------- Pie Chart -------------------------*/}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-medium text-gray-800">Department Distribution</h2>
            <div className="h-72 w-full" style={{ maxWidth: '400px', maxHeight: '300px', width: '100%', height: '100%' }}>
            <Pie data={pieData} options={chartOptions} />
            </div>
        </div>

        {/* -------------------------Bar Chart -------------------------*/}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-medium text-gray-800">Monthly Revenue</h2>
            <div className="h-72 w-full" style={{ maxWidth: '400px', maxHeight: '300px', width: '100%', height: '100%' }}>
            <Bar data={barData} options={chartOptions} />
            </div>
        </div>
        </div>


        {/* -------------------------Data Table -------------------------*/}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-medium text-gray-800">Recent Orders</h2>
          <table className="min-w-full mt-4">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Order ID</th>
                <th className="py-2 px-4 border-b text-left">Customer</th>
                <th className="py-2 px-4 border-b text-left">Amount</th>
                <th className="py-2 px-4 border-b text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">#12345</td>
                <td className="py-2 px-4 border-b">John Doe</td>
                <td className="py-2 px-4 border-b">₱230</td>
                <td className="py-2 px-4 border-b text-green-600">Completed</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">#12346</td>
                <td className="py-2 px-4 border-b">Jane Smith</td>
                <td className="py-2 px-4 border-b">₱125</td>
                <td className="py-2 px-4 border-b text-yellow-600">Pending</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">#12347</td>
                <td className="py-2 px-4 border-b">Mark Johnson</td>
                <td className="py-2 px-4 border-b">₱89</td>
                <td className="py-2 px-4 border-b text-red-600">Cancelled</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </main>
  );
}

export default MainContent;
