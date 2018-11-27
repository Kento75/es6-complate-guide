const images = [
  { height: 10, width: 30 },
  { height: 14, width: 40 },
  { height: 20, width: 60 }
];

const areas = [];

images.forEach(function(image) {
  areas.push(image.height * image.width);
})

console.log(areas);