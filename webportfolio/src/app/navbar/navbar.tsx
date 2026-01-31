"use client";
import { Inter } from "next/font/google";
const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin']
})

export default function Navbar(){
    return (    
        <nav id="siteNavbar"
      className={`${inter.variable} navbar-dark d-flex flex-row justify-content-between pt-3 ps-5 inter-bold sticky-top fs-5 text-uppercase`}
    >
      {/* <!-- Large Screen Navbar --> */}
      <div className="d-none d-lg-flex navbar" id="navbarNav">
        <a className="nav-item nav-link active text-light"
          aria-current="page"
          href="#landing"
          >Home</a>
          
        <a className="nav-item nav-link text-light" href="#experience">Experience</a>
        <a className="nav-item nav-link text-light" href="#projects">Projects</a>
        <a className="nav-item nav-link text-light" href="#contact-form">Contact Me!</a>
      </div>
      {/* <!-- Small Screen Navbar --> */}
      <div className="d-lg-none container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <button
              className="btn fs-4 mt-3 dropdown-toggle bg-transparent text-light"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Menu
            
            </button>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#landing">Home</a></li>
              <li><a className="dropdown-item" href="#experience">Experience</a></li>
              <li><a className="dropdown-item" href="#projects">Projects</a></li>
              <li><a className="dropdown-item" href="#contact-form">Contact Me!</a></li>
            </ul>
          </li>
        </ul>
      </div>

      <a className="navbar-item pe-5 pt-3 nav-link text-danger" href="https://drive.google.com/file/d/1hVOCzSyuqmyUVzEBLP9UFzgbKFgZVTEj/view?usp=sharing">
        View My Resume
      </a>
    </nav>
    );
}