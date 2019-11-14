import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["in town", "in the world", "better than life", "juicy as fuck","tasty"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
