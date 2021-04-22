const Headphones = () => (
  <li>
    We strongly suggest using headphones with a built in microphone or similar
    configuration to reduce background noise and potential echo/feedback.{" "}
    <em>
      (If you are joining with a Mac, this will most likely be necessary.)
    </em>
  </li>
)

const DoNotManipulate = () => (
  <li>
    Do{" "}
    <strong>
      <u>not</u>
    </strong>{" "}
    attempt to manipulate pods such as moving their position or changing their
    size. If you'd like to make changes, please let the lead technician know.
  </li>
)

const ModeratorReview = () => (
  <li>
    Once admitted into the room, the lead technician will be available to check
    your webcam and microphone, as well as go over any stimuli/layouts as you
    need.
  </li>
)

const NoGoingBack = () => (
  <li>
    Once respondent onboarding has begun, we won't be able to move to other
    layouts to review stimuli without the respondents seeing it as well.
  </li>
)

const NoGoingBackBreakouts = () => (
  <li>
    Should breakout rooms be requested and on, we won't have access to any
    layouts until the breakout rooms have been turned off.
  </li>
)

const DoNotEnable = () => (
  <li>
    Do{" "}
    <strong>
      <u>not</u>
    </strong>{" "}
    enable your webcam or microphone. They are off by default so you won't need
    to do anything on arrival.
  </li>
)

const DoNotTouch = () => (
  <li>
    Do{" "}
    <strong>
      <u>not</u>
    </strong>{" "}
    advance any slides or attempt to interact with any stimuli on-screen. Doing
    so will show changes for everyone in the room and will disrupt the
    discussion.
  </li>
)

const BackroomChat = () => (
  <li>
    There will be a "backroom chatbox" available to use at all times throughout
    the discussions located on the righthand side of your screen. Please use
    this to communicate amongst yourselves or if you require any technical
    support.
  </li>
)

const PleaseEnable = () => (
  <li>
    Once the meeting host has admitted you into the room, you must enable your
    webcam and microphone. To do this, you will click the webcam and microphone
    icons at the top of the page so they turn from white to green. Click to
    "Allow" permission to these devices if necessary.
  </li>
)

const ParticipantChat = () => (
  <li>
    A chat box will be provided during onboarding for in-room support, as well
    as a live technician. Please make use of either if you're having any
    technical difficulties.
  </li>
)

const Phone = () => (
  <li>
    Please have your phone with you at all times as there may be a need for you
    to contact us, or for our technician to contact you.
  </li>
)

export {
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
}
