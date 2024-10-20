var wms_layers = [];


        var lyr_WorldMap_0 = new ol.layer.Tile({
            'title': 'World Map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_PublicTransitUsage_1 = new ol.format.GeoJSON();
var features_PublicTransitUsage_1 = format_PublicTransitUsage_1.readFeatures(json_PublicTransitUsage_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicTransitUsage_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PublicTransitUsage_1.addFeatures(features_PublicTransitUsage_1);
var lyr_PublicTransitUsage_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PublicTransitUsage_1, 
                style: style_PublicTransitUsage_1,
                popuplayertitle: "Public Transit Usage",
                interactive: true,
    title: 'Public Transit Usage<br />\
    <img src="styles/legend/PublicTransitUsage_1_0.png" /> 0%<br />\
    <img src="styles/legend/PublicTransitUsage_1_1.png" /> 1%<br />\
    <img src="styles/legend/PublicTransitUsage_1_2.png" /> 2% - 5%<br />\
    <img src="styles/legend/PublicTransitUsage_1_3.png" /> 6% - 15%<br />\
    <img src="styles/legend/PublicTransitUsage_1_4.png" /> 16% - 55%<br />'
        });

lyr_WorldMap_0.setVisible(true);lyr_PublicTransitUsage_1.setVisible(true);
var layersList = [lyr_WorldMap_0,lyr_PublicTransitUsage_1];
lyr_PublicTransitUsage_1.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'METDIVFP': 'METDIVFP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'J_GEO_ID': 'J_GEO_ID', 'J_FIPS': 'J_FIPS', 'J_County': 'J_County', 'J_Total_workers': 'Total Workers:', 'J_Workers_pt': 'J_Workers_pt', 'J_name': ' ', 'J_total': 'all ages:', 'J_16': '16-19:', 'J_20': '20-24:', 'J_25': '25-44:', 'J_45': '45-59:', 'J_60': '60+', 'J_Ptp': 'J_Ptp', });
lyr_PublicTransitUsage_1.set('fieldImages', {'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'COUNTYNS': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'NAMELSAD': 'Hidden', 'LSAD': 'Hidden', 'CLASSFP': 'Hidden', 'MTFCC': 'Hidden', 'CSAFP': 'Hidden', 'CBSAFP': 'Hidden', 'METDIVFP': 'Hidden', 'FUNCSTAT': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'INTPTLAT': 'Hidden', 'INTPTLON': 'Hidden', 'J_GEO_ID': 'Hidden', 'J_FIPS': 'Hidden', 'J_County': 'TextEdit', 'J_Total_workers': 'Range', 'J_Workers_pt': 'Range', 'J_name': 'TextEdit', 'J_total': 'TextEdit', 'J_16': 'TextEdit', 'J_20': 'TextEdit', 'J_25': 'TextEdit', 'J_45': 'TextEdit', 'J_60': 'TextEdit', 'J_Ptp': 'Range', });
lyr_PublicTransitUsage_1.set('fieldLabels', {'J_County': 'no label', 'J_Total_workers': 'inline label - always visible', 'J_Workers_pt': 'hidden field', 'J_name': 'header label - always visible', 'J_total': 'inline label - always visible', 'J_16': 'inline label - always visible', 'J_20': 'inline label - always visible', 'J_25': 'inline label - always visible', 'J_45': 'inline label - always visible', 'J_60': 'inline label - always visible', 'J_Ptp': 'hidden field', });
lyr_PublicTransitUsage_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});