import L from "leaflet"
import { Autolinker } from "autolinker"
import "leaflet-hash"
import "leaflet.control.layers.tree"


// Configure Map
export function configureMap(json_populations_1, json_brand_stores_2) {
    var map = L.map('map', {
        zoomControl:false, maxZoom:28, minZoom:1
    }).fitBounds([[-6.380150303943777,106.63099267751699],[-6.084317400593916,107.11228824891981]]);
    var hash = new L.Hash(map);
    map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
    var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
    // remove popup's row if "visible-with-data"
    function removeEmptyRowsFromPopupContent(content, feature) {
     var tempDiv = document.createElement('div');
     tempDiv.innerHTML = content;
     var rows = tempDiv.querySelectorAll('tr');
     for (var i = 0; i < rows.length; i++) {
         var td = rows[i].querySelector('td.visible-with-data');
         var key = td ? td.id : '';
         if (td && td.classList.contains('visible-with-data') && feature.properties[key] == null) {
             rows[i].parentNode.removeChild(rows[i]);
         }
     }
     return tempDiv.innerHTML;
    }
    // add class to format popup if it contains media
    function addClassToPopupIfMedia(content, popup) {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;
        if (tempDiv.querySelector('td img')) {
            popup._contentNode.classList.add('media');
                // Delay to force the redraw
                setTimeout(function() {
                    popup.update();
                }, 10);
        } else {
            popup._contentNode.classList.remove('media');
        }
    }
    // var zoomControl = L.control.zoom({
    //     position: 'topleft'
    // }).addTo(map);
    var bounds_group = new L.featureGroup([]);
    function setBounds() {
    }
    map.createPane('pane_OpenStreetMap_0');
    map.getPane('pane_OpenStreetMap_0').style.zIndex = 400;
    var layer_OpenStreetMap_0 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        pane: 'pane_OpenStreetMap_0',
        opacity: 1.0,
        attribution: '',
        minZoom: 1,
        maxZoom: 28,
        minNativeZoom: 0,
        maxNativeZoom: 19
    });
    layer_OpenStreetMap_0;
    map.addLayer(layer_OpenStreetMap_0);
    function pop_populations_1(feature, layer) {
        var popupContent = '<table>\
                <tr>\
                    <td colspan="2"><strong>province</strong><br />' + (feature.properties['province'] !== null ? autolinker.link(feature.properties['province'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <td colspan="2"><strong>city</strong><br />' + (feature.properties['city'] !== null ? autolinker.link(feature.properties['city'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <td colspan="2"><strong>population_total</strong><br />' + (feature.properties['population_total'] !== null ? autolinker.link(feature.properties['population_total'].toLocaleString()) : '') + '</td>\
                </tr>\
            </table>';
        var content = removeEmptyRowsFromPopupContent(popupContent, feature);
        layer.on('popupopen', function(e) {
            addClassToPopupIfMedia(content, e.popup);
        });
        layer.bindPopup(content, { maxHeight: 400 });
    }

    function style_populations_1_0(feature) {
        if (feature.properties['population_total'] >= 28925.000000 && feature.properties['population_total'] <= 685843.750000 ) {
            return {
            pane: 'pane_populations_1',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(255,248,41,1.0)',
            interactive: true,
        }
        }
        if (feature.properties['population_total'] >= 685843.750000 && feature.properties['population_total'] <= 1258383.750000 ) {
            return {
            pane: 'pane_populations_1',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(241,227,41,1.0)',
            interactive: true,
        }
        }
        if (feature.properties['population_total'] >= 1258383.750000 && feature.properties['population_total'] <= 1704355.625000 ) {
            return {
            pane: 'pane_populations_1',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(227,207,40,1.0)',
            interactive: true,
        }
        }
        if (feature.properties['population_total'] >= 1704355.625000 && feature.properties['population_total'] <= 2019086.500000 ) {
            return {
            pane: 'pane_populations_1',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(213,186,40,1.0)',
            interactive: true,
        }
        }
        if (feature.properties['population_total'] >= 2019086.500000 && feature.properties['population_total'] <= 2270167.000000 ) {
            return {
            pane: 'pane_populations_1',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(204,160,37,1.0)',
            interactive: true,
        }
        }
        if (feature.properties['population_total'] >= 2270167.000000 && feature.properties['population_total'] <= 2397887.000000 ) {
            return {
            pane: 'pane_populations_1',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(199,128,31,1.0)',
            interactive: true,
        }
        }
        if (feature.properties['population_total'] >= 2397887.000000 && feature.properties['population_total'] <= 2687065.500000 ) {
            return {
            pane: 'pane_populations_1',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(194,96,25,1.0)',
            interactive: true,
        }
        }
        if (feature.properties['population_total'] >= 2687065.500000 && feature.properties['population_total'] <= 3083883.000000 ) {
            return {
            pane: 'pane_populations_1',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(189,65,19,1.0)',
            interactive: true,
        }
        }
    }
    map.createPane('pane_populations_1');
    map.getPane('pane_populations_1').style.zIndex = 401;
    map.getPane('pane_populations_1').style['mix-blend-mode'] = 'normal';
    var layer_populations_1 = new L.geoJson(json_populations_1, {
        attribution: '',
        interactive: true,
        dataVar: 'json_populations_1',
        layerName: 'layer_populations_1',
        pane: 'pane_populations_1',
        onEachFeature: pop_populations_1,
        style: style_populations_1_0,
    });
    bounds_group.addLayer(layer_populations_1);
    map.addLayer(layer_populations_1);
    function pop_brand_stores_2(feature, layer) {
        var popupContent = '<table>\
                <tr>\
                    <td colspan="2">' + (feature.properties['store_company'] !== null ? autolinker.link(feature.properties['store_company'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <td colspan="2">' + (feature.properties['store_name'] !== null ? autolinker.link(feature.properties['store_name'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <td colspan="2"><strong>province</strong><br />' + (feature.properties['province'] !== null ? autolinker.link(feature.properties['province'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <td colspan="2"><strong>city</strong><br />' + (feature.properties['city'] !== null ? autolinker.link(feature.properties['city'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <td colspan="2"><strong>subdistrict</strong><br />' + (feature.properties['subdistrict'] !== null ? autolinker.link(feature.properties['subdistrict'].toLocaleString()) : '') + '</td>\
                </tr>\
            </table>';
        var content = removeEmptyRowsFromPopupContent(popupContent, feature);
        layer.on('popupopen', function(e) {
            addClassToPopupIfMedia(content, e.popup);
        });
        layer.bindPopup(content, { maxHeight: 400 });
    }

    function style_brand_stores_2_0(feature) {
        switch(String(feature.properties['store_company'])) {
            case 'ALFAMART':
                return {
            pane: 'pane_brand_stores_2',
            radius: 4.0,
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(255,0,0,1.0)',
            interactive: true,
        }
                break;
            case 'INDOMARET':
                return {
            pane: 'pane_brand_stores_2',
            radius: 4.0,
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(255,200,1,1.0)',
            interactive: true,
        }
                break;
            case 'LAWSON':
                return {
            pane: 'pane_brand_stores_2',
            radius: 4.0,
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(0,0,255,1.0)',
            interactive: true,
        }
                break;
        }
    }
    map.createPane('pane_brand_stores_2');
    map.getPane('pane_brand_stores_2').style.zIndex = 402;
    map.getPane('pane_brand_stores_2').style['mix-blend-mode'] = 'normal';
    var layer_brand_stores_2 = new L.geoJson(json_brand_stores_2, {
        attribution: '',
        interactive: true,
        dataVar: 'json_brand_stores_2',
        layerName: 'layer_brand_stores_2',
        pane: 'pane_brand_stores_2',
        onEachFeature: pop_brand_stores_2,
        pointToLayer: function (feature, latlng) {
            var context = {
                feature: feature,
                variables: {}
            };
            return L.circleMarker(latlng, style_brand_stores_2_0(feature));
        },
    });
    bounds_group.addLayer(layer_brand_stores_2);
    map.addLayer(layer_brand_stores_2);
    // var baseMaps = {};
    // var overlaysTree = [
    //     {label: 'brand_stores<br /><table><tr><td style="text-align: center;"><img src="legend/brand_stores_2_ALFAMART0.png" /></td><td>ALFAMART</td></tr><tr><td style="text-align: center;"><img src="legend/brand_stores_2_INDOMARET1.png" /></td><td>INDOMARET</td></tr><tr><td style="text-align: center;"><img src="legend/brand_stores_2_LAWSON2.png" /></td><td>LAWSON</td></tr></table>', layer: layer_brand_stores_2},
    //     {label: 'populations<br /><table><tr><td style="text-align: center;"><img src="legend/populations_1_289256858440.png" /></td><td>28925 - 685844</td></tr><tr><td style="text-align: center;"><img src="legend/populations_1_68584412583841.png" /></td><td>685844 - 1258384</td></tr><tr><td style="text-align: center;"><img src="legend/populations_1_125838417043562.png" /></td><td>1258384 - 1704356</td></tr><tr><td style="text-align: center;"><img src="legend/populations_1_170435620190873.png" /></td><td>1704356 - 2019087</td></tr><tr><td style="text-align: center;"><img src="legend/populations_1_201908722701674.png" /></td><td>2019087 - 2270167</td></tr><tr><td style="text-align: center;"><img src="legend/populations_1_227016723978875.png" /></td><td>2270167 - 2397887</td></tr><tr><td style="text-align: center;"><img src="legend/populations_1_239788726870666.png" /></td><td>2397887 - 2687066</td></tr><tr><td style="text-align: center;"><img src="legend/populations_1_268706630838837.png" /></td><td>2687066 - 3083883</td></tr></table>', layer: layer_populations_1},
    //     {label: "OpenStreetMap", layer: layer_OpenStreetMap_0},]
    // var lay = L.control.layers.tree(null, overlaysTree,{
    //     //namedToggle: true,
    //     //selectorBack: false,
    //     //closedSymbol: '&#8862; &#x1f5c0;',
    //     //openedSymbol: '&#8863; &#x1f5c1;',
    //     //collapseAll: 'Collapse all',
    //     //expandAll: 'Expand all',
    //     collapsed: true,
    // });
    // lay.addTo(map);
    setBounds();
    
    return [
        map,
        {
            "populations": layer_populations_1,
            "brand-stores": layer_brand_stores_2
        }
    ]
}