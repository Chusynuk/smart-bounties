"use client";
import {
	ConnectButton,
	RainbowKitProvider,
	darkTheme,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { Navigation } from "./components/header/header";

export default function Home() {
	return (
		<>
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<div className="z-10 white w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
					<span
						style={{ fontSize: "1.5rem", color: "#83f52c", fontWeight: "bold" }}
					>
						<Typewriter
							words={[
								"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero",
							]}
							loop={5}
							cursor
							cursorStyle="_"
							typeSpeed={20}
							deleteSpeed={50}
							delaySpeed={1000}
							// onLoopDone={handleDone}
							// onType={handleType}
						/>
					</span>
				</div>
			</main>
		</>
	);
}
