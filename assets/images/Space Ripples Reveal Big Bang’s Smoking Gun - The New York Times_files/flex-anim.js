var TL = gsap.timeline({
  repeat: 0,
  repeatDelay: 0,
  delay: 0,
  /* onComplete: fadeFinalImg, */
  defaults: { duration: 0.2, ease: "none" }
});

TL.to(scr, { duration: 0.002, alpha: 0, ease: "power2.out" }, "+=.003")
  .from(
    yellowBox,
    { duration: 0.7, scaleX: 100, scaleY: 30, alpha: 1, ease: "power2.out" },
    "+=.25"
  )
  .from(amLogo, { duration: 0.01, alpha: 0, ease: "power2.out" }, "F1")
  /*  .from(circle, { duration: 0.01, alpha: 0, ease: "power2.out" }, "F1")
  .from(amLogo, { duration: 0.01, alpha: 0, ease: "power2.out" }, "F1") */

  .from(t1, { alpha: 0 }, "+=.75")
  .to(t1, { alpha: 0 }, "+=1.5")

  .from(t2, { alpha: 0 })
  .to(t2, { alpha: 0 }, "+=1.5")

  .from(t3, { alpha: 0 })
  .to(t3, { alpha: 0 }, "+=1.5")

  .from(t4, { alpha: 0 })
  .to(t4, { alpha: 0 }, "+=3.75")

  .from([t5, cta, logo], 0.005, { alpha: 0 });
