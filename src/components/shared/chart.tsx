// components/CryptoChart.tsx
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
    labels: ['Low', 'High'],
    datasets: [
      {
        label: 'Price',
        data: [low, high],
        fill: false,
        borderColor: '#36A2EB',
        tension: 0.1,
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
  }

  return (
    <div style={{ width: '213px', height: '50px' }}>
      <Line data={data} options={options} />
    </div>
  )
}

export default CryptoChart
