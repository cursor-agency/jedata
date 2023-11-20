import {
  changeColorToDark,
  changeColorToLight,
  NAVBAR_SELECTORS,
} from '../../components/navbar';

export const SELECTORS = {
  aboutMainSection: ".about-main-section",
  aboutAwardsSection: ".about-awards-section",
  aboutWeArePartnerSection: ".we-are-partner-section",
  aboutOurStorySection: ".explore-our-story-section",
  aboutOurStorySections: {
    first: ".our-story__section-1",
  },
};

const partnerSectionTl = gsap.timeline({
  scrollTrigger: {
    trigger: SELECTORS.aboutWeArePartnerSection,
    start: "top top+=6.66%",
    end: "top top+=3.33%",
    scrub: true,
  },
});

changeColorToLight(partnerSectionTl, "enter partner section");

const ourStoryTl = gsap.timeline({
  scrollTrigger: {
    trigger: SELECTORS.aboutOurStorySection,
    start: "top top",
    end: "top top-=20%",
    scrub: true,
  },
});

changeColorToDark(ourStoryTl, "enter our story section");

const firstOurStorySectionTl = gsap.timeline({
  scrollTrigger: {
    trigger: SELECTORS.aboutOurStorySection,
    start: "top top-=50%",
    end: "top top-=70%",
    scrub: true,
  },
});

firstOurStorySectionTl.to(NAVBAR_SELECTORS.navbar, { opacity: 0 });
