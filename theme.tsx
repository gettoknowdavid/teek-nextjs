import { createDarkTheme, darkThemePrimitives } from 'baseui';

const TeekTheme = createDarkTheme(
  {
    ...darkThemePrimitives,
    primaryFontFamily: '"Product Sans"',
    accent: 'rgb(201, 44, 172)',
    accent100: 'rgba(172, 49, 187, 1)',
    accent200: 'rgba(253, 208, 173, 1)',
  },
  {
    gradients: {
      main: 'linear-gradient(43deg,rgb(201, 44, 172) 0%,rgba(172, 49, 187, 1) 28%,rgba(253, 208, 173, 1) 87%)',
    },
  },
);

export default TeekTheme;
