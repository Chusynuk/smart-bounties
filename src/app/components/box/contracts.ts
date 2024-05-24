import type { ElementType, ReactNode } from "react";
import type {
	BackgroundProps,
	BorderProps,
	ColorProps,
	FlexboxProps,
	GridProps,
	LayoutProps,
	PositionProps,
	ShadowProps,
	SpaceProps,
	TypographyProps,
} from "styled-system";

interface IBox
	extends SpaceProps,
		FlexboxProps,
		LayoutProps,
		GridProps,
		BorderProps,
		ColorProps,
		PositionProps,
		BackgroundProps,
		ShadowProps,
		TypographyProps {
	children?: ReactNode;
	as?: ElementType;
	row?: boolean;
}

export type { IBox };
