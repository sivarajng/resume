import {
  Badge,
  Button,
  Divider,
  Group,
  List,
  Paper,
  SimpleGrid,
  Spoiler,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { SECTIONS } from '../../config/config';

import {
  IconChevronLeft,
  IconChevronRight,
  IconCircleFilled,
  IconDevices,
} from '@tabler/icons-react';
import { commomStyles } from '../../styles/commmon';

const Feature = ({
  id,
  name,
  client,
  coreApplications = [],
  teamSize,
  from,
  to,
  summary = [],
  roles = [],
}: any) => {
  const { classes } = commomStyles();

  let renderIcon: React.ReactNode;
  const theme = useMantineTheme();

  renderIcon = <IconDevices size={28} stroke={1.5} />;

  return (
    <Paper withBorder radius="md" className={classes.card} key={id}>
      <Text size="lg" weight={600} className={classes.colorTheme}>
        {name}
      </Text>

      <Stack spacing={5}>
        {/* <Text size="sm" weight={600} color={'blue'}>
          {client}
        </Text> */}

        <Group position="apart" mt={'xs'}>
          <Text size="sm" weight={500} color="dimmed">
            {coreApplications.map((t: string, idx: number) => (
              <Badge
                size={'md'}
                color={'purple.6'}
                variant="light"
                mr={4}
                mb={4}
                styles={{
                  inner: { textTransform: 'none' },
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

      <Spoiler
        maxHeight={80}
        showLabel={
          <Button compact variant="subtle" size="xs" rightIcon={<IconChevronRight size={12} />}>
            Show more
          </Button>
        }
        hideLabel={
          <Button compact variant="subtle" size="xs" leftIcon={<IconChevronLeft size={12} />}>
            Hide
          </Button>
        }
      >
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
      </Spoiler>

      <Text fw={500} pt={8} color="dimmed">
        Roles
      </Text>

      <Spoiler
        maxHeight={80}
        showLabel={
          <Button compact variant="subtle" size="xs" rightIcon={<IconChevronRight size={12} />}>
            Show more
          </Button>
        }
        hideLabel={
          <Button compact variant="subtle" size="xs" leftIcon={<IconChevronLeft size={12} />}>
            Hide
          </Button>
        }
      >
        <List size={'sm'}>
          {roles.map((item: any, index: number) => {
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
      </Spoiler>
    </Paper>
  );
};

const Project = () => {
  const { classes, cx } = commomStyles();
  const projects = SECTIONS.projects;

  const features = projects.list.map((feature, index) => <Feature {...feature} key={index + ''} />);
  return (
    <>
      <Title order={2} className={classes.title}>
        {projects.title}
      </Title>

      {/* <Text size="md" className={classes.description}>
        {projects.description}
      </Text> */}

      <SimpleGrid
        mt={40}
        cols={2}
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

export { Project };
