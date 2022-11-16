import { useState } from 'react'
import './App.css'
import TotalCount from './components/TotalCount'
import ChangeCountButtons from './components/ChangeCountButtons'
import ResetCounter from './components/ResetCounter'
import CounterStep from './components/CounterStep'
import ResetCounterStep from './components/ResetCounterStep'
import ResetBoth from './components/ResetBoth'

function App() {
  const [count, setCount] = useState(0)
  const [counterStep, setCounterStep] = useState(1)

  const handleInputChange = (event) => setCounterStep(+event.target.value)
  const incrementCount = () => setCount(count + counterStep)
  const decrementCount = () => setCount(count - counterStep)
  const resetCount = () => setCount(0)
  const resetCounterStep = () => setCounterStep(1)
  const resetBoth = () => {
    resetCount()
    resetCounterStep()
  }

  return (
    <div className="App">
      <TotalCount count={count} />
      <ChangeCountButtons
        increment={incrementCount}
        decrement={decrementCount}
      />
      <ResetCounter resetCount={resetCount} />
      <CounterStep counterStep={counterStep} onChange={handleInputChange} />
      <ResetCounterStep resetCounterStep={resetCounterStep} />
      <ResetBoth onClick={resetBoth} />
    </div>
  )
}

export default App
