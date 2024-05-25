"use client";
import type { TextProps } from "./contracts";
import TextContainer from "./styles/text-container.styled";

const Text = ({ children, ...props }: TextProps) => {
	return <TextContainer {...props}>{children}</TextContainer>;
};

export { Text };
