const tween = KUTE.fromTo(
  "#blob1",
  { path: "#blob1" },
  { path: "#blob2" },
  { repeat: 999, duration: 3000, yoyo: true }
);

tween.start();
const tweenV2 = KUTE.fromTo(
  "#blob3",
  { path: "#blob3" },
  { path: "#blob4" },
  { repeat: 999, duration: 3000, yoyo: true }
);

tweenV2.start();

const tweenV3 = KUTE.fromTo(
  "#blob4",
  { path: "#blob3" },
  { path: "#blob4" },
  { repeat: 999, duration: 3000, yoyo: true }
);

tweenV3.start();