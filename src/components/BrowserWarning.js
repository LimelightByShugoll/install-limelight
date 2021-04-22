const BrowserWarning = ({ onConfirm, onCancel }) => {
  return (
    <div className="modal c-flex perfect-center">
      <div className="modal-msg c-flex perfect-center">
        <p className="title center">Warning!</p>
        <p className="text center mt30">
          The browser version of Adobe Connect is severely limited in
          functionality. If you're sure you'd like to join this way, please
          click "Confirm" below.
        </p>
        <div className="mt50">
          <button className="btn danger ms40" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn primary ms40" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default BrowserWarning
