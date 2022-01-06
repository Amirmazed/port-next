import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (

  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Hi, I'm Amir Mazed. 
      Full Stack Web Developer. Experienced in Javascript, React, Node.js, Express.js, Mongodb
      </SectionText>
      <Button onClick={() => window.location ='https://drive.google.com/file/d/1HTz8c6rEzDWYQ4XW7G1KCw716tCCYeb9/view?usp=sharing'}>Learn More</Button>
    </LeftSection>
  </Section>

);

export default Hero;