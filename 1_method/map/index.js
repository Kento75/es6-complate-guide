const images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' }
];

let heights = images.map((image) => {
  return image.height;
});

console.log(heights);