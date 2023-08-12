import { Container, Divider, Space } from '@mantine/core';
import { Hero } from '../hero/Hero';
import { Summary } from '../summary/Summary';
import { Academy } from '../academy/Academy';
import { Experience } from '../experience/Experience';
import { Skill } from '../skill/Skill';
import { Testimonials } from '../testimonials/Testimonials';

const Main = () => {
  return (
    <Container>
      <Hero />
      <Summary />
      <Divider p={12} mt={24} />
      <Experience />
      <Divider p={12} mt={24} />
      <Skill />
      <Divider p={12} mt={24} />
      <Academy />
      <Divider p={12} mt={24} />
      <Testimonials />
      <Space h={120} />
    </Container>
  );
};

export { Main };
