import "./App.css";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

export const App = () => {
  return (
    <>
      <h1>Lottie Tester</h1>
      <div className="players">
        <div>
          <DotLottiePlayer
            src="Fireworks.lottie"
            autoplay
            loop
            style={{ width: 350, height: 350 }}
          />

          <h2>DotLottie file (5.2Kb)</h2>
        </div>
        <div>
          <DotLottiePlayer
            src="Fireworks.json"
            autoplay
            loop
            style={{ width: 350, height: 350 }}
          />
          <h2>Original JSON file (44kb)</h2>
        </div>
      </div>
    </>
  );
};
