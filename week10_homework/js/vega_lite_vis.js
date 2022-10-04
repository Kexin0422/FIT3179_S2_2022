var spec = "js/symbol_map.vg.json";
var spec2 = "js/stacked_bar_charts.vg.json";


vegaEmbed('#symbol_map', spec).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#stacked_bar_charts', spec2).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
