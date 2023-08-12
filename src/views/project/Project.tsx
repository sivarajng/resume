import { Container, Divider, Space } from '@mantine/core';
import { Hero } from '../hero/Hero';
import { Summary } from '../summary/Summary';
import { Academy } from '../academy/Academy';

const Main = () => {
  return (
    <Container>
      <Hero />
      <Summary />
      <Divider p={12} mt={24} />
      <Academy />
      <Space h={'xl'} />
    </Container>
  );
};

export { Main };
