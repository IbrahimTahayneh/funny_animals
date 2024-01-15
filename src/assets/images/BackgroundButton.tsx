import { SvgXml } from "react-native-svg";

export const BackgroundButton = () => {
  const svgImage = `<svg width="306" height="64" viewBox="0 0 306 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_ii_134_11481)">
  <rect width="305.101" height="63.5627" rx="14" fill="#1BB0F4"/>
  </g>
  <rect x="1.03659" y="1.03659" width="303.028" height="61.4895" rx="12.9634" stroke="#0A9CE0" stroke-width="2.07317"/>
  <defs>
  <filter id="filter0_ii_134_11481" x="0" y="0" width="305.101" height="63.5627" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dx="5" dy="5"/>
  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0.176471 0 0 0 0 0.760784 0 0 0 0 1 0 0 0 1 0"/>
  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_134_11481"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dx="-5" dy="-5"/>
  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0.0392157 0 0 0 0 0.611765 0 0 0 0 0.878431 0 0 0 1 0"/>
  <feBlend mode="normal" in2="effect1_innerShadow_134_11481" result="effect2_innerShadow_134_11481"/>
  </filter>
  </defs>
  </svg>
  `;

  const BackgroundButtonSvg = () => (
    <SvgXml xml={svgImage} style={{ position: "absolute", bottom: 0 }} />
  );
  return <BackgroundButtonSvg />;
};
export default BackgroundButton;
