const SELECTORS = {
  cards: {
    one: "#card__one",
    two: "#card__two",
    three: "#card__three",
    four: "#card__four",
  },
};

gsap
.timeline({
  scrollTrigger: {
    trigger: SELECTORS.cards.one,
    start: "top center",
    end: "top center-=33.33%",
    scrub: true,
  },
})
.fromTo(
    `${SELECTORS.cards.one} .card-one__icon`,
    {
      transform: "rotate(-55deg)",
    },
    {
      marginRight: "0.5rem",
      transform: "rotate(0deg)",
    },
);

const threeCardTl = gsap.timeline({
  scrollTrigger: {
    trigger: SELECTORS.cards.three,
    start: "top center",
    end: "top center-=33.33%",
    scrub: true,
  },
});

threeCardTl.add("move-boxes");

threeCardTl.fromTo(
    `${SELECTORS.cards.three} .box-item__2`,
    {
      transform: "translate(-1.1rem, -0.475rem)",
    },
    {
      transform: "translate(0rem, 0rem)",
    },
    "move-boxes",
);

threeCardTl.from(
    `${SELECTORS.cards.three} .box-item__3`,
    {
      transform: "translate(-2.4rem, -1rem)",
    },
    "move-boxes",
);

threeCardTl.from(
    `${SELECTORS.cards.three} .box-item__4`,
    {
      transform: "translate(-4rem, -1.75rem)",
    },
    "move-boxes",
);
