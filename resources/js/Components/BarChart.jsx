import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



function BarChart({data1, data2, data3, header}) {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: header,
          },
        },
      };

  const data = {
    labels: ['Dikabulkan', 'Menunggu', 'Ditolak'],
    datasets: [
      {

        data: [data1, data2, data3],
        backgroundColor: [
          'rgba(41, 41, 100, 1)',
          'rgba(245, 171, 29, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        label: '',
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

export default BarChart;
