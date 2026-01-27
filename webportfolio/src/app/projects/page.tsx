import { EmblaViewportRefType } from "embla-carousel-react";
import projects from "../projects.json"
import EmblaCarousel from "./Carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";



export default function Projects(){
    
    const projectData = projects;
    const OPTIONS: EmblaOptionsType = { loop: true }
    

    return(
        <div id="projects" className="justify-content-center vh-100 my-5">
            <h2 className="text-danger">Featured Projects</h2>
            <EmblaCarousel slides={projects} options={OPTIONS} />
        </div>
    )
}   