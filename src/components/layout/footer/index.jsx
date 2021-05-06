import React from 'react';
import socialMedia from "../../../data/socialMedia.json";
import data from "./../../../data/data";
import { FooterStyle, FooterBody, SubRight, CopyRight, MediaLink, FooterSocialMedia } from './style'
import {ContainerLayout, ButtonDefault} from '../../common'

const Footer = () => {
	return (
		<>
			<FooterStyle>
				<ContainerLayout>
					<FooterBody>
						<FooterSocialMedia>
							{socialMedia.map(({ id, name, url }) => (
								<li key={id}> 
									<MediaLink className="lined-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={`follow us on ${name}`}>
										{name}
									</MediaLink> 
								</li>
							))}
						</FooterSocialMedia>
						<div>
							<p className="text-primary quote">Готовы сделать следующий шаг и работать вместе?</p>
							<ButtonDefault href="https://t.me/jossdesign" target="_blank"> Заказать дизайн </ButtonDefault>
						</div>
					</FooterBody>
					<div className="box">
						<SubRight> Good design doesn't date. Bad design does. </SubRight>
						<CopyRight className="text-dark">
							©&nbsp;2021,&nbsp;Created by {data.SiteAuthor} </CopyRight>
					</div>
				</ContainerLayout>
			</FooterStyle>
		</>
	)
}

export default Footer;