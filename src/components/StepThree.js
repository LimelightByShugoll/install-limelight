import { IoMdMic as Mic } from "react-icons/io"
import { IoVideocamSharp as WebCam } from "react-icons/io5"

const StepThree = ({ type, appType, jobNumber }) => {
  const link = `https://limelight.adobeconnect.com/${jobNumber}?${
    appType === "app" ? "proto=true" : "html-view=true"
  }`

  return (
    <div className="step c-flex">
      <p className="title center align-self-center">
        Please keep this window open!
      </p>
      <p className="text align-self-center center mt30">
        When you click on "Enter Room", you will be brought to a webpage that
        will ask you to enter your name as a guest. Be sure to enter your first{" "}
        {type === "p" ? (
          <span>
            name{" "}
            <u>
              <strong>only</strong>
            </u>
            .
          </span>
        ) : (
          <span>
            <u>
              <strong> and</strong>
            </u>{" "}
            last name.
          </span>
        )}
      </p>
      {type === "p" ? (
        <p className="text align-self-center center">
          Once in the room, the technician will prompt you to turn on your
          microphone (<Mic style={{ verticalAlign: "middle" }} />) and webcam ({" "}
          <WebCam style={{ verticalAlign: "middle" }} /> ). These icons will be
          located at the top of the screen.
        </p>
      ) : (
        <p className="text align-self-center center">
          To preserve the security of our platform, it is very important you
          enter using both your first and last name. If you enter any other way,
          it may take a while to admit you as we will need to verify your
          identity.
        </p>
      )}
      <p className="mt50">
        * If you require additional assistance, please contact us by using the
        "Help" button in red at the top of this page.
      </p>
      <a
        href={link}
        className="btn primary align-self-end mt50"
        target="_blank"
      >
        Enter Room
      </a>
    </div>
  )
}

export default StepThree
