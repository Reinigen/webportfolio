import Contact from "./contact/contact";
import Projects from "./projects/page";
import Experience from "./experience/experience"
import WorkExperience from "./experience.json"
import { Rubik } from "next/font/google";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ['latin']
})

export default function Home() {
  const experienceData = WorkExperience;

  return (
    <section  id="landing" className="row text-light pt-5 px-1 px-md-5 d-flex flex-column flex-md-row">
    <div className="mt-5 mx-md-5 vh-100 justify-content-center align-items-center fs-4">
      Hello! My Name is
      <h1 className={`${rubik.variable} text-danger h1`}>RED CRYSTAL</h1>
      Full Stack Web Development, Data Analytics & Game Development
      
      <div className="pt-3 fs-2">

        <a href="#contact-form"
          ><i className="p-2 bi bi-envelope-fill text-danger" /></a>
        <a href="https://www.linkedin.com/in/raymundcrystal"
          ><i className="p-2 bi bi-linkedin text-danger" /></a>
        <a href="https://github.com/Reinigen"
          ><i className="p-2 bi bi-github text-danger" /></a>
      </div>
      <div className="my-5 d-flex justify-content-center">
        <a
          href="#projects"
          className="btn btn-danger rounded-pill fs-4 px-5 py-3 text-light text-uppercase fw-bold"
        >
          View Featured Projects
        </a>
      </div>
    </div>
    <Experience experience={experienceData} />
    <Projects />
    <Contact />
    </section>
   
    
  )
}