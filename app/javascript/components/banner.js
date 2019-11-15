import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  const text1 = document.getElementById('banner-typed-text');
  console.log('TEXT BANNER', text1);
  const text2 = document.getElementById('banner-typed-text2');
  console.log('TEXT NEW', text2);

  if (text1) {
    new Typed('#banner-typed-text', {
      strings: ["in town", "tasty", "better than life", "juicy as fuck", "in the world"],
      typeSpeed: 70,
      loop: true
    });
  }
  if (text2) {
    new Typed('#banner-typed-text2', {
      strings: ["cocktail 🍹", "creation 😁", "piece of art 🎨", "favorite drink 😎", "the best drink to get wasted 🥴"],
      typeSpeed: 70,
      loop: true
    });
  }
}
export { loadDynamicBannerText };
