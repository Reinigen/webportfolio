import { EmblaViewportRefType } from "embla-carousel-react";
import projects from "../projects.json"
import EmblaCarousel from "./Carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import ControlledCarousel from "./Carousel/Carousel";



export default function Projects(){
    
    const projectData = projects;
    const OPTIONS: EmblaOptionsType = { loop: true }
    

    return(
        <div id="projects" className="justify-content-center min-vh-100 my-5">
            <h1 className="h2 mb-3 text-center text-light">Featured Projects</h1>
            {/* <EmblaCarousel slides={projects} options={OPTIONS} /> */}
            <ControlledCarousel projects={projects} />
        </div>
    )
}   