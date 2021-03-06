import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "IMG_2211.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="the joss photo" />
            </div> 
            <div>
              <Title> Александр Ткачук, дизайнер</Title>
              <Text> Я диджитал дизайнер&nbsp;<b className="text-primary lined-link">с 3-х летним опытом</b>&nbsp;в создании сайтов и веб-продуктов. </Text>
              <Text> I love working with modern technologies, building and designing awesome projects. I prefer minimalistic & clean designs with strong user experience.</Text>
              <Text> behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </Text>
              <ResumeButton href="resume.pdf" target="_blank"> Посмотреть резюме </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
