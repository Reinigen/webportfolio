"use client";
import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'
import ClassNames from 'embla-carousel-class-names'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import '../../embla.css'

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

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    autoplay.stop()
  }, [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

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
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((project, index) => (
            <div className="embla__slide" key={index}>
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="embla__slide__image"
                  style={{ objectFit: 'cover' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>

      {currentProject && currentProject.title && (
        <div className="embla__project-info">
          <h3 className="embla__project-title">{currentProject.title}</h3>
          <p className="embla__project-description">{currentProject.description}</p>
          <div className="embla__project-tags">
            {currentProject.tags.map((tag, index) => (
              <span key={index} className="embla__project-tag">{tag}</span>
            ))}
          </div>
          {currentProject.link && (
            <a href={currentProject.link} className="embla__project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          )}
        </div>
      )}

      <div className="embla__live-region" />
    </section>
  )
}

export default EmblaCarousel
