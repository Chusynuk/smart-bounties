"use client";
import { Flex, Header } from "components";
import type { ReactNode } from "react";

interface FlexLayoutProps {
	children: ReactNode;
}

const FlexLayout = ({ children }: FlexLayoutProps) => {
	return (
		<Flex flexDirection="column">
			<Header />
			<main>{children}</main>
		</Flex>
	);
};

export { FlexLayout };
