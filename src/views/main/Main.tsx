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

const Main = () => {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <>
      <Container>
        <Hero />
        <Summary />
        <Divider p={12} mt={24} />
        <Skill />
        <Divider p={12} mt={24} />
        <Experience />
        <Divider p={12} mt={24} />
      </Container>
      <Container size={'lg'}>
        <Project />
      </Container>
      <Container>
        <Divider p={12} mt={24} />
        <Academy />
        <Divider p={12} mt={24} />
      </Container>
      <Container size={'lg'}>
        <Testimonials />
        <Space h={120} />
      </Container>

      {/* <WhatsappShareButton title='Sivaraj Nagaraj_Multi-Stack Developer_10YrExp' separator='' /> */}

      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition="slide-up" mounted={scroll.y > 320}>
          {(transitionStyles) => (
            <ActionIcon
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
