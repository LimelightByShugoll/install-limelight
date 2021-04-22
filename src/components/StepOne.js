import { useState } from "react"
import { BrowserWarning } from "../components"

const StepOne = ({ os, setStep, setAppType, type }) => {
  const [dlStarted, setDlStarted] = useState(false)
  const [modal, setModal] = useState(false)

  return (
    <>
      {modal && (
        <BrowserWarning
          onConfirm={() => {
            setAppType("browser")
            setStep(2)
          }}
          onCancel={() => setModal(false)}
        />
      )}
      <div className="step c-flex">
        <p className="text big center align-self-center">
          First, let's download and install the Adobe Connect application.
        </p>
        {!dlStarted && (
          <p className="align-self-center center mt30">
            * You can skip this step if you already have the application
            installed on your computer.
          </p>
        )}
        <div className="align-self-center mt50">
          <a
            className="btn primary ms20"
            href={
              os === "win"
                ? "https://www.adobe.com/go/ConnectShell11"
                : "https://www.adobe.com/go/ConnectMac11Plus"
            }
            onClick={() => setDlStarted(true)}
          >
            Download{dlStarted ? " again" : ""}
          </a>
          {!dlStarted && (
            <button className="btn warning ms20" onClick={() => setStep(2)}>
              I already have the app
            </button>
          )}
          {type !== "p" && (
            <button className="btn warning ms20" onClick={() => setModal(true)}>
              I'd rather join through the browser
            </button>
          )}
        </div>
        {dlStarted && (
          <>
            <p className="mt50">
              Your download should start momentarily. If it does not, please
              click on "Download again" or contact us for help using the "Help"
              button at the top of this page.
            </p>
            <p className="mt30">
              Once you've finished installing the application, please return to
              this page and click "Proceed" below.
            </p>
            <button
              className="btn primary mt50 align-self-end"
              onClick={() => setStep(2)}
            >
              Proceed
            </button>
          </>
        )}
      </div>
    </>
  )
}

export default StepOne
