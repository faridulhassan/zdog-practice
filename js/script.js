var illo = new Zdog.Illustration({
  element: '#canvas',
  dragRotate: true,
  zoom: 1,
  // centered: false,
});
var circle = new Zdog.Ellipse({
  addTo: illo,
  stroke: 5,
  diameter: 40,
  color: '#ff47ff',
  translate: {z: 40},
  // stroke: false,
  // fill: true,
  // translate: {x: 160, y: 160}
});
circle.copy({
  color: '#4170ee',
  translate: {z: -100}
});
var rect = new Zdog.Rect({
  addTo: illo,
  translate: {z: -40},
  width: 120,
  height: 80,
  stroke: 7,
  color: 'red',
  // fill: true
});

function animate() {
  // illo.rotate.x += 0.02;
  illo.rotate.y += 0.02;
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}

animate();