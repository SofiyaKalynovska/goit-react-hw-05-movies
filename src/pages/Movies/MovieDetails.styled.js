import { Link } from "react-router-dom";
import styled from "styled-components";

export const InfoSection = styled.section`
display: flex;
gap: 10px;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`
export const MovieImg = styled.img`
width: 500px;
height: 550px;
`
export const MovieInfo = styled.div`
padding: 20px 10px;
`
export const MovieTitle = styled.h2`
font-size: 40px;
font-weight: 700;
`
export const MovieDetailsPartTitle = styled.h3`
font-size: 32px;
font-weight: 600;
margin-bottom: 20px;
`
export const MovieText = styled.p`
font-size: 24px;
margin-bottom: 20px;
`
export const AdditionalInfoTitle = styled.h3`
font-size: 26px;
font-weight: 500;
margin-bottom: 20px;
`
export const AdditionalInfoLinkItem = styled.li`
width: 30px;
margin-bottom: 20px;
`
export const AdditionalInfoLink = styled(Link)`
padding-left: 20px;
font-size: 26px;

`


