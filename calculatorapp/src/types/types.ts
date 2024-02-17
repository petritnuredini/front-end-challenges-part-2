export interface AppContextProps {
  themeName: string;
  setThemeName: (theme: string) => void;
  theme: ThemeType;
}

export interface ThemeType {
  backgrounds: {
    mainBackground: string;
    toggleBackground: string;
    screenBackground: string;
  };
  keys: {
    typeOne: {
      background: string;
      shadow: string;
    };
    typeTwo: {
      background: string;
      shadow: string;
    };
    typeThree: {
      background: string;
      shadow: string;
    };
  };
  text: {
    typeOne: string;
    typeTwo: string;
  };
}
