import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel: +8801624245184'>
            016-2424-5184
          </LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto: amirmazed7@gmail.com'>
          amirmazed7@gmail.com
          </LinkItem>
        </LinkColumn>

       
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Inoovating one project at a time</Slogan>
        </CompanyContainer>

        <SocialIcons href='https://github.com/Amirmazed'>
        <AiFillGithub size='3rem' />
        </SocialIcons>

      <SocialIcons href='https://www.linkedin.com/in/amir-mohammad-mazed-711267227/'>
      <AiFillLinkedin size='3rem' />
      </SocialIcons>

      <SocialIcons href='https://www.facebook.com/amir.mazed.35'>
        <AiFillFacebook size='3rem' />
      </SocialIcons>


      </SocialIconsContainer>


    </FooterWrapper>
  );
};

export default Footer;
