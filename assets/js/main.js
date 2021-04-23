$( document ).ready(function() {
    document.body.innerHTML = '<div id="globe" style="width: 500px; height: 500px;></div>';

        // Get the container to hold the IO globe
        var container = document.getElementById( "globe" );

        // Create Gio.controller
        var globe = new GIO.Controller( container );

        // Add data
        globe.addData( data );
        //globe.setStyle("lemonGate");
        globe.setSurfaceColor("#FF4580");
        //globe.setSelectedColor("ff8000");
        //globe.setInitCountry("US");
        //globe.lightenMentioned(false);
        // Initialize and render the globe
        globe.init();
});