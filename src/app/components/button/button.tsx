"use client";

import type { IButton } from "./contracts";
import { ButtonStyled } from "./styles/button.styled";

const Button = ({ children, variant, onClick }: IButton) => {
	return (
		<ButtonStyled variant={variant} onClick={onClick}>
			{children}
		</ButtonStyled>
	);
};

export { Button };
