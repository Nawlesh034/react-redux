import { useState } from 'react'
import "@fontsource/poppins"; // Defaults to 400 weight
import "@fontsource/poppins/500.css"; // Import specific weight
import "@fontsource/poppins/700.css"; // Bold version

import Header from './component/Header/Header.jsx'
import TransparentPop from './component/skill-set/TransparentPop.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <TransparentPop/>
    </>
  )
}

export default App
