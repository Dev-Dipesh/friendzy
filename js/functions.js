;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		// resize images
		$('.slide-image img, .about-image img').fullscreener();

		// s;oder
		$('.slider .slides').bxSlider({
			mode: 'fade',
			speed: 1500
		});

		tabs();

		$('.nav-toggle').on('click', function() {
			$(this).parent().toggleClass('open');
		});

		// select box
		$('.select').selecter();

		$('.colorbox').colorbox();

		// navigation
		var waypoint,
		 	$nav = $('.nav');
		 
		 $nav.on('click', 'a', function(e){
		 	waypoint = $(this).attr('href')

	 		$('html, body').animate({
	 			scrollTop: $(waypoint).offset().top
	 		}, 1000);

	 		e.preventDefault();
		 });

		 // back to top
		 $('.back-to-top').on('click', function(event) {
		 	event.preventDefault();

			$('html, body').animate({
	 			scrollTop: 0
	 		}, 1000);		 	
		 });

		function initialize() {
		    var loc, map, marker, infobox;
		    
		    loc = new google.maps.LatLng(40.7556867, -73.9711741);
		    
		    map = new google.maps.Map(document.getElementById("map"), {
		         zoom: 13,
		         center: loc,
		         scrollwheel: false,
		         mapTypeId: google.maps.MapTypeId.ROADMAP
		    });
		    
		    marker = new google.maps.Marker({
		        map: map,
		        position: loc,
		        visible: true,
		        icon: 'css/images/map-pin.png'
		    });

		    infobox = new InfoBox({
		         content: document.getElementById("infobox"),
		         disableAutoPan: false,
		         maxWidth: 150,
		         pixelOffset: new google.maps.Size(-140, 0),
		         zIndex: null,
		         boxStyle: {
		            background: "url('http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/examples/tipbox.gif') no-repeat",
		            opacity: 0.75,
		            width: "280px"
		        },
		        closeBoxMargin: "12px 4px 2px 2px",
		        closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
		        infoBoxClearance: new google.maps.Size(1, 1)
		    });
		    
		    google.maps.event.addListener(marker, 'click', function() {
		        infobox.open(map, this);
		        map.panTo(loc);
		    });
		}

		google.maps.event.addDomListener(window, 'load', initialize);
	});

	function tabs() {
		var activeTabClass = 'current';
	
		$('.tabs-nav a').on('click', function(event) {
			var $tabLink = $(this);
			var $targetTab = $($tabLink.attr('href'));
	 
			$tabLink
				.parent() // go up to the <li> element
				.add($targetTab)
				.addClass(activeTabClass)
					.siblings()
					.removeClass(activeTabClass);
			
			event.preventDefault();
		});
	}

})(jQuery, window, document);
