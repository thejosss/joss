import Img from "gatsby-image"
import styled from 'styled-components';
import variables from '../../data/variables';

export const AboutSection = styled.section`
  text-align: center;
  @media only screen and (min-width: ${variables.breakpointLarge}) {
    display: grid;
    grid-template-columns: 1fr 1.25fr;
    grid-gap: 9.2rem;
    text-align: left;
  }
`
export const Avatar =styled(Img)`
  border-radius: 5px;
  width: 100%;
`
export const Title = styled.h1`
  font-size: 3rem;
  text-transform: none;
  font-family: "GT-Walsheim-Pro-Bold";
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: 2rem;
  }
`
export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #232323;
  text-transform: none;
  a {
    color: #3F51B5;
    text-decoration: underline;
  }
`
export const SubTitle = styled.h2`
  font-family: "GT-Walsheim-Pro-Medium";
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  text-transform: none;
  word-spacing: 8px;
  @media(min-width: ${variables.breakpointPhone}) {
    font-size: 1.6em;
  }
`