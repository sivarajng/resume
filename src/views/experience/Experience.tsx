import {
  Avatar,
  Badge,
  Card,
  Center,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { SECTIONS } from '../../config/config';

import { createStyles, rem } from '@mantine/core';
import { commomStyles } from '../../styles/commmon';
import { IconDevices } from '@tabler/icons-react';

const Feature = ({
  id,
  icon,
  designation,
  company,
  location,
  border,
  from,
  to,
  summary,
  achievement,
  tech = [],
}: any) => {
  const { classes } = commomStyles();

  let renderIcon: React.ReactNode;

  renderIcon = <IconDevices size={28} stroke={1.5} />;

  return (
    <Paper withBorder radius="md" className={classes.card} key={id}>
      <Group>
        <Avatar
          src={icon}
          color="red"
          style={{ border: border ? '1px solid #00000033' : undefined }}
        />
        <Text size="lg" weight={600} className={classes.colorTheme}>
          {company}
        </Text>
      </Group>

      <Stack spacing={5}>
        <Text size="xl" weight={600} mt="md" color={'blue'}>
          {designation}
        </Text>

        <Group position="apart">
          <Text size="sm" weight={500} color="dimmed">
            {from} - {to}
          </Text>

          <Text size="sm" weight={500} color="dimmed">
            {tech.map((t: string, idx: number) => (
              <Badge color={'gray'} variant="light" mr={2}>
                {' '}
                {t}{' '}
              </Badge>
            ))}
          </Text>
        </Group>
      </Stack>

      <Text size="md" mt="sm">
        {summary.join(', ')}
      </Text>
      <Text size="md" mt="sm">
        {achievement.join(', ')}
      </Text>
    </Paper>
  );
};

const Experience = () => {
  const { classes, cx } = commomStyles();
  const experiences = SECTIONS.experiences;

  const features = experiences.list.map((feature, index) => (
    <Feature {...feature} key={index + ''} />
  ));
  return (
    <>
      <Title order={2} className={classes.title}>
        {experiences.title}
      </Title>
      {/* 
            <Text size="md" className={classes.description}>
                {description}
            </Text> */}

      <SimpleGrid
        mt={40}
        cols={1}
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

export { Experience };
