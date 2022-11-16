import '../styles/ChangeCountButtons.css'

function ChangeCountButtons({ increment, decrement }) {
  return (
    <div className="ib-elem-parent">
      <button className="decrement-count small-btn" onClick={decrement}>
        –
      </button>
      <button className="increment-count small-btn" onClick={increment}>
        +
      </button>
    </div>
  )
}

export default ChangeCountButtons
