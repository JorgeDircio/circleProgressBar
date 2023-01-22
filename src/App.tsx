import { FC, useState } from 'react'
import { CircleProgressBar } from './components/CircleProgressBar/CircleProgressBar';

const App: FC = () => {
  return (
    <div className='app'>
      <div>
        <CircleProgressBar value={1} steps={4} />
      </div>
    </div>
  );
}

export default App
