const StepZero = ({ setStep }) => {
  return (
    <div className="step c-flex">
      <p className="title center align-self-center">Welcome to Limelight!</p>
      <p className="text center align-self-center">
        There are a few things to go over before entering the meeting room.
      </p>
      <button
        className="btn primary align-self-end mt50"
        onClick={() => setStep(1)}
      >
        Proceed
      </button>
    </div>
  )
}

export default StepZero
