import {
  changeColorToDark,
  changeColorToLight,
  NAVBAR_SELECTORS,
} from '../../components/navbar';

export const SELECTORS = {
  sectionInformation: ".about-section__information-wrapper",
  solutionsSection: ".section-solutions",
  exploreMoreSection: ".section-explore-more",
};

const enterInformationSectionTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: SELECTORS.sectionInformation,
    start: "top top-=70%",
    end: "top top-=73.33%",
    scrub: true,
  },
});

changeColorToDark(
    enterInformationSectionTimeline,
    "enter information section",
);

const leaveInformationSectionTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: SELECTORS.sectionInformation,
    start: "bottom top+=8.33%",
    end: "bottom top+=5%",
    scrub: true,
  },
});

changeColorToLight(
    leaveInformationSectionTimeline,
    "leave information section",
);

const enterEarthSectionTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: SELECTORS.solutionsSection,
    start: "top top-=30%",
    end: "top top-=33.33%",
    scrub: true,
  },
});

changeColorToDark(enterEarthSectionTimeline, "enter earth section");

const enterTalentsSectionTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: SELECTORS.exploreMoreSection,
    start: "top bottom-=25%",
    end: "top bottom-=28.33%",
    scrub: true,
  },
});

enterTalentsSectionTimeline.to(NAVBAR_SELECTORS.navbar, {
  opacity: 0,
});
