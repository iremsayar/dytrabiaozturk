import { LottieOptions, useLottie } from "lottie-react";
import { CSSProperties } from "react";
import Sun from "./data.json";

const LottieSun = () => {
  const style: CSSProperties = {};
  const options: LottieOptions = {
    animationData: Sun,
    loop: true,
    autoplay: true,
    renderer: "svg",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { View } = useLottie(options, style);
  return View;
};

export default LottieSun;
