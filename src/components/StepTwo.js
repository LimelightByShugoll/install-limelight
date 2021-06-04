import { useState } from "react"
import {
  Headphones,
  DoNotManipulate,
  ModeratorReview,
  NoGoingBack,
  NoGoingBackBreakouts,
  DoNotEnable,
  DoNotTouch,
  BackroomChat,
  PleaseEnable,
  ParticipantChat,
  Phone,
} from "./Bullets"

const StepTwo = ({ type, setStep }) => {
  const [clientType, setClientType] = useState(undefined)
  const [checked, setChecked] = useState(false)

  if (type === "c" && !clientType) {
    return (
      <div className="step c-flex">
        <p className="title align-self-center">Are you...?</p>
        <div className="align-self-center mt50">
          <button
            className="btn primary ms20"
            onClick={() => setClientType("moderator")}
          >
            A moderator
          </button>
          <button
            className="btn warning ms20"
            onClick={() => setClientType("viewer")}
          >
            A client viewer
          </button>
        </div>
      </div>
    )
  } else {
    return (
      <div className="step c-flex">
        <p className="text big center">
          Please read through the following{" "}
          <u>
            <strong>carefully</strong>
          </u>
          .
        </p>
        <ul className="mt30">
          {type === "p" ? (
            <>
              <Headphones />
              <PleaseEnable />
              <ParticipantChat />
              <Phone />
            </>
          ) : clientType === "moderator" ? (
            <>
              <Headphones />
              <DoNotManipulate />
              <ModeratorReview />
              <NoGoingBack />
              <NoGoingBackBreakouts />
              <BackroomChat />
            </>
          ) : (
            <>
              <DoNotEnable />
              <DoNotTouch />
              <BackroomChat />
            </>
          )}
        </ul>
        <div
          style={{ padding: "4px 10px" }}
          className="mt30 align-self-center cursor"
          onClick={() => setChecked(!checked)}
        >
          <input
            type="checkbox"
            name="understood"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <label htmlFor="understood">
            I have read and understood all of the above
          </label>
        </div>
        <div className="r-flex justify-between">
          <button
            className="btn warning mt50"
            onClick={() =>
              type === "c" ? setClientType(undefined) : setStep(1)
            }
          >
            Whoops, go back
          </button>
          <button
            className={`btn ${checked ? "primary" : "disabled"} mt50`}
            onClick={() => (checked ? setStep(3) : null)}
            style={{ marginLeft: "auto" }}
          >
            Proceed
          </button>
        </div>
      </div>
    )
  }
}

export default StepTwo
