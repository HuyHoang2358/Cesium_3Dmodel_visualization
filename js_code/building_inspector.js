const building_tileset = viewer.scene.primitives.add(
    new Cesium.Cesium3DTileset({
        url: "../data/tileset.json",
        preloadWhenHidden: false,
        /* shadows: Cesium.ShadowMode.RECEIVE_ONLY,*/
        /*maximumScreenSpaceError: 32,*/
        /*  cullRequestsWhileMovingMultiplier: 20,*/
        maximumScreenSpaceError: 8, // set a big number for test, faster but rough
        maximumMemoryUsage: 2048,
        preferLeaves: true,
        dynamicScreenSpaceError : true,
        dynamicScreenSpaceErrorDensity : 0.00278,
        dynamicScreenSpaceErrorFactor : 4.0,
        dynamicScreenSpaceErrorHeightFalloff : 0.25,
        skipLevelOfDetail:true,
    })
);

viewer.extend(Cesium.viewerCesium3DTilesInspectorMixin);
const inspectorViewModel = viewer.cesium3DTilesInspector.viewModel;