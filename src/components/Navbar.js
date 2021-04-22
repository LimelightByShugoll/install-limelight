import { useState } from "react"
import logo from "../assets/images/limelight-logo.png"

const Navbar = () => {
  const [help, setHelp] = useState(false)

  return (
    <nav>
      <a
        href="https://limelightbyshugoll.com"
        rel="noreferrer noopener"
        target="_blank"
      >
        <img src={logo} alt="Limelight by Shugoll Logo" />
      </a>
      <button className="btn danger" onClick={() => setHelp(!help)}>
        {help ? "Close" : "Help"}
      </button>
      <div className={help ? "" : "hidden"}>
        <p style={{ margin: "10px 0" }}>
          Support number: <span className="important">240-380-1505</span>
        </p>
        <p style={{ margin: "10px 0" }}>
          Support email:{" "}
          <a href="mailto:techsupport@limelightbyshugoll.com?subject=Adobe Connect Installation Help - General">
            techsupport@limelightbyshugoll.com
          </a>
        </p>
      </div>
    </nav>
  )
}

export default Navbar
