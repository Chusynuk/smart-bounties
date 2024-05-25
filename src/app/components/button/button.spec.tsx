import { fireEvent, render } from "@testing-library/react";

import { Button } from "./button";

describe("Button", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<Button onClick={() => null} />);
		expect(baseElement).toBeTruthy();
	});

	it("should render loading successfully", () => {
		const { baseElement } = render(
			<Button loading={true} onClick={() => null} />,
		);
		expect(baseElement).toBeTruthy();
	});

	it("should render submit type successfully", () => {
		const { baseElement } = render(
			<Button submit={true} onClick={() => null} />,
		);
		expect(baseElement).toBeTruthy();
	});

	it("should render outlined type successfully", () => {
		const { baseElement } = render(
			<Button outlined={true} onClick={() => null} />,
		);
		expect(baseElement).toBeTruthy();
	});

	it("should render secondary variant successfully", () => {
		const { baseElement } = render(
			<Button variant="secondary" onClick={() => null} />,
		);
		expect(baseElement).toBeTruthy();
	});

	it("should render tertiary variant successfully", () => {
		const { baseElement } = render(
			<Button variant="tertiary" onClick={() => null} />,
		);
		expect(baseElement).toBeTruthy();
	});

	it("should render button with icon successfully", () => {
		const { baseElement } = render(<Button onClick={() => null}>Add</Button>);
		expect(baseElement).toBeTruthy();
	});

	it("should trigger onClick successfully", () => {
		const onClick = jest.fn();
		const { getByText } = render(<Button onClick={onClick}>Button </Button>);
		fireEvent.click(getByText("Button"));
		expect(onClick).toHaveBeenCalled();
	});

	it("should not trigger onClick successfully", () => {
		const onClick = jest.fn();
		const { getByText } = render(
			<Button disabled={true} onClick={onClick}>
				Button
			</Button>,
		);
		fireEvent.click(getByText("Button"));
		expect(onClick).not.toHaveBeenCalled();
	});
});
