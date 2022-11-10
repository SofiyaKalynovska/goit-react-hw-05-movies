import styled from "styled-components";

export const MoviesList = styled.ul`
gap: 10px;
display: flex;
flex-wrap: wrap;
text-align: center;
justify-content: center;
`
export const MovieItem = styled.li`
margin: 10px;
width: max-content;
`
export const Poster = styled.img`
  width: 350px;
  height: 500px;
  margin-bottom: 10px;
  `
export const MovieTitle = styled.h3`
font-size: 24px;
font-weight: 600;
`