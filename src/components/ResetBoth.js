function ResetBoth({ onClick }) {
  return (
    <div>
      <button className="reset-btn" onClick={onClick}>
        Reset both – total count and counter's step
      </button>
    </div>
  )
}

export default ResetBoth
