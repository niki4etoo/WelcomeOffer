// Welcome text
gsap.set("#text104830", { translateY: "-150px", overflow: "hidden" });

// Longer line below the welcome text
gsap.set("#rect14", { opacity: 0 });

//Smaller rects below the longer one
var rects = [ "#rect1", "#rect2", "#rect3", "#rect4", "#rect5", "#rect6", "#rect7", "#rect8", "#rect9", "#rect10", "#rect11", "#rect12", "#rect13" ];

gsap.set(rects,
	{ opacity: 0 });
	
gsap.set(["#startText", "#techStackList", "#text2", "#text3", "#finalText" ], { translateX: "-150%" });	
	
//Start actual animation
var timeline = gsap.timeline();

timeline.to("#text104830", { duration: 1, translateY: "0px" })
		.to("#rect14", { duration: 1, opacity: 1 })
		.to(rects, { duration: 1, stagger: 0.07, opacity: 1 })
		.to("#text104830", { duration: 0.5, translateY: "-150px"})
		.to("#rect14", { duration: 0.5, translateX: "-100%"})
		.to(rects, { duration: 0.5, stagger: 0.07, opacity: 0, onComplete: () => {
							var svg_container = document.getElementById('svg_container');
							svg_container.remove();
		}})
		.to("#startText", { duration: 0.5, translateX: "0%" })
		.to("#techStackList", { duration: 1, translateX: "0%", skewX: "50%" })
		.to("#techStackList", { duration: 1, skewX: "0%"})
		.to("#text2", { duration: 1, translateX: "0%" })
		.to("#text3", { duration: 1, translateX: "0%" })
		.to("#finalText", { delay: 1, duration: 2, translateX: "0%"})
		.to("body", { duration: 3, backgroundColor: "black", color: "white"});
