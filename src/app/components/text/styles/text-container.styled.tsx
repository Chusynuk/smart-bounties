import styled from "styled-components";
import { color, compose, space, typography } from "styled-system";

import type { TextProps } from "../contracts";

const TextContainer = styled.span<TextProps>(compose(typography, space, color));

export default TextContainer;
