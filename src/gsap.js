import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);

window.gsap = gsap;

new SplitType('[animate]', {
  types: 'words',
  tagName: 'span',
})

gsap.from('[animate] .word', {
  y: '100%',
  opacity: 1,
  duration: 0.3,
  ease: 'power1.out',
  stagger: 0.025,

  scrollTrigger: {
    trigger: '[animate]',
    start: 'top center',

  }
});
