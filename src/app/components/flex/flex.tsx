"use client";
import styled from "styled-components";

import { Box } from "../box/box";
import type { IBox } from "../box/contracts";

export type FlexProps = IBox;

const Flex = styled(Box)<FlexProps>({
	display: "flex",
});

export { Flex };
