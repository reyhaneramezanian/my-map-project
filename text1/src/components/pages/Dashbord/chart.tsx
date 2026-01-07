import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type IndexProps = {
  chartData: object;
};

const Index = ({ chartData }: IndexProps) => {
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "نمودار دمای تهران – ۱۲ ساعت آینده",
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default Index;
