"use client";
import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import ClassNames from 'embla-carousel-class-names'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import '../../embla.css'
import { Badge } from 'react-bootstrap';
import { DotButton, useDotButton } from './EmblaCarouselDotButton'

type Project = {
  title: string,
  link: string,
  description: string,
  tags: string[],
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
  const { selectedIndexDot, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  return (
    <section className="embla">
   
      <div  className="embla__viewport justify-content-center" ref={emblaRef}>
        <div className="embla__container ">
          {slides.map((project, index) => (
            <div className={"embla__slide"} key={index}>
              {currentProject && currentProject.title &&  currentProject.link && (
                <div className="embla__project-info" key={index}>
                  <h3 className="text-danger mb-4 text-center"><a href={currentProject.link} className="text-danger p-2 text-decoration-none fs-1" target="_blank" rel="noopener noreferrer">
                    <Image
                          className='text-wrap alt-text'
                          src={currentProject.image}
                          alt={`${currentProject.title} logo`}
                          width={50}
                          height={50}                 
                        /> {currentProject.title}</a></h3>
                  <div className="embla__project-tags justify-content-center">
                    {currentProject.tags.map((tag, index) => (
                      <Badge pill key={index} bg='light' text='dark' className='fs-6'>{tag}</Badge>
                    ))}
                  </div>
                  <p className="justify-content-center">{currentProject.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
         
      </div>
      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndexDot ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
      
    </section>
  )
}

export default EmblaCarousel
