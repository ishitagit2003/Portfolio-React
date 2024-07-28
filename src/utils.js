export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};
//construct abs path of imgs