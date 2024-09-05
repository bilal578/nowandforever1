import React, { useEffect } from 'react'
import "./mob_slider.css"
import { Helmet } from 'react-helmet';
import { $ } from 'jquery'
import { Draggable } from 'leaflet';
import {TweenMax, TimelineMax} from 'gsap';

const mob_slider = () => {
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js";
    //     script.async = true;
    //     document.body.appendChild(script);

    //     const script2 = document.createElement('script');
    //     script2.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/152635/ThrowPropsPlugin.min.js";
    //     script2.async = true;
    //     document.body.appendChild(script2);

    //     const script3 = document.createElement('script');
    //     script3.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/utils/Draggable.min.js";
    //     script3.async = true;
    //     document.body.appendChild(script3);

    //     const script4 = document.createElement('script');
    //     script4.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/152635/CSSPlugin.js";
    //     script4.async = true;
    //     document.body.appendChild(script4);

    //     const script5 = document.createElement('script');
    //     script5.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/152635/codepen-ga.js";
    //     script5.async = true;
    //     document.body.appendChild(script5);

    //     return () => {
    //         document.body.removeChild(script);
    //         document.body.removeChild(script2);
    //         document.body.removeChild(script3);
    //         document.body.removeChild(script4);
    //         document.body.removeChild(script5);
    //     }
    // }, []);

    var wheel = Draggable.create("#wheel", {
        type: "rotation",
        throwProps: true,
        snap: function (endValue) {
            return Math.round(endValue / 90) * 90;
        },
        onDrag: function () { },
        onThrowComplete: function () {
            dragActive()
        }
    });

    TweenMax.set('#wheel li:not(.active) .details > *', {
        opacity: 0,
        y: -10
    })

    // Calculate which product is active
    function dragActive() {
        var rot = wheel[0].rotation / 360
        var decimal = rot % 1
        var sliderLength = $('#wheel li').length
        var tempIndex = Math.round(sliderLength * decimal)
        var index

        if (rot < 0) {
            index = Math.abs(tempIndex)
        } else {
            index = sliderLength - tempIndex
        }

        if (decimal === 0) {
            index = 0
        }

        TweenMax.staggerTo('#wheel li.active .details > *', 0.6, {
            opacity: 0,
            y: -10
        }, 0.1)

        $('#wheel li.active').removeClass('active')
        $($('#wheel li')[index]).addClass('active')

        TweenMax.staggerTo('#wheel li.active .details > *', 0.6, {
            opacity: 1,
            y: 0
        }, 0.1)

    }

    // Tween rotation
    function rotateDraggable(deg, callback) {
        var rot = wheel[0].rotation
        var tl = new TimelineMax()

        tl
            .to('#wheel', .5, {
                rotation: rot + deg,
                onComplete: function () {
                    callback()
                }
            });

        wheel[0].rotation = rot + deg
    }

    // Handlers
    function nextHandler() {
        var current = $('#wheel li.active')
        var item = current + 1
        if (item > $('#wheel li').length) {
            item = 1
        }
        rotateDraggable(360 / $('#wheel li').length, dragActive);
    }

    function prevHandler() {
        var current = $('#wheel li.active')
        var item = current - 1
        if (item > 1) {
            item = $('#wheel li').length
        }
        rotateDraggable(-360 / $('#wheel li').length, dragActive);
    }

    $('.next').on('click', nextHandler);
    $('.prev').on('click', prevHandler);

    var square = '<svg x="0px" y="0px" width="1200px" height="600px" viewBox="0 0 1200 600"><rect x="0.002" y="0.499" width="1200" height="600"/></svg>'
    return (
        <>
            <Helmet>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/foundation/6.1.1/foundation.min.css" />
                <link rel="stylesheet" href="https://cdn.snipcart.com/themes/base/snipcart.min.css" />
                {/* <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script> */}
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>
                <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/152635/ThrowPropsPlugin.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/utils/Draggable.min.js"></script>
                <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/152635/CSSPlugin.js"></script>
                <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/152635/codepen-ga.js"></script>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            </Helmet>
            <svg class="svg-mask" width="1200px" height="600px" viewBox="0 0 1200 600">
                <defs>
                    <clipPath id="quarterMask">
                        <path d="M299.001,26.649L0,325.65c330.267,330.268,865.736,330.268,1196.004,0L897.003,26.649
         C731.868,191.784,464.136,191.784,299.001,26.649z" />
                    </clipPath>
                </defs>
            </svg>
            <div class="header"></div>
            <div class="content">
                <ul class="featured-slider" id="wheel">
                    <li class="active">
                        <div class="image">
                            <div class="details">
                                <h1 class="title">Lorem Ipsum</h1>
                                <hr class="small" />
                                <h6 class="roles">Videography / Editing</h6>
                                <a href="#" class="button">View Project</a>
                            </div>
                            <img src="https://unsplash.it/1200/900" alt="" />
                        </div>
                    </li>
                    <li>
                        <div class="image">
                            <div class="details">
                                <h1 class="title">Lorem Ipsum</h1>
                                <hr class="small" />
                                <h6 class="roles">Videography / Editing</h6>
                                <a href="#" class="button">View Project</a>
                            </div>
                            <img src="https://unsplash.it/1200/901" alt="" />
                        </div>
                    </li>
                    <li>
                        <div class="image">
                            <div class="details">
                                <h1 class="title">Lorem Ipsum</h1>
                                <hr class="small" />
                                <h6 class="roles">Videography / Editing</h6>
                                <a href="#" class="button">View Project</a>
                            </div>
                            <img src="https://unsplash.it/1200/902" alt="" />
                        </div>
                    </li>
                    <li>
                        <div class="image">
                            <div class="details">
                                <h1 class="title">Lorem Ipsum</h1>
                                <hr class="small" />
                                <h6 class="roles">Videography / Editing</h6>
                                <a href="#" class="button">View Project</a>
                            </div>
                            <img src="https://unsplash.it/1200/903" alt="" />
                        </div>
                    </li>
                </ul>
            </div>

            <nav>
                <a class="prev">Prev</a>
                <a class="next">Next</a>
            </nav>
            <div id="pentitle" style="display: none;" data-title="29/52 - Circular Slider"></div>
        </>
    )
}

export default mob_slider