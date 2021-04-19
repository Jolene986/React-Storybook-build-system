type ObjectMap<T> = { [key: string]: T };


const size: ObjectMap<string> = {  
  mobileS: "321px",
  mobileM: "376px",
  mobileL: "426px",
  tablet: "768px",
  laptop: "1024px",
  laptopM: "1366px",
  laptopL: "1440px",
  desktop: "1920px",
  desktopL: "2560px",
}
export const device: ObjectMap<string> = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopM: `(max-width: ${size.laptopM})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktopL})`,
}