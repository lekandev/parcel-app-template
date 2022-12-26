import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import barba from "@barba/core";

let scrollEl = document.querySelector("[data-scroll-container]");

const scroll = new LocomotiveScroll({
  el: scrollEl,
  smooth: true,
});

// barba page transitions
// barba.init({
//   transitions: [
//     {
//       name: "default-transition",
//       leave() {
//         // create your stunning leave animation here
//       },
//       enter() {
//         // create your amazing enter animation here
//       },
//     },
//   ],
// });

barba.init({
  transitions: [
    {
      name: "opacity-transition",
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
        });
      },
    },
  ],
});
