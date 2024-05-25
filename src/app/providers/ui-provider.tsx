import { ThemeProvider } from "styled-components";

import type { ReactNode } from "react";
import { GlobalStyle, defaultTheme } from "./theme";

export interface UiProps {
	children?: ReactNode;
}

const UiProvider = ({ children }: UiProps) => (
	<ThemeProvider theme={defaultTheme}>
		<GlobalStyle />
		{children}
	</ThemeProvider>
);

export { UiProvider };
