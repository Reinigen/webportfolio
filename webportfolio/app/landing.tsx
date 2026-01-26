export default function Landing(){
    return(
        
        <div className="my-5">
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
              <a className="nav-link text-dark" href="#projects">
                View Featured Projects
              </a>
            </button>
          </div>
        </div>
    )
}