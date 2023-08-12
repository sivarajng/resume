import { Avatar, Card, Container, Group, List, SimpleGrid, Text, Title } from '@mantine/core';
import { SECTIONS } from '../../config/config';
import { commomStyles } from '../../styles/commmon';

const Feature = ({ id, name, tag, icon }: any) => {
  const { classes } = commomStyles();

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group>
        <Avatar size={'sm'} src={icon} />
        <Text weight={500}>{name}</Text>
      </Group>
    </Card>
  );
};

const Skill = () => {
  const skills = SECTIONS.skills;
  const { classes, cx } = commomStyles();
  const features = skills.list.map((feature, index) => <Feature {...feature} key={index + ''} />);

  return (
    <>
      <Title order={2} className={classes.title}>
        {skills.title}
      </Title>

      <SimpleGrid
        // mt={40}
        cols={4}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
      >
        {features}
      </SimpleGrid>
    </>
  );
};

export { Skill };
