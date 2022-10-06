var spec = "js/symbol_map.vg.json";
var spec2 = "js/stacked_bar_charts.vg.json";
var spec3 = "js/dotplot_rural.vg.json";
var spec4 = "js/dotplot_urban.vg.json";
var spec5 = "js/line_chart.vg.json";
var spec6 = "js/circle_packing.vg.json";

vegaEmbed('#symbol_map', spec).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#stacked_bar_chart', spec2).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#dotplot_rural', spec3).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#dotplot_urban', spec4).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#line_chart', spec5).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#circle_packing', spec6).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);