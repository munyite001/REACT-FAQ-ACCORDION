import "./App.css"
import { useState, useEffect } from "react"
import CARD from "./components/CARD"

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500)

  const topSectionStyles = {
    background: isMobile ? "url('../images/background-pattern-mobile.svg')" : "url('../images/background-pattern-desktop.svg')"
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerHeight <= 768)
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="app">
      <div className="top-section" style={topSectionStyles}></div>
      <CARD />
    </div>
  )
}

