import React from 'react'
import ASScroll from '@ashthornton/asscroll';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {gsap} from 'gsap';
import { useMediaQuery } from '@src/_hooks';

interface ASScrollProps {
    children? : any,
    isBlog: Boolean,
}

const ASScrollContainer : React.FC<ASScrollProps> = ({children, isBlog}) => {
    
    const isMobile = useMediaQuery();
    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        const asscroll = new ASScroll({
            customScrollbar: true
        });
            
           ScrollTrigger.defaults({
               scroller: asscroll.Scroll.scrollContainer
           })
           
           ScrollTrigger.scrollerProxy(asscroll.Scroll.scrollContainer, {
               scrollTop(value) {
                   return arguments.length ? asscroll.scrollTo(value) : -asscroll.smoothScrollPos;
               }
           });
           
           asscroll.on("raf", ScrollTrigger.update);
           ScrollTrigger.addEventListener("refresh", () => asscroll.onResize());

        if (isMobile){
            gsap.to(
                ['.heading__inner', '.name-container', 
                '.intro__occupation', '.slide', 
                '.col__content-title', '.line__inner', '.col__content-txt', '.slide-link', '.slide__scroll-link'],
                {clearProps: 'all'}
            );
        }
        else {
            //Section heading
            gsap.set('.heading__inner', { y: '-3vh' })
            gsap.to(
                '.heading__inner',
                {
                    y: "3vh",
                    scrollTrigger: {
                        trigger: '.header__container',
                        scrub: true,
                        start: "top bottom",
                    },
                    ease: "none"
                }
            );


            //intro header
            //intro
            const stl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".intro",
                    scrub: 1,
                    start: "top bottom",
                    end: "bottom top",
                    markers: false
                }
            });

            stl
                .to(".name-container", {
                    x: 400,
                    ease: "power4.in",
                    duration: 3
                })
                .to(
                    ".intro__occupation",
                    {
                        y: 100,
                        ease: "power4.in",
                        duration: 3
                    },
                    0
                );

            // sliders
            const slides = gsap.utils.toArray('.slide');
            slides.forEach((slide: any, i) => {
                let tl = gsap.timeline({
                  scrollTrigger: {
                    trigger: slide,
                    start: "10% 50%",
                    scrub: 1,
                    markers: false // position of trigger meets the scroller position
                  }
                });
            
                tl.from(slide.querySelectorAll(".col__content-title"), {
                  ease: "power4",
                  y: "+=5vh",
                  duration: 2.5
                })
                  .from(
                    slide.querySelectorAll(".line__inner"),
                    {
                      y: 200,
                      duration: 2,
                      ease: "power4",
                      stagger: 0.1
                    },
                    0
                  )
                  .from(
                    slide.querySelectorAll(".col__content-txt"),
                    {
                      x: 100,
                      y: 50,
                      opacity: 0,
                      duration: 2,
                      ease: "power4"
                    },
                    0.4
                  )
                  .from(
                    slide.querySelectorAll(".slide-link"),
                    {
                      x: -100,
                      y: 100,
                      opacity: 0,
                      duration: 2,
                      ease: "power4"
                    },
                    0.3
                  )
                  .from(
                    slide.querySelectorAll(".slide__scroll-link"),
                    {
                      y: 200,
                      duration: 3,
                      ease: "power4"
                    },
                    0.4
                  )
                  .to(
                    slide.querySelectorAll(".slide__scroll-line"),
                    {
                      scaleY: 0.6,
                      transformOrigin: "bottom left",
                      duration: 2.5,
                      ease: "elastic(1,0.5)"
                    },
                    1.4
                  );
              });
                slides.forEach((slide: any, i) => {
                let imageWrappers = slide.querySelectorAll(".col__image-wrap");
            
                gsap.fromTo(
                  imageWrappers,
                  {
                    y: "-40vh"
                  },
                  {
                    y: "30vh",
                    scrollTrigger: {
                      trigger: slide,
                      scrub: true,
                      start: "top bottom", 
                    },
                    ease: "none"
                  }
                );
              });
        } 
        //   if(window.screen.width > 900){
        //        //heading
        //    gsap.set('.heading__inner', {y: '-3vh'})
        //    gsap.to(
        //      '.heading__inner',
        //      {
        //        y: "3vh",
        //        scrollTrigger: {
        //          trigger: '.header__container',
        //          scrub: true,
        //          start: "top bottom",
        //        },
        //        ease: "none"
        //      }
        //    );

        //    //slides
        //    const slides = gsap.utils.toArray('.slide');
        //    slides.forEach((slide: any, i) => {
        //        let tl = gsap.timeline({
        //          scrollTrigger: {
        //            trigger: slide,
        //            start: "10% 50%",
        //            scrub: 1,
        //            markers: false // position of trigger meets the scroller position
        //          }
        //        });
           
        //        tl.from(slide.querySelectorAll(".col__content-title"), {
        //          ease: "power4",
        //          y: "+=5vh",
        //          duration: 2.5
        //        })
        //          .from(
        //            slide.querySelectorAll(".line__inner"),
        //            {
        //              y: 200,
        //              duration: 2,
        //              ease: "power4",
        //              stagger: 0.1
        //            },
        //            0
        //          )
        //          .from(
        //            slide.querySelectorAll(".col__content-txt"),
        //            {
        //              x: 100,
        //              y: 50,
        //              opacity: 0,
        //              duration: 2,
        //              ease: "power4"
        //            },
        //            0.4
        //          )
        //          .from(
        //            slide.querySelectorAll(".slide-link"),
        //            {
        //              x: -100,
        //              y: 100,
        //              opacity: 0,
        //              duration: 2,
        //              ease: "power4"
        //            },
        //            0.3
        //          )
        //          .from(
        //            slide.querySelectorAll(".slide__scroll-link"),
        //            {
        //              y: 200,
        //              duration: 3,
        //              ease: "power4"
        //            },
        //            0.4
        //          )
        //          .to(
        //            slide.querySelectorAll(".slide__scroll-line"),
        //            {
        //              scaleY: 0.6,
        //              transformOrigin: "bottom left",
        //              duration: 2.5,
        //              ease: "elastic(1,0.5)"
        //            },
        //            1.4
        //          );
        //      });
        //        slides.forEach((slide: any, i) => {
        //        let imageWrappers = slide.querySelectorAll(".col__image-wrap");
           
        //        gsap.fromTo(
        //          imageWrappers,
        //          {
        //            y: "-40vh"
        //          },
        //          {
        //            y: "30vh",
        //            scrollTrigger: {
        //              trigger: slide,
        //              scrub: true,
        //              start: "top bottom", 
        //            },
        //            ease: "none"
        //          }
        //        );
        //      });

        //      //intro
        //      const stl = gsap.timeline({
        //         scrollTrigger: {
        //           trigger: ".intro",
        //           scrub: 1,
        //           start: "top bottom",
        //           end: "bottom top",
        //           markers: false
        //         }
        //       });
            
        //       stl
        //         .to(".name-container", {
        //           x: 400,
        //           ease: "power4.in",
        //           duration: 3
        //         })
        //         .to(
        //           ".intro__occupation",
        //           {
        //             y: 100,
        //             ease: "power4.in",
        //             duration: 3
        //           },
        //           0
        //         );
        //   }
       
           asscroll.enable();
       
    }, [isMobile])
    return (
        <div className={isBlog ? "layout-container" : 'asscroll-container'}>
            <div className="layout__inner">
                {children}
            </div>
        </div>
    )
}


export default ASScrollContainer
