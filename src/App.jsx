// import { useState } from 'react'
import "./styles/style.scss"
import { About, Blogs, Home, Pricing, Trainers } from "./sections"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer/Footer"



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <main className="body">
        <Navbar />
        <section>
          <Home />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Pricing />
        </section>
        <section>
          <Trainers />
        </section>
        <section>
          <Blogs />
        </section>
        <Footer />
      </main>
    </>
  )
}

export default App
