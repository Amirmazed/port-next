import React from 'react';
import { DiFirebase, DiNodejs, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat adipisci non nulla rem itaque beatae?
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br/>
              React.js
            </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiNodejs size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br/>
              Express.js and MongoDB
            </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiZend size="3rem"/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br/>
              tools like Figma and Adobe XD
            </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
