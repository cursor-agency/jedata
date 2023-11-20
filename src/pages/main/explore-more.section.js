const SELECTORS = {
  talentsSection: ".section-talents",
  exploreMoreSection: ".section-explore-more",
  exploreMoreContent: ".explore-more__content",
};

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: SELECTORS.exploreMoreSection,
    start: "top bottom-=25%",
    end: "bottom bottom",
    scrub: true,
  },
});

timeline.add("show explore section");

timeline.from(
    SELECTORS.exploreMoreSection,
    {
      backgroundColor: "#191a1a",
      color: "#ffffff",
    },
    "show explore section",
);

timeline.from(
    `${SELECTORS.exploreMoreSection} .button_accent`,
    {
      backgroundColor: "#ffffff",
      opacity: 0,
    },
    "show explore section",
);

timeline.from(
    SELECTORS.exploreMoreContent,
    {
      transform: "translateY(-80vh)",
    },
    "show explore section",
);

timeline.to(
    SELECTORS.talentsSection,
    {
      backgroundColor: "#ffffff",
    },
    "show explore section",
);
