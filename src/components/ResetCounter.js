function ResetCounter({ resetCount }) {
  return (
    <div>
      <button className="reset-btn" onClick={resetCount}>
        Reset total count
      </button>
    </div>
  )
}

export default ResetCounter
