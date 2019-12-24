export interface Theme {
  color: {
    white: string;
    black: string;
    grey: string;
    light: string;
    medium: string;
    dark: string;
    error: string;
    success: string;
  };
  sizing: {
    header: {
      height: number;
    };
    container: {
      height: number;
    };
    footer: {
      height: number;
    };
  };
  defaults: {
    border: string;
    background: string;
    marginBottom: string;
    borderRadius: string;
    padding: string;
  };
}

export type Colors = 'white' | 'black' | 'grey' | 'light' | 'medium' | 'dark' | 'error' | 'success';

export interface ThemeProps {
  theme: Theme;
}
