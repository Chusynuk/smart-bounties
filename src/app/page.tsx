"use client";
import { Button } from "components";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
	return (
		<>
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<div className="z-10 white w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
					<Button onClick={() => console.log("HELLOO")}>HELLLOO</Button>
					<span
						onKeyDown={() => console.log("CLIKED")}
						style={{ fontSize: "1.5rem", color: "#83f52c", fontWeight: "bold" }}
					>
						<Typewriter
							words={[
								"Would you like to solve issues on Github projects and get paid for it in Crypto? Click on me if you would like to hear more about it.",
							]}
							loop={5}
							cursor={true}
							cursorStyle="_"
							typeSpeed={20}
							// deleteSpeed={50}
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
