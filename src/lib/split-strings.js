export const splitStrings = (selector) => {
  const elements = document.querySelectorAll(selector);
  elements?.forEach(node => {
    const words = node.textContent.split(' ');
    words?.forEach(word => {
      console.log(word);
    })
  });
}
