import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["in town", "tasty", "better than life", "juicy as fuck", "in the world"],
    typeSpeed: 70,
    loop: true
  });
}

export { loadDynamicBannerText };
