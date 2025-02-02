import { useState } from 'react'
import "@fontsource/poppins"; // Defaults to 400 weight
import "@fontsource/poppins/500.css"; // Import specific weight
import "@fontsource/poppins/700.css"; // Bold version

import Navbar from './component/Header/Navbar.jsx';
import Transparent from './component/Skill-set/Transparent.jsx';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Transparent/>
    </>
  )
}

export default App
