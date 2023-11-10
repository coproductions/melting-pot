import { webLightTheme } from "@fluentui/react-components";

export const defaultTheme = {
  ...webLightTheme,
  fontFamilyBase: 'Karla',
  defaultFontStyle: { fontFamily: "Karla" },
  colorBrandBackground: '#EA6696',
  colorBrandBackgroundHover: '#dd539b',
  colorBrandBackgroundPressed: '#fc5ea3',
};

export const theme2 = {
    ...defaultTheme,
    colorBrandBackground: '#E0723B',
    colorBrandBackgroundHover: '#4088b3',
    colorBrandBackgroundPressed: '#81b6cc',
}