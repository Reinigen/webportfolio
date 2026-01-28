"use client";
import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import ClassNames from 'embla-carousel-class-names'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import '../../embla.css'
import { Badge } from 'react-bootstrap';

type Project = {
  title: string
  link: string
  description: string
  tags: string[]
  image: string
}

type PropType = {
  slides: Project[]
  options?: EmblaOptionsType
}

const EmblaCarousel = (props: PropType) => {
  const { slides, options } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 4000, stopOnInteraction: true }),
    ClassNames()
  ])

  useEffect(() => {
    if (!emblaApi) return
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    autoplay.play()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }
    
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  const currentProject = slides[selectedIndex]

  return (
    <section className="embla">
      <div className="embla__viewport justify-content-center" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((project, index) => (
            <div className="embla__slide" key={index}>
              {project.image && currentProject.link && (
                <>
                <a href={currentProject.link}  target="_blank"><Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="embla__slide"
                  style={{ objectFit: 'cover' }}
                /></a>
            
                
                </>
                
              )}
            </div>
          ))}
        </div>
      </div>

      {currentProject && currentProject.title &&  currentProject.link && (
        <div className="embla__project-info">
          <h3 className="text-danger mb-4 text-center"><a href={currentProject.link} className="text-danger p-2 text-decoration-none fs-1" target="_blank" rel="noopener noreferrer">{currentProject.title}</a></h3>
          <div className="embla__project-tags justify-content-center">
            {currentProject.tags.map((tag, index) => (
              <Badge pill key={index} bg='light' text='dark' className='fs-6'>{tag}</Badge>
            ))}
          </div>
          <p className="justify-content-center">{currentProject.description}</p>
          
          
           
        </div>
      )}

      
    </section>
  )
}

export default EmblaCarousel
