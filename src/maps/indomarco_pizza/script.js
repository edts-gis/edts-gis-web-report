import L from "leaflet"
import { Autolinker } from "autolinker"
import "leaflet-hash"
import "leaflet.control.layers.tree"


// Configure Map
export function configureMap(json_geom_kabkota_pizza_1, json_geom_indonesia_kelurahan_202404_2) {
    var map = L.map('map', {
        zoomControl:false, maxZoom:28, minZoom:1
    }).fitBounds([[-8.341244683779871,105.69223460092395],[-5.663503788426423,110.02294530192809]]);
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
    var zoomControl = L.control.zoom({
        position: 'topleft'
    }).addTo(map);
    var bounds_group = new L.featureGroup([]);
    function setBounds() {
    }
    map.createPane('pane_EsriGray_0');
    map.getPane('pane_EsriGray_0').style.zIndex = 400;
    var layer_EsriGray_0 = L.tileLayer('http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
        pane: 'pane_EsriGray_0',
        opacity: 1.0,
        attribution: '',
        minZoom: 1,
        maxZoom: 28,
        minNativeZoom: 0,
        maxNativeZoom: 18
    });
    layer_EsriGray_0;
    map.addLayer(layer_EsriGray_0);
    function pop_geom_kabkota_pizza_1(feature, layer) {
        var popupContent = '<table>\
                <tr>\
                    <th scope="row">pt_id</th>\
                    <td class="visible-with-data" id="pt_id">' + (feature.properties['pt_id'] !== null ? autolinker.link(feature.properties['pt_id'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">seg_id</th>\
                    <td class="visible-with-data" id="seg_id">' + (feature.properties['seg_id'] !== null ? autolinker.link(feature.properties['seg_id'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">ring_id</th>\
                    <td class="visible-with-data" id="ring_id">' + (feature.properties['ring_id'] !== null ? autolinker.link(feature.properties['ring_id'].toLocaleString()) : '') + '</td>\
                </tr>\
            </table>';
        var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
    addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
    }

    function style_geom_kabkota_pizza_1_0() {
        return {
            pane: 'pane_geom_kabkota_pizza_1',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(114,155,111,1.0)',
            interactive: true,
        }
    }
    map.createPane('pane_geom_kabkota_pizza_1');
    map.getPane('pane_geom_kabkota_pizza_1').style.zIndex = 401;
    map.getPane('pane_geom_kabkota_pizza_1').style['mix-blend-mode'] = 'normal';
    var layer_geom_kabkota_pizza_1 = new L.geoJson(json_geom_kabkota_pizza_1, {
        attribution: '',
        interactive: true,
        dataVar: 'json_geom_kabkota_pizza_1',
        layerName: 'layer_geom_kabkota_pizza_1',
        pane: 'pane_geom_kabkota_pizza_1',
        onEachFeature: pop_geom_kabkota_pizza_1,
        style: style_geom_kabkota_pizza_1_0,
    });
    bounds_group.addLayer(layer_geom_kabkota_pizza_1);
    map.addLayer(layer_geom_kabkota_pizza_1);
    function pop_geom_indonesia_kelurahan_202404_2(feature, layer) {
        var popupContent = '<table>\
                <tr>\
                    <th scope="row">desa</th>\
                    <td class="visible-with-data" id="desa">' + (feature.properties['desa'] !== null ? autolinker.link(feature.properties['desa'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">density</th>\
                    <td class="visible-with-data" id="density">' + (feature.properties['density'] !== null ? autolinker.link(feature.properties['density'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">kecamatan</th>\
                    <td class="visible-with-data" id="kecamatan">' + (feature.properties['kecamatan'] !== null ? autolinker.link(feature.properties['kecamatan'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">kabkota</th>\
                    <td class="visible-with-data" id="kabkota">' + (feature.properties['kabkota'] !== null ? autolinker.link(feature.properties['kabkota'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">provinsi</th>\
                    <td class="visible-with-data" id="provinsi">' + (feature.properties['provinsi'] !== null ? autolinker.link(feature.properties['provinsi'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">area_ha</th>\
                    <td class="visible-with-data" id="area_ha">' + (feature.properties['area_ha'] !== null ? autolinker.link(feature.properties['area_ha'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">population</th>\
                    <td class="visible-with-data" id="population">' + (feature.properties['population'] !== null ? autolinker.link(feature.properties['population'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">jumlah_kk</th>\
                    <td class="visible-with-data" id="jumlah_kk">' + (feature.properties['jumlah_kk'] !== null ? autolinker.link(feature.properties['jumlah_kk'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">jumlah_penduduk</th>\
                    <td class="visible-with-data" id="jumlah_penduduk">' + (feature.properties['jumlah_penduduk'] !== null ? autolinker.link(feature.properties['jumlah_penduduk'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">elevation</th>\
                    <td class="visible-with-data" id="elevation">' + (feature.properties['elevation'] !== null ? autolinker.link(feature.properties['elevation'].toLocaleString()) : '') + '</td>\
                </tr>\
            </table>';
        var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
    addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
    }

    function style_geom_indonesia_kelurahan_202404_2_0(feature) {
        if (feature.properties['elevation'] >= 0.000000 && feature.properties['elevation'] <= 0.000000 ) {
            return {
            pane: 'pane_geom_indonesia_kelurahan_202404_2',
            opacity: 1,
            color: 'rgba(35,35,35,0.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(68,1,84,1.0)',
            interactive: true,
        }
        }
        if (feature.properties['elevation'] >= 0.000000 && feature.properties['elevation'] <= 11.000000 ) {
            return {
            pane: 'pane_geom_indonesia_kelurahan_202404_2',
            opacity: 1,
            color: 'rgba(35,35,35,0.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(71,40,120,1.0)',
            interactive: true,
        }
        }
        if (feature.properties['elevation'] >= 11.000000 && feature.properties['elevation'] <= 16.714286 ) {
            return {
            pane: 'pane_geom_indonesia_kelurahan_202404_2',
            opacity: 1,
            color: 'rgba(35,35,35,0.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(62,74,137,1.0)',
            interactive: true,
        }
        }
        if (feature.properties['elevation'] >= 16.714286 && feature.properties['elevation'] <= 26.734737 ) {
            return {
            pane: 'pane_geom_indonesia_kelurahan_202404_2',
            opacity: 1,
            color: 'rgba(35,35,35,0.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(49,104,142,1.0)',
            interactive: true,
        }
        }
        if (feature.properties['elevation'] >= 26.734737 && feature.properties['elevation'] <= 40.515207 ) {
            return {
            pane: 'pane_geom_indonesia_kelurahan_202404_2',
            opacity: 1,
            color: 'rgba(35,35,35,0.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(37,131,142,1.0)',
            interactive: true,
        }
        }
        if (feature.properties['elevation'] >= 40.515207 && feature.properties['elevation'] <= 59.477896 ) {
            return {
            pane: 'pane_geom_indonesia_kelurahan_202404_2',
            opacity: 1,
            color: 'rgba(35,35,35,0.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(30,158,137,1.0)',
            interactive: true,
        }
        }
        if (feature.properties['elevation'] >= 59.477896 && feature.properties['elevation'] <= 122.000000 ) {
            return {
            pane: 'pane_geom_indonesia_kelurahan_202404_2',
            opacity: 1,
            color: 'rgba(35,35,35,0.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(53,183,121,1.0)',
            interactive: true,
        }
        }
        if (feature.properties['elevation'] >= 122.000000 && feature.properties['elevation'] <= 231.246154 ) {
            return {
            pane: 'pane_geom_indonesia_kelurahan_202404_2',
            opacity: 1,
            color: 'rgba(35,35,35,0.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(108,206,89,1.0)',
            interactive: true,
        }
        }
        if (feature.properties['elevation'] >= 231.246154 && feature.properties['elevation'] <= 450.681811 ) {
            return {
            pane: 'pane_geom_indonesia_kelurahan_202404_2',
            opacity: 1,
            color: 'rgba(35,35,35,0.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(181,222,44,1.0)',
            interactive: true,
        }
        }
        if (feature.properties['elevation'] >= 450.681811 && feature.properties['elevation'] <= 999.834951 ) {
            return {
            pane: 'pane_geom_indonesia_kelurahan_202404_2',
            opacity: 1,
            color: 'rgba(35,35,35,0.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(253,231,37,1.0)',
            interactive: true,
        }
        }
    }
    map.createPane('pane_geom_indonesia_kelurahan_202404_2');
    map.getPane('pane_geom_indonesia_kelurahan_202404_2').style.zIndex = 402;
    map.getPane('pane_geom_indonesia_kelurahan_202404_2').style['mix-blend-mode'] = 'normal';
    var layer_geom_indonesia_kelurahan_202404_2 = new L.geoJson(json_geom_indonesia_kelurahan_202404_2, {
        attribution: '',
        interactive: true,
        dataVar: 'json_geom_indonesia_kelurahan_202404_2',
        layerName: 'layer_geom_indonesia_kelurahan_202404_2',
        pane: 'pane_geom_indonesia_kelurahan_202404_2',
        onEachFeature: pop_geom_indonesia_kelurahan_202404_2,
        style: style_geom_indonesia_kelurahan_202404_2_0,
    });
    bounds_group.addLayer(layer_geom_indonesia_kelurahan_202404_2);
    map.addLayer(layer_geom_indonesia_kelurahan_202404_2);
    setBounds()

    return [layer_geom_kabkota_pizza_1, layer_geom_indonesia_kelurahan_202404_2]
};