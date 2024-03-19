import { DotLottie } from "@dotlottie/dotlottie-js";

export async function createDotLottie() {
  const dotLottie = new DotLottie();

  // build dotLottie
  await dotLottie
    .addAnimation({
      id: "Fireworks",
      url: "/Fireworks.lottie",
      loop: true,
      autoplay: true,
    })
    .addAnimation({
      id: "MasrhallFire",
      url: "/MasrhallFire.lottie",
      loop: true,
      autoplay: true,
      direction: -1,
    })
    .build();

  // download dotLottie
  await dotLottie.download("my_animation.lottie");
}
