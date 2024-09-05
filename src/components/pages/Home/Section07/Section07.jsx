import React from 'react'
import { useRef, useEffect } from "react";
import "./Section07.css"

const Section07 = () => {

  const videoRef = useRef(null);
  const userInteracted = useRef(null);


  useEffect(() => {
    const videoElement = videoRef.current;

    const observerOptions = {
      root: null, // Use the viewport as the container
      rootMargin: '0px',
      threshold: 0.5, // Play when 50% of the video is visible
    };

    const handlePlayPause = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && userInteracted.current) {
          videoElement.play.catch((error) => {
            console.error('video play failed ', error)
          });
        } else {
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handlePlayPause, observerOptions);

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };


  }, [])

  const handleUserInteraction = () => {
    if (!userInteracted.current) {
      userInteracted.current = true;
    }
  };


  useEffect(() => {
    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('keydown', handleUserInteraction);

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
    };
  }, []);





  return (
    <>
      <div className='video-container'>


        {/* <video ref={videoRef} width="100%" height="100%" muted loop autoPlay controls>
          <source src="homePage.mp4" type="video/mp4" /> 
          </video> */}

        <div style={{ paddingTop: `56.25%`, position: `relative` }}>
          <iframe src="https://player.vimeo.com/video/967767213?muted=1&autoplay=1&loop=1&autopause=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{ position: `absolute`, top: `0`, left: `0`, width: `100%`, height: `100%` }} title="N&amp;F Truck" ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>

        {/* </video> */}

      </div>
    </>
  )
}

export default Section07