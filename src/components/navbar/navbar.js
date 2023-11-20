import {NAVBAR_SELECTORS} from './index';

export const SELECTORS = {
  navbar: ".navigation-bar",
  navbarIn: ".navigation-bar__in",
  navbarLink: ".navigation-bar__link-item",
  navbarLogo: ".navigation-bar__logo",
  scrollableText: ".navigation-bar__horizontal-scroll-text",
};

export const changeColorToDark = (timeline, animationName) => {
  timeline.add(animationName);

  timeline.to(
      `${SELECTORS.navbarLink}, ${SELECTORS.navbarLogo}, ${SELECTORS.scrollableText}`,
      {
        color: "#FFFFFF",
      },
      animationName,
  );

  timeline.to(
      SELECTORS.navbarIn,
      {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
      },
      animationName,
  );
};

export const changeColorToLight = (timeline, animationName) => {
  timeline.add(animationName);

  timeline.to(
      `${SELECTORS.navbarLink}, ${SELECTORS.navbarLogo}, ${SELECTORS.scrollableText}`,
      {
        color: "#000000",
      },
      animationName,
  );

  timeline.to(
      SELECTORS.navbarIn,
      {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      },
      animationName,
  );
};

window.addEventListener("DOMContentLoaded", () => {
  const scrollableTextRect = document
  .querySelector(SELECTORS.scrollableText)
  .getBoundingClientRect();

  gsap.timeline({ repeat: -1 }).to(SELECTORS.scrollableText, {
    ease: "none",
    duration: 10,
    transform: `translateX(-${scrollableTextRect.width}px)`,
  });
});
