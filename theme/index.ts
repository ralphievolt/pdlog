import { ActionIcon, createTheme, Loader } from '@mantine/core';

export const myTheme = createTheme({
  primaryColor: 'violet',
  defaultRadius: 'md',
  focusRing: 'always',
  fontFamily: "Space Grotesk, sans-serif",
	headings: {
		fontFamily: "Space Grotesk, sans-serif",
	},
  components: {
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        variant: 'subtle',
      },
    }),
    Loader: Loader.extend({
      defaultProps: {
        type: 'bars',
      },
    }),
  },
});
