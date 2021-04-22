import { Component } from "react"
import { Redirect } from "react-router-dom"
import { isMobile } from "react-device-detect"
import { Navbar, StepZero, StepOne, StepTwo, StepThree } from "../components"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 0,
      os: "unknown",
      type: this.props.match.params.type,
      appType: "app",
    }
  }

  componentDidMount() {
    if (navigator.appVersion.indexOf("Win") !== -1) {
      this.setState({ os: "win" })
    } else if (navigator.appVersion.indexOf("Mac") !== -1) {
      this.setState({ os: "mac" })
    } else {
      this.setState({ os: "unsupported" })
    }
  }

  setStep = step => this.setState({ step })

  setAppType = appType => this.setState({ appType })

  render() {
    const { step, os, type, appType } = this.state
    const { setStep, setAppType } = this

    return !["c", "p"].includes(type) ? (
      <Redirect to="/" />
    ) : (
      <div id="home" className="page c-flex perfect-center">
        <Navbar />
        {isMobile ? (
          <div
            className="step c-flex perfect-center center"
            style={{ maxWidth: "80%" }}
          >
            This website is unavailable on mobile devices. Please visit again
            through a web browser on a laptop or desktop.
          </div>
        ) : (
          [
            <StepZero setStep={setStep} />,
            <StepOne
              setStep={setStep}
              os={os}
              setAppType={setAppType}
              type={type}
            />,
            <StepTwo setStep={setStep} type={type} />,
            <StepThree
              type={type}
              appType={appType}
              jobNumber={this.props.match.params.jobNumber}
            />,
          ][step]
        )}
      </div>
    )
  }
}

export default Home
