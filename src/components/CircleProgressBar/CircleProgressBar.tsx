import { FC } from 'react';
import './style.css';

interface Props {
  value: number;
  steps: number;
  circleWidth?: number;
  radius?: number;
  textSize?: number;
}

const CircleProgressBar: FC<Props> = ({ value, steps, circleWidth=150, radius=50, textSize=18 }) => {
  const dashArray = radius * Math.PI * 2;
  let progressBar = 100 / steps;
  progressBar = progressBar * value;
  const dashOffSet = dashArray - (dashArray * progressBar) / 100;

  return (
      <svg width={circleWidth} height={circleWidth} viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
        <circle cx={circleWidth / 2} cy={circleWidth / 2} r={radius} style={{ strokeWidth: 6 }} className='circle-background'></circle>
        <circle cx={circleWidth / 2} cy={circleWidth / 2} r={radius} className='circle-progress' style={{ strokeDasharray: dashArray, strokeWidth: 6, strokeDashoffset: dashOffSet }} transform={`rotate(180 ${circleWidth / 2} ${circleWidth / 2})`}></circle>
        <text x="50%"  y="50%" dy="0.3em" textAnchor='middle' className='circle-text' style={{ fontSize: `${textSize}px` }}>
          {`${value} de ${steps}`}
        </text>
      </svg>
  )
}

export { CircleProgressBar }