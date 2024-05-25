import styled from "styled-components";

const HeaderStyled = styled.nav`
    display: flex;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    height: 110px;
    padding: 16px;
`;

export { HeaderStyled };
