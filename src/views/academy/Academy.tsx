import { Badge, Card, Center, Group, SimpleGrid, Text, Title } from '@mantine/core';
import { SECTIONS } from '../../config/config';

import { createStyles, rem } from '@mantine/core';
import { commomStyles } from '../../styles/commmon';

const educationStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: rem(96),
    paddingBottom: rem(96),
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  dots: {
    position: 'absolute',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

    '@media (max-width: 755px)': {
      display: 'none',
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    fontWeight: 600,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    textAlign: 'center',
    [theme.fn.smallerThan('sm')]: {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',
    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left',
    },
  },

  card: {
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 150ms ease, box-shadow 100ms ease',
    padding: theme.spacing.xl,
    paddingLeft: rem(48),

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.02)',
    },

    // '&::before': {
    //     content: '""',
    //     position: 'absolute',
    //     top: 0,
    //     bottom: 0,
    //     left: 0,
    //     width: 6,
    //     backgroundImage: theme.fn.linearGradient(
    //         0,
    //         theme.colors.blue[6],
    //         theme.colors.cyan[6],
    //     ),
    // },
  },
}));

const Feature = ({
  id,
  course,
  institute,
  year,
  score,
  location,
  affiliation,
  cgpa,
  streams,
}: any) => {
  const { classes } = educationStyles();

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section p={8} bg={'blue.0'}>
        <Text size="lg" color="blue.8" weight={500}>
          {id}
        </Text>
        {!!course && (
          <Text size="sm" color="blue" weight={500}>
            {course}
          </Text>
        )}
      </Card.Section>

      <Group position="apart" mt="md">
        <Text weight={500}>{institute}</Text>
      </Group>

      <Text size="sm" color="dimmed">
        {location}
      </Text>
      <Group position="apart">
        <Text size="sm" weight={400} color="dimmed">
          Year of Pass: <Badge color="gray">{year}</Badge>
        </Text>
        <Badge size={'xl'} color="teal.8">
          {score}
        </Badge>
      </Group>
    </Card>
  );
};

const Academy = () => {
  const { classes, cx } = commomStyles();
  const academy = SECTIONS.academy;

  const features = academy.list.map((feature, index) => <Feature {...feature} key={index + ''} />);
  return (
    <>
      <Title order={2} className={classes.title}>
        {academy.title}
      </Title>
      {/* 
            <Text size="md" className={classes.description}>
                {description}
            </Text> */}

      <SimpleGrid
        mt={40}
        cols={3}
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

export { Academy };
