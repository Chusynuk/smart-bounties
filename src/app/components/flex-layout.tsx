import { Flex } from "./";
import { Header } from "./header/header";

interface FlexLayoutProps {
	children: React.ReactNode;
}

export const FlexLayout = ({ children }: FlexLayoutProps) => {
	return (
		<Flex flexDirection="column" overflowY="hidden">
			<Flex flexDirection="column">
				<Header />
				{children}
			</Flex>
		</Flex>
	);
};
