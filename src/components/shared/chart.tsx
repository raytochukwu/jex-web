// components/CryptoChart.tsx
import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface CryptoChartProps {
  high: number
  low: number
}

const CryptoChart: React.FC<CryptoChartProps> = ({ high, low }) => {
  const data = {
    labels: [
      'Point 1',
      'Point 2',
      'Point 3',
      'Point 4',
      'Point 5',
      'Point 6',
      'Point 7',
      'Point 8',
      'Point 9',
      'Point 10',
    ],
    datasets: [
      {
        label: 'Price',
        data: [
          low,
          (low + high) / 8,
          (low + high) / 4,
          (low + high) / 6,
          (low + high) / 3,
          (low + high) / 2.5,
          (2 * low + high) / 3,
          (3 * low + high) / 4,
          (4 * low + high) / 5,
          high,
        ],
        fill: false,
        borderColor: '#77dd77', // green color
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    elements: {
      line: {
        borderColor: '#77dd77', // adjust the color to match the image
        borderWidth: 2,
        tension: 0.4, // curve the line
      },
    },
  }

  return (
    <div style={{ width: '213px', height: '50px' }}>
      <Line data={data} options={options} />
    </div>
  )
}

export default CryptoChart
