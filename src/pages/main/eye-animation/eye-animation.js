const SELECTORS = {
  main: {
    section: ".join-us-main",
    content: ".join-us-main__content",
  },
  cards: {
    scrollableText: ".join-us-card-5__scrollable-text",
  },
};

gsap.to(SELECTORS.main.content, {
  yPercent: 100,
  ease: "none",
  scrollTrigger: {
    trigger: SELECTORS.main.section,
    scrub: true,
  },
});

const scrollableText = document.querySelector(SELECTORS.cards.scrollableText);
const scrollableTextWidth = scrollableText.getBoundingClientRect().width;

gsap.timeline({ repeat: -1 }).to(SELECTORS.cards.scrollableText, {
  ease: "none",
  duration: 10,
  transform: `translateX(-${scrollableTextWidth}px)`,
});
