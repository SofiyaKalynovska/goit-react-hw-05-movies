import styled from "styled-components";

export const CastList = styled.ul`
margin-bottom: 10px;
padding: 20px;
display: flex;
flex-wrap: wrap;
gap: 20px;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`
export const CastItem = styled.li`
padding: 10px;
display: flex;
height: max-content;
flex-direction: column;
width: 300px;
`
export const CastPhoto = styled.img`
width: 200px;
height: 300px;

`
export const CastText = styled.p`
font-size: 24px;
`
