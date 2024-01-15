import { SvgXml } from "react-native-svg";

export const VictorOne = () => {
  const svgImage = `<svg width="306" height="45" viewBox="0 0 306 45" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.5" d="M0.0755974 3.70444e-07C0.0255448 0.581993 0 1.17099 0 1.76595V24.6485C0 35.882 9.10655 44.9886 20.3401 44.9886H284.761C295.994 44.9886 305.101 35.882 305.101 24.6485V1.76595C305.101 1.17099 305.075 0.581993 305.025 0C265.84 19.4321 211.986 31.4285 152.55 31.4285C93.1148 31.4285 39.2613 19.4321 0.0755974 3.70444e-07Z" fill="#11A6EA"/>
  </svg>`;

  const VictorOneSvg = () => (
    <SvgXml xml={svgImage} style={{ position: "absolute", bottom: 0 }} />
  );
  return <VictorOneSvg />;
};
export default VictorOne;
