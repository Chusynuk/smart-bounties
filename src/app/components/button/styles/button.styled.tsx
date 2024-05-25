import styled, { css } from "styled-components";
import type { IButton } from "../contracts";

const btnVariants = ({ variant }: IButton) => {
	switch (variant) {
		case "primary": {
			return css`
        background: blue;

        `;
		}
		case "secondary": {
			return css`
        background: orange;

        `;
		}
		case "tertiary": {
			return css`
        background: green;

        `;
		}
		case "quartary": {
			return css`
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);

        `;
		}

		default: {
			return null;
		}
	}
};

const ButtonStyled = styled.button<IButton>`
    ${btnVariants}
    padding: 8px;
    width: auto;
    height: 40px;
    border-radius: 4px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;


`;

export { ButtonStyled };
