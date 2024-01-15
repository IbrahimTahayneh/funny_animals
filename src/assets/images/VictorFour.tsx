import { SvgXml } from "react-native-svg";

export const VictorFour = () => {
  const svgImage = `<svg
  width="16"
  height="17"
  viewBox="0 0 16 17"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5.2377 8.50353C5.63449 6.25508 6.77521 4.53555 8.18674 3.24931C11.6249 0.116331 16.757 3.43158 13.7763 7.00253C10.5198 10.9038 4.41459 13.1678 5.2377 8.50353Z"
    fill="white"
  />
  <circle cx="2.1959" cy="14.8598" r="2.11876" fill="white" />
</svg>`;

  const VictorFourSvg = () => (
    <SvgXml xml={svgImage} style={{ position: "absolute", left: 8, top: 5 }} />
  );
  return <VictorFourSvg />;
};
export default VictorFour;
