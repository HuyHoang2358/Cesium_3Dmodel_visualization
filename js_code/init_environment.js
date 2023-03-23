// Init Cesium Ion
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiYjJmMDA2NC0yY2YyLTRkOGEtOGVmYi03YmNmZmE1NzcyY2MiLCJpZCI6ODk3NzUsImlhdCI6MTY0OTkyNTEwMX0.VPFCxddX_V2UKjOJeqJszZ25c9z4HA2BSYimPLYrbWo';

// Create viewer
let viewer = new Cesium.Viewer('cesiumContainer', {
    baseLayerPicker: true, //  type map
    vrButton: false,
    geocoder: false,
    navigationHelpButton: false,
    selectionIndicator: true,
    shadows: false,
    timeline: false,
    sceneModePicker: false, // type show map
    animation: true,
});



// set Time Format

viewer.animation.viewModel.timeFormatter = function(date, viewModel) {
    date = Cesium.JulianDate.toDate(date);
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;
    return `${hh}:${mm}:${ss}`;
};

// Start time when run app
viewer.clock.shouldAnimate  = true;

// Hidden logo cesium in screen
viewer._cesiumWidget._creditContainer.parentNode.removeChild(viewer._cesiumWidget._creditContainer);

// Set up Camera

const HCM_latitude = 10.762;
const HCM_longitude = 106.776;
const HCM_height = 29000;

// Fly to a position with an orientation using heading, pitch and roll.
viewer.camera.flyTo({
    destination : Cesium.Cartesian3.fromDegrees(HCM_longitude, HCM_latitude, HCM_height),
    orientation : {
        heading : Cesium.Math.toRadians(0.0),
        pitch : Cesium.Math.toRadians(-80.0),
        roll : 0.0
    }
});

// Set up location for home button
let extent = Cesium.Rectangle.fromDegrees(106.678145, 10.825583, 106.787728, 10.778577);
Cesium.Camera.DEFAULT_VIEW_RECTANGLE = extent;
Cesium.Camera.DEFAULT_VIEW_FACTOR = 0;

