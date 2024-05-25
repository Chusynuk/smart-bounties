"use client";

import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { WagmiProvider, cookieToInitialState } from "wagmi";
import { ReactStateProvider } from "./react-context-provider";
import { UiProvider } from "./ui-provider";

import { config } from "lib/config";

const queryClient = new QueryClient();

type MainProviderProps = {
	children: ReactNode;
	cookie?: string | null;
};

export function MainProvider({ children, cookie }: MainProviderProps) {
	const initialState = cookieToInitialState(config, cookie);

	return (
		<WagmiProvider config={config} initialState={initialState}>
			<QueryClientProvider client={queryClient}>
				<RainbowKitProvider
					theme={darkTheme({
						accentColor: "#0E76FD",
						accentColorForeground: "white",
						borderRadius: "large",
						fontStack: "system",
						overlayBlur: "small",
					})}
				>
					<ReactStateProvider>
						<UiProvider>{children}</UiProvider>
					</ReactStateProvider>
				</RainbowKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
}
