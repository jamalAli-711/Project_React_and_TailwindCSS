import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Home} from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { AboutSection } from "./components/AboutSection"
import { SkillsSection } from "./components/SkillsSection"
import { Navbar } from "./components/Navbar"
import { ProjectsSection } from "./components/ProjectsSection"
import { Toaster } from "./components/ui/toaster"
import { Footer } from "./components/Footer"
import { ContactSection } from "./components/ContactSection"
import CVTemplate from "./pages/CVTemplate"
function App() {

  return (
    <>
   <BrowserRouter>
   <Toaster/>
    <Navbar/>
   <Routes>
    <Route  index path="/" element={<Home/>} />
    <Route  path="/about" element={<AboutSection/>} />
    <Route  path="/skills" element={<SkillsSection/>} />
    <Route  path="/projects" element={<ProjectsSection/>} />
    <Route  path="/contact" element={<ContactSection/>} />
    <Route  path="/cvi" element={<CVTemplate/>} />
    {/* <Route path="*" element={NotFound}/> */}
   </Routes>
   <Footer/>
   </BrowserRouter>

    </>
  )
}

export default App
