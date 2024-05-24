"use client";

import { type Chain, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http, cookieStorage, createStorage } from "wagmi";
import { blastSepolia, bscTestnet, sepolia } from "wagmi/chains";

const projectId = "a69e1566c04e28f4ae629b951c8b6736";

const supportedChains: Chain[] = [sepolia];

export const config = getDefaultConfig({
	appName: "WalletConnection",
	projectId,
	chains: supportedChains as any,
	ssr: true,
	storage: createStorage({
		storage: cookieStorage,
	}),
	transports: supportedChains.reduce(
		(obj, chain) => ({ ...obj, [chain.id]: http() }),
		{},
	),
});
