"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { Box } from "components";
import Link from "next/link";
import { HeaderStyled } from "./styles/header.styled";

const Header = () => {
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

export { Header };
