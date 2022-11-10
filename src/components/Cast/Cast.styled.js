import styled from "styled-components";

export const CastList = styled.ul`
margin-bottom: 10px;
display: flex;
flex-wrap: wrap;
gap: 20px;
`
export const CastItem = styled.li`
padding: 10px;
display: flex;
height: max-content;
flex-direction: column;
width: 300px;
`
export const CastPhoto = styled.img`
max-width: 200px;
max-height: 300px;
margin: 0 auto;
`
export const CastText = styled.p`
font-size: 24px;
`