import '../styles/CounterStep.css'

function CounterStep({ counterStep, onChange }) {
  return (
    <div>
      <div className="step">Choose counter's step:</div>

      <div className="ib-elem-parent">
        <input
          type="range"
          min="1"
          max="10"
          value={counterStep}
          onChange={onChange}
        />
        <span className="step-value small-btn">{counterStep}</span>
      </div>
    </div>
  )
}

export default CounterStep
