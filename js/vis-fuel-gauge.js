
function renderFuelGauge(selector, mainData) {
  const container = d3.select(selector);
  container.selectAll("*").remove();

  const node = container.node();
  const width  = node.clientWidth  || 960;
  const height = node.clientHeight || 600;

  container
    .append("iframe")
    .attr("src", "fuel-gauge/index.html")  // relative path from root
    .attr("title", "Fuel Gauge")
    .style("width", "100%")
    .style("height", "100%")
    .style("border", "none")
    .style("display", "block");
}
