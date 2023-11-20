import SplitType from 'split-type'

const SELECTORS = {
  section: ".explore-our-story-section",
  track: ".explore-our-story__track",
  card: ".our-story-card",
  line: "#horizontal-line",
};

gsap
.timeline({
  scrollTrigger: {
    trigger: SELECTORS.section,
    start: "top top",
    end: "top top-=20%",
    scrub: true,
  },
})
.to(SELECTORS.card, {
  width: "100%",
  height: "100%",
  borderRadius: 0,
});

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: SELECTORS.section,
    start: "top top-=70%",
    end: "bottom bottom",
    scrub: true,
  },
});

// timeline.fromTo(
//     SELECTORS.track,
//     {
//       transform: "translate3d(0%, 0px, 0px)",
//     },
//     {
//       transform: "translate3d(-100%, 0px, 0px)",
//     },
//     "horizontal scroll",
// );

new SplitType('[animate]', {
  types: 'lines, words',
  tagName: 'span',
});

const animatedNodes = document.querySelectorAll('[animate]');

animatedNodes.forEach((node, index) => {
  gsap.from(`[animate="${index+1}"] .word`, {
    y: '110%',
    opacity: 0,
    rotationZ: '10',
    duration: 0.5,
    ease: 'power1.out',
    stagger: 0.1,
    scrollTrigger: {
      containerAnimation: timeline,
      trigger: `[animate="${index+1}"]`,
      start: 'left right',
      markers: true,
    },
  }, "text animation")
})

