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
      <Button onClick={() => window.location ='https://drive.google.com/file/d/1g3Eant_ExWU37iHpX76Zg9va0Hsb70CX/view?fbclid=IwAR1R3XE-mLx7ZR3gYcUGrZcrMVFaSvHCDKuE1LXyO11k0E-er52zSyQrXOM'}>Learn More</Button>
    </LeftSection>
  </Section>

);

export default Hero;