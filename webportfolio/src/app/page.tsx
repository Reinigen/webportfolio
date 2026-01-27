import Link from "next/link";
import Contact from "./contact/contact";
import Projects from "./projects/page";

export default function Home() {
  return (
    <section  id="landing" className="row text-light pt-5 px-5 d-flex flex-column flex-md-row">
    <div className="my-5 vh-100 justify-content-center">
      Hello! My Name is
      <h1 className="text-danger">RED CRYSTAL</h1>
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
        <button className="btn-danger">
          <Link href="#projects" className="nav-link rounded-pill text-dark" > View Featured Projects </Link>
        </button>
      </div>
    </div>
    <Projects />
    <Contact />
    </section>
   
    
  )
}