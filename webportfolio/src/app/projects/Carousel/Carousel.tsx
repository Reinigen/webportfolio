"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Badge } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import '../../embla.css'

type Project = {
  title: string,
  link: string,
  description: string,
  tags: string[],
  image: string
}
type Projects = {
    projects:Project[]
}

const AddNewLine = (props:Project) => {
    const newText = props.description.split('\n').map((str:string, index:number) => (
    // Use a unique key for each element when mapping
    <p key={index}>{str}</p> 
  ));
  return newText
}

function ControlledCarousel(props: Projects) {
    const {projects} =props 
    const [index, setIndex] = useState(0);

  

  const handleSelect = (selectedIndex:number) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='embla'>
        <Carousel activeIndex={index} indicators={false} onSelect={handleSelect}>
            {projects.map((project, index) => (
                <Carousel.Item className='p-3 p-lg-5' key={index}>
                    <div className='embla__project-info align-items-center  mx-lg-5'>
                        <h3 className="text-danger mb-4 text-center"><a href={project.link} className="text-danger p-2 text-decoration-none fs-1" target="_blank" rel="noopener noreferrer">
                        <Image
                                className='text-wrap alt-text'
                                src={project.image}
                                alt={`${project.title} logo`}
                                width={50}
                                height={50}                 
                            /> {project.title}</a></h3>
                        <div className="embla__project-tags justify-content-center">
                            {project.tags.map((tag,index) => (<div key={index}>
                                <Badge pill key={index} bg='light' text='dark' className='fs-6'>{tag}</Badge>
                            </div>))}
                        </div>
                        <div>{AddNewLine(project)}</div>
                    </div>
                    
                </Carousel.Item>
            ))}
        
        </Carousel>
    </div>
    
  );
}

export default ControlledCarousel;