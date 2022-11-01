import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
import Labels from './Labels';

Chart.register(ArcElement)

const config = {
  type: 'doughnut',
  data: {
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4,
      borderRadius: 30,
      spacing: 10,
    }]
  },
  options: {
    cutout: 115
  }
};


const Graph = () => {
  return (
    <div className="mx-auto">
      {/* chart */}
      <div className="chart relative">
        <Doughnut {...config} />
        <h3 className='font-bold top-20 left-20 absolute'>
          Total <span className='block text-emerald-400 font-bold'>${0}</span>
        </h3>
      </div>

      {/* labels  */}
      <div className='my-6'><Labels /></div>
    </div>
  );
};

export default Graph;