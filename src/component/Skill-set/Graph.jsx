import * as React from 'react';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { LinePlot, MarkPlot, lineElementClasses, markElementClasses } from '@mui/x-charts/LineChart';
import { useSelector } from 'react-redux';



export default function ComparisonGraph() {
    const{percentile}=useSelector((state)=>state.popup)
    const pData = [10, 20, 40, 80, 50, 30, 90, 20, 10];
const xLabels = [0, 10, 20, 30, 40, 50, 60, 70, 100];
const userPercentile = percentile;
const highlightedPoint = { x: 90, y: 90, students: 4 };
  return (
    <div className="p-6 relative bg-white border border-gray-300 rounded-xl shadow-md max-w-[40rem]  w-full overflow-hidden">
      <h3 className="text-lg font-bold mb-2">Comparison Graph</h3>
      <p className="text-gray-600  mb-4 text-xl">
        <strong className="text-gray-600 ">You scored {userPercentile} percentile</strong> which is lower than the
        average percentile 72% of all the engineers who took this assessment.
      </p>
      <div className="relative w-full flex flex-col items-center overflow-x-auto">
        <div className="w-full max-w-[500px]">
        <ChartContainer
          width={500}
          height={300}
          series={[{ type: 'line', data: pData }]}
          xAxis={[{ scaleType: 'point', data: xLabels }]}
          sx={{
            [`& .${lineElementClasses.root}`]: {
              stroke: '#6b46c1',
              strokeWidth: 2,
            },
            [`& .${markElementClasses.root}`]: {
              stroke: '#6b46c1',
              scale: '0.6',
              fill: '#fff',
              strokeWidth: 2,
            },
          }}
          disableAxisListener
        >
          <LinePlot />
          <MarkPlot />
        </ChartContainer>
        </div>
        <div className="absolute sm:left-[30%] left-[20%] top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">your percentile</div>
        <div className="absolute sm:left-[65%] left-[50%] top-[10%] bg-white shadow-md border p-2 rounded-md">
          <p className="text-black font-bold">{highlightedPoint.x}</p>
          <p className="text-indigo-600">numberOfStudent : {highlightedPoint.students}</p>
        </div>
      </div>
    </div>
  );
}
