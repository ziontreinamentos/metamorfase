import logoFull from "../assets/logo-full.png";
import logoIcon from "../assets/logo-icon.png";

export function LogoFull({ className = "h-9" }) {
  return <img src={logoFull} alt="Metamorfase" className={`${className} w-auto`} />;
}

export function LogoIcon({ className = "h-9" }) {
  return <img src={logoIcon} alt="Metamorfase" className={`${className} w-auto`} />;
}
