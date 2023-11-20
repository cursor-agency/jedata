const SELECTORS = {
  section: ".about-section__information",
  darkSection: ".about-section__information--dark",
  sectionBackground: ".information__background",
  sectionWrapper: ".about-section__information-wrapper",
  sectionHaeder: ".information__header",
  sectionLastHeader: ".information__last-header",
  cardsContainer: ".about-section__cards",
  cubeComposition: ".information__cube-composition",
  cubeGreenLine: ".green-line",
};

// Увеличение фона
gsap
.timeline({
  scrollTrigger: {
    trigger: SELECTORS.sectionBackground,
    start: "top top+=20%",
    end: "top top",
    scrub: true,
  },
})
.fromTo(
    SELECTORS.sectionBackground,
    {
      transform: "scale(0.95)",
      borderRadius: "1.5rem",
    },
    {
      transform: "scale(1)",
      borderRadius: "0rem",
    },
);

// Смена цвета секции
gsap
.timeline({
  scrollTrigger: {
    trigger: SELECTORS.darkSection,
    start: "top top",
    end: () => {
      return `+=${
          document.querySelector(SELECTORS.darkSection).offsetHeight
      }`;
    },
    scrub: true,
  },
})
.fromTo(
    SELECTORS.darkSection,
    {
      clipPath: "inset(100% 0 0 0)",
    },
    {
      clipPath: "inset(0% 0 0 0)",
    },
);

// Уменьшение заголовка и прозрачности куба
gsap
.timeline({
  scrollTrigger: {
    trigger: SELECTORS.cardsContainer,
    start: "top bottom",
    end: "top bottom-=40%",
    scrub: true,
  },
})
.to(SELECTORS.sectionHaeder, {
  transform: "scale(0.7) translateY(-50%)",
})
.to(
    SELECTORS.cubeComposition,
    {
      opacity: ".3",
    },
    0,
);

// Смещение заголовка
gsap
.timeline({
  scrollTrigger: {
    trigger: SELECTORS.cardsContainer,
    start: "top top+=50%",
    end: "top top-=50%",
    scrub: true,
  },
})
.to(SELECTORS.sectionHaeder, {
  transform: "scale(0.7) translateY(-100vh)",
});

const animateLines = () => {
  const pathLines = Array.from(
      document.querySelectorAll(
          `${SELECTORS.cubeComposition} ${SELECTORS.cubeGreenLine}`,
      ),
  );

  pathLines.forEach((item, index) => {
    const length = item.getTotalLength().toFixed(3);

    item.style.strokeDasharray = length;
    item.style.strokeDashoffset = length;

    gsap.fromTo(
        item,
        { strokeDashoffset: length * 2 },
        {
          strokeDashoffset: 0,
          repeat: -1,
          duration: 5.32,
          delay: (pathLines.length - index) * 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: SELECTORS.cardsContainer,
            toggleActions: "play none none none",
          },
        },
    );
  });
};

animateLines();

// Увеличение прозрачности куба и появление заголовка
gsap
.timeline({
  scrollTrigger: {
    trigger: SELECTORS.cardsContainer,
    start: "bottom top+=40%",
    end: "bottom top-=40%",
    scrub: true,
  },
})
.to(SELECTORS.cubeComposition, {
  opacity: "1",
})
.from(SELECTORS.sectionLastHeader, {
  transform: "scale(0.7)",
  opacity: 0,
})
.to(SELECTORS.sectionLastHeader, {
  transform: "scale(1)",
  opacity: 1,
});

gsap
.timeline({
  scrollTrigger: {
    trigger: SELECTORS.cardsContainer,
    start: "bottom top+=20%",
    end: "bottom top-=60%",
    scrub: true,
  },
})
.from(`${SELECTORS.cubeComposition} ${SELECTORS.cubeGreenLine}`, {
  opacity: 0,
});
// Уменьшение фона
const downscaleBgTl = gsap.timeline({
  scrollTrigger: {
    trigger: SELECTORS.sectionWrapper,
    start: "bottom bottom-=20%",
    end: "bottom top",
    scrub: true,
  },
});

downscaleBgTl.fromTo(
    SELECTORS.sectionBackground,
    {
      transform: "scale(1)",
      borderRadius: "0rem",
    },
    {
      transform: "scale(0.95)",
      borderRadius: "1.5rem",
    },
    "downscle bg",
);

downscaleBgTl.fromTo(
    SELECTORS.cubeComposition,
    {
      transform: "scale(0.95)",
    },
    {
      transform: "scale(0.8)",
    },
    "downscle bg",
);
