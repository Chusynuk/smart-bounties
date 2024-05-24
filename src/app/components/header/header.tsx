"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import Box from "../box/box";
import { HeaderStyled } from "./header.styled";

export const Header = () => {
	return (
		<HeaderStyled>
			<Link
				aria-hidden="true"
				href="https://vercel.com?utm_source=create-next-app"
			>
				hello
			</Link>
			<Box>
				<ConnectButton />
			</Box>
		</HeaderStyled>
	);
};
