import { fireEvent, render, screen } from "@testing-library/react";

import Box from "./box";

describe("Box", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<Box />);
		expect(baseElement).toBeTruthy();
	});

	it("should handle click event", () => {
		const handleClick = jest.fn();
		render(<Box onClick={handleClick} />);
		fireEvent.click(screen.getByTestId("box"));
		expect(handleClick).toHaveBeenCalled();
	});
});
