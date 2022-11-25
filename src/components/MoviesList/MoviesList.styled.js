import styled from "styled-components";

export const MoviesList = styled.ul`
gap: 10px;
display: flex;
flex-wrap: wrap;
text-align: center;
justify-content: center;
@media screen and (min-width: 1129px){
  justify-content: flex-start;
  margin-left: 30px;
}
@media screen and (min-width: 1509px){
  justify-content: center;
  margin-left: 0;
}
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
width: 350px;
height: 35px;
font-size: 24px;
font-weight: 600;
`