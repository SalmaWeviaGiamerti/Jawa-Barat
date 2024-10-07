var wms_layers = [];

var format_2021_0 = new ol.format.GeoJSON();
var features_2021_0 = format_2021_0.readFeatures(json_2021_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021_0.addFeatures(features_2021_0);
var lyr_2021_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2021_0, 
                style: style_2021_0,
                popuplayertitle: "2021",
                interactive: true,
    title: '2021<br />\
    <img src="styles/legend/2021_0_0.png" /> 1962 - 5482<br />\
    <img src="styles/legend/2021_0_1.png" /> 5482 - 10570<br />\
    <img src="styles/legend/2021_0_2.png" /> 10570 - 16197<br />\
    <img src="styles/legend/2021_0_3.png" /> 16197 - 20498<br />\
    <img src="styles/legend/2021_0_4.png" /> 20498 - 72507<br />'
        });
var format_2022_1 = new ol.format.GeoJSON();
var features_2022_1 = format_2022_1.readFeatures(json_2022_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022_1.addFeatures(features_2022_1);
var lyr_2022_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2022_1, 
                style: style_2022_1,
                popuplayertitle: "2022",
                interactive: true,
    title: '2022<br />\
    <img src="styles/legend/2022_1_0.png" /> 2853 - 11230<br />\
    <img src="styles/legend/2022_1_1.png" /> 11230 - 12803<br />\
    <img src="styles/legend/2022_1_2.png" /> 12803 - 19846<br />\
    <img src="styles/legend/2022_1_3.png" /> 19846 - 26217<br />\
    <img src="styles/legend/2022_1_4.png" /> 26217 - 59130<br />'
        });
var format_2023_2 = new ol.format.GeoJSON();
var features_2023_2 = format_2023_2.readFeatures(json_2023_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2023_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2023_2.addFeatures(features_2023_2);
var lyr_2023_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2023_2, 
                style: style_2023_2,
                popuplayertitle: "2023",
                interactive: true,
    title: '2023<br />\
    <img src="styles/legend/2023_2_0.png" /> 3655 - 14536<br />\
    <img src="styles/legend/2023_2_1.png" /> 14536 - 20502<br />\
    <img src="styles/legend/2023_2_2.png" /> 20502 - 23779<br />\
    <img src="styles/legend/2023_2_3.png" /> 23779 - 33930<br />\
    <img src="styles/legend/2023_2_4.png" /> 33930 - 389916<br />'
        });

lyr_2021_0.setVisible(true);lyr_2022_1.setVisible(true);lyr_2023_2.setVisible(true);
var layersList = [lyr_2021_0,lyr_2022_1,lyr_2023_2];
lyr_2021_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'GIS_JM_PST': 'GIS_JM_PST', 'GIS_NM_INS': 'GIS_NM_INS', });
lyr_2022_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'GIS_JM_PST': 'GIS_JM_PST', 'GIS_NM_INS': 'GIS_NM_INS', });
lyr_2023_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'GIS_JM_PST': 'GIS_JM_PST', 'GIS_NM_INS': 'GIS_NM_INS', });
lyr_2021_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS': 'TextEdit', 'GIS_JM_PST': 'TextEdit', 'GIS_NM_INS': 'TextEdit', });
lyr_2022_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS': 'TextEdit', 'GIS_JM_PST': 'TextEdit', 'GIS_NM_INS': 'TextEdit', });
lyr_2023_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS': 'TextEdit', 'GIS_JM_PST': 'TextEdit', 'GIS_NM_INS': 'TextEdit', });
lyr_2021_0.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'LUAS': 'no label', 'GIS_JM_PST': 'no label', 'GIS_NM_INS': 'no label', });
lyr_2022_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'LUAS': 'no label', 'GIS_JM_PST': 'no label', 'GIS_NM_INS': 'no label', });
lyr_2023_2.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'LUAS': 'no label', 'GIS_JM_PST': 'no label', 'GIS_NM_INS': 'no label', });
lyr_2023_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});