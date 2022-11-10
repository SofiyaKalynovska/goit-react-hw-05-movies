import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  background-color: #f2f2f2;
  height: 100vh;
`;
export const Navigation = styled.nav`
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`
export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 28px;
  font-weight: 500;
   &.active {
    color: red;
  }
`;