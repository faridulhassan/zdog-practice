var illo = new Zdog.Illustration({
  element: '#canvas',
  dragRotate: true,
  zoom: 1,
});
var circle = new Zdog.Ellipse({
  addTo: illo,
  stroke: 20,
  diameter: 80,
  color: '#ff47ff',
  // stroke: false,
  // fill: true,
  translate: {x:50}
});
function animate() {
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}
animate();