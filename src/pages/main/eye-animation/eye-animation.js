const getOffset = (node) => {
  const rect = node.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX,
  };
};

const getSize = (node) => {
  const rect = node.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
  };
};

const setRotation = (node, size, e) => {
  const x = getOffset(node).left + size.width / 2;
  const y = getOffset(node).top + size.height / 2;

  const rad = Math.atan2(e.pageX - x, e.pageY - y);
  const rot = rad * (180 / Math.PI) * -1 + 180;

  node.style.cssText = `
      -webkit-transform: rotate(${rot}deg);
      -moz-transform: rotate(${rot}deg);
      -ms-transform: rotate((${rot}deg);
      transform: rotate(${rot}deg);
    `;
};

window.addEventListener("DOMContentLoaded", () => {
  const [eyeOne, eyeTwo] = document.querySelectorAll(".animated-eye-container");
  const size = getSize(eyeOne);

  window.addEventListener("mousemove", (e) => {
    setRotation(eyeOne, size, e);
    setRotation(eyeTwo, size, e);
  });
});
