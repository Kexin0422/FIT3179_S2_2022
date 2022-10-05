var spec = "js/symbol_map.vg.json";
var spec2 = "js/stacked_bar_charts.vg.json";
var spec3 = "js/scatterplot_rural.vg.json";
var spec4 = "js/scatterplot_urban.vg.json";

vegaEmbed('#symbol_map', spec).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#stacked_bar_chart', spec2).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#scatterplot_rural', spec3).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#scatterplot_urban', spec4).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

