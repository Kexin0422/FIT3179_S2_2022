var spec2 = "js/choropleth_map.vg.json";
vegaEmbed('#choropleth_map', spec2).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);