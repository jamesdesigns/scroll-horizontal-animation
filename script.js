console.clear();
var controller = new ScrollMagic.Controller();
var sections = document.querySelectorAll("section");
var tl = new TimelineMax();
var offset = window.innerHeight;

for (let i = 1; i < sections.length; i++) {
  tl.from(sections[i], 1, { xPercent:100, ease: Linear.easeNone }, "+=1");
}

new ScrollMagic.Scene({
  triggerElement: "#pinMaster",
  triggerHook: "onLeave",
  duration: "500%"
})
  .setPin("#pinMaster")
  .setTween(tl)
  .addIndicators({
    colorTrigger: "white",
    colorStart: "white",
    colorEnd: "white",
    indent: 40
  })
  .addTo(controller);

$("section").each(function(i) {
  let target1 = $(this).find("h1");
  let split = new SplitText(target1, { type: "chars" });
  var tl = new TimelineMax();
  tl.staggerFrom(
    split.chars,
    0.5,
    { opacity: 0, scale: 0.5, y: -100, ease: Bounce.easeOut },
    0.05
  );

  new ScrollMagic.Scene({
    triggerElement: "#pinMaster",
    triggerHook: 0,
    offset: i * offset
  })
    .setTween(tl)
    .addTo(controller)
    .addIndicators({
      colorTrigger: "white",
      colorStart: "white",
      colorEnd: "white",
      indent: 40
    });
});
