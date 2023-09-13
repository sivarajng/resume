import { ActionIcon, Affix, Container, Divider, Space, Transition, rem } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconArrowUp } from '@tabler/icons-react';
import { Academy } from '../academy/Academy';
import { Experience } from '../experience/Experience';
import { Hero } from '../hero/Hero';
import { Project } from '../project/Project';
import { Skill } from '../skill/Skill';
import { Summary } from '../summary/Summary';
import { Testimonials } from '../testimonials/Testimonials';
import { DoubleHeader } from '../../components/DoubleHeader';

const Main = () => {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <>
      <DoubleHeader />
      <Container id="summary">
        <Hero />
        <Summary />
      </Container>
      <Container size={'lg'}>
        <Divider p={12} mt={24} />
        <div id="technical-skill-sets">
          <Skill />
        </div>
        <Divider p={12} mt={24} />
        <div id="professional-experience">
          <Experience />
        </div>
        <Divider p={12} mt={24} />
      </Container>
      <Container size={'lg'} id="project-portfolio">
        <Project />
      </Container>
      <Container size={'lg'} id="academic-proficiency">
        <Divider p={12} mt={24} />
        <Academy />
        <Divider p={12} mt={24} />
      </Container>
      <Container size={'lg'} id="testimonials">
        <Testimonials />
        <Space h={120} />
      </Container>

      {/* <WhatsappShareButton title='Sivaraj Nagaraj_Full-Stack Developer_10YrExp' separator='' /> */}

      <Affix position={{ bottom: rem(20), left: rem(20) }}>
        <Transition transition="slide-up" mounted={scroll.y > 320}>
          {(transitionStyles) => (
            <ActionIcon
              size={'lg'}
              color="blue"
              variant="filled"
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              <IconArrowUp size="1rem" />
            </ActionIcon>
          )}
        </Transition>
      </Affix>
    </>
  );
};

export { Main };
