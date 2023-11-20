const SELECTORS = {
  solutionsSection: ".section-solutions",
  solutionsHeader: ".solutions__header",
  teamSection: ".section-team",
  sliderArrow: ".splide__arrow",
  earthWrapper: ".earth-wrapper",
  earthAnimationWrapper: ".earth-animation-wrapper",
  textContainer: {
    first: ".earth-text-container__1",
    second: ".earth-text-container__2",
  },
  textRows: {
    first: ".earth-text-row__1",
    second: ".earth-text-row__2",
    third: ".earth-text-row__3",
    subtitle: ".earth__subtitle",
  },
  tooltip: ".earth__tooltip",
};

const showEarthTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: SELECTORS.solutionsSection,
    start: "top top-=25%",
    end: "top top-=100%",
    scrub: true,
  },
});

showEarthTimeline.add("show earth");

// Меняем цвет блока со слайдером
showEarthTimeline
.to(
    SELECTORS.solutionsSection,
    {
      backgroundColor: "#191A1A",
    },
    "show earth",
)
.to(
    SELECTORS.solutionsHeader,
    {
      color: "#FFFFFF",
    },
    "show earth",
)
.to(
    SELECTORS.sliderArrow,
    {
      backgroundColor: "#2F2F2F",
    },
    "show earth",
);

// Меняем цвет блока с планетой
showEarthTimeline
.from(
    SELECTORS.teamSection,
    {
      backgroundColor: "#FFFFFF",
    },
    "show earth",
)
.from(
    SELECTORS.earthWrapper,
    {
      opacity: 0,
    },
    "show earth",
);

const earthAnimationTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: SELECTORS.earthAnimationWrapper,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});

const animateTextEnter = (parent) => {
  earthAnimationTimeline
  .from(`${parent} > ${SELECTORS.textRows.first}`, {
    opacity: 0,
  })
  .from(
      `${parent} > ${SELECTORS.textRows.second}`,
      {
        opacity: 0,
        transform: "translate(0rem)",
      },
      "<+=25%",
  )
  .from(
      `${parent} > ${SELECTORS.textRows.third}`,
      {
        opacity: 0,
        transform: "translate(0rem)",
      },
      "<+=25%",
  )
  .from(`${parent} > ${SELECTORS.textRows.subtitle}`, {
    opacity: 0,
  });
};

const animateTextLeave = (parent) => {
  earthAnimationTimeline
  .to(`${parent} > ${SELECTORS.textRows.first}`, {
    opacity: 0,
  })
  .to(
      `${parent} > ${SELECTORS.textRows.second}`,
      {
        opacity: 0,
      },
      "<+=25%",
  )
  .to(
      `${parent} > ${SELECTORS.textRows.third}`,
      {
        opacity: 0,
      },
      "<+=25%",
  )
  .to(
      `${parent} > ${SELECTORS.textRows.subtitle}`,
      {
        opacity: 0,
      },
      ">-=75%",
  );
};

animateTextEnter(SELECTORS.textContainer.first);

earthAnimationTimeline.from(
    `${SELECTORS.tooltip}, .tooltip__dot`,
    {
      transform: "scale(0.5)",
      opacity: 0,
    },
    "<-=150%",
);

animateTextLeave(SELECTORS.textContainer.first);

earthAnimationTimeline.to(
    `${SELECTORS.tooltip}, .tooltip__dot`,
    {
      transform: "scale(0.5)",
      opacity: 0,
    },
    "<",
);

animateTextEnter(SELECTORS.textContainer.second);

const pathLines = Array.from(
    document.querySelectorAll(".earth-lines__svg path"),
);

pathLines.forEach((item) => {
  const length = item.getTotalLength().toFixed(3);

  item.style.strokeDasharray = length;
  item.style.strokeDashoffset = length;

  gsap.fromTo(
      item,
      { strokeDashoffset: length },
      {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: SELECTORS.earthAnimationWrapper,
          start: "center center-=25%",
          end: "bottom bottom+=50%",
          scrub: true,
        },
      },
  );
});

const circles = Array.from(
    document.querySelectorAll(".earth-lines__svg [id*=dot]"),
);

circles.forEach((item) => {
  gsap.fromTo(
      item,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: SELECTORS.earthAnimationWrapper,
          start: "bottom bottom+=50%",
          toggleActions: "play none none reverse",
        },
      },
  );
});
