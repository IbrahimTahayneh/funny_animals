import { SvgXml } from "react-native-svg";

export const VictorTwo = () => {
  const svgImage = `<svg
  width="214"
  height="64"
  viewBox="0 0 214 64"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    opacity="0.7"
    d="M213.994 0H20.3401C9.10655 0 0 9.10655 0 20.3401V43.2226C0 54.4561 9.10655 63.5627 20.3401 63.5627H50.2025C93.3827 24.0836 150.876 0 213.994 0Z"
    fill="url(#paint0_linear_134_11483)"
  />
  <defs>
    <linearGradient
      id="paint0_linear_134_11483"
      x1="107.03"
      y1="0.17041"
      x2="107.03"
      y2="63.181"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="white" stop-opacity="0.2" />
      <stop offset="1" stop-color="white" stop-opacity="0" />
    </linearGradient>
  </defs>
</svg>`;

  const VictorTwoSvg = () => (
    <SvgXml xml={svgImage} style={{ position: "absolute", left: 0 }} />
  );
  return <VictorTwoSvg />;
};
export default VictorTwo;
