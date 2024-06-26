import type { ThemeBreakpointAlias, ThemeScale } from "../contracts/styled";

const breakpoints = ["40em", "52em", "64em", "80em"] as ThemeScale<
	string,
	ThemeBreakpointAlias
>;
// aliases
[breakpoints.sm, breakpoints.md, breakpoints.lg, breakpoints.xl] = breakpoints;

export { breakpoints };
