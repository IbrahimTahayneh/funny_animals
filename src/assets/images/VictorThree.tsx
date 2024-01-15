import { SvgXml } from "react-native-svg";

export const VictorThree = () => {
  const svgImage = `<svg
  width="18"
  height="14"
  viewBox="0 0 18 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12.3121 6.01573C10.8135 3.33218 8.37325 1.82201 5.98213 1.04401C3.51916 0.242625 1.43912 2.82426 2.42556 5.21913C3.34657 7.45513 4.90419 9.09547 8.9968 9.9436C11.4172 10.4452 13.5173 8.1739 12.3121 6.01573Z"
    fill="white"
  />
  <circle cx="16.2281" cy="12.1985" r="1.695" fill="white" />
</svg>
`;

  const VictorThreeSvg = () => (
    <SvgXml xml={svgImage} style={{ position: "absolute", right: 8, top: 5 }} />
  );
  return <VictorThreeSvg />;
};
export default VictorThree;
