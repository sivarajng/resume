import {
  Avatar,
  Badge,
  Divider,
  Group,
  List,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { SECTIONS } from '../../config/config';

import { IconCircleFilled, IconDevices } from '@tabler/icons-react';
import { commomStyles } from '../../styles/commmon';

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
  const theme = useMantineTheme();

  renderIcon = <IconDevices size={28} stroke={1.5} />;

  return (
    <Paper withBorder radius="md" className={classes.card} key={id}>
      <Group>
        <Avatar src={icon} style={{ border: border ? '1px solid #00000033' : undefined }} />
        <Text size="lg" weight={600} className={classes.colorTheme}>
          {company}
        </Text>
      </Group>

      <Stack spacing={5}>
        <Text size="xl" weight={600} mt="xs" color={'blue'}>
          {designation}
        </Text>

        <Group position="apart">
          <Text size="sm" weight={500} color="dimmed">
            {from} - {to}
          </Text>

          <Text size="sm" weight={500} color="dimmed">
            {tech.map((t: string, idx: number) => (
              <Badge
                color={'gray.6'}
                variant="light"
                mr={2}
                styles={{
                  inner: {
                    textTransform: 'none',
                  },
                }}
              >
                {t}
              </Badge>
            ))}
          </Text>
        </Group>
      </Stack>

      <Divider pb={4} mt={10} color="gray.3" />
      <Text fw={500} color="dimmed">
        Summary
      </Text>

      <List size={'sm'}>
        {summary.map((item: any, index: number) => {
          return (
            <List.Item
              icon={<IconCircleFilled size="0.5rem" style={{ color: theme.colors.teal[5] }} />}
              key={index + 'sum'}
            >
              <Text dangerouslySetInnerHTML={{ __html: item }} />
            </List.Item>
          );
        })}
      </List>
      <Text fw={500} pt={8} color="dimmed">
        Achievements
      </Text>
      <List size={'sm'}>
        {achievement.map((item: any, index: number) => {
          return (
            <List.Item
              icon={<IconCircleFilled size="0.5rem" style={{ color: theme.colors.teal[5] }} />}
              key={index + 'sum'}
            >
              <Text dangerouslySetInnerHTML={{ __html: item }} />
            </List.Item>
          );
        })}
      </List>
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

      {/* <Text size="md" className={classes.description}>
        {experiences.description}
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
