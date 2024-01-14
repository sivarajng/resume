import {
  Anchor,
  Avatar,
  Badge,
  Button,
  Center,
  Container,
  Group,
  Text,
  Title,
  createStyles,
  rem,
} from '@mantine/core';
import { IconDownload, IconMail, IconStarFilled } from '@tabler/icons-react';
import Dots from '../../components/Dots';
import { SECTIONS, iconPrefix } from '../../config/config';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: rem(120),
    paddingBottom: rem(24),

    [theme.fn.smallerThan('sm')]: {
      paddingTop: rem(80),
      paddingBottom: rem(60),
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  dots: {
    position: 'absolute',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: rem(40),
    letterSpacing: -1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('xs')]: {
      textAlign: 'left',
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: 'flex',
    justifyContent: 'center',

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  control: {
    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan('xs')]: {
      height: rem(42),
      fontSize: theme.fontSizes.md,

      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

const Hero = () => {
  const { classes } = useStyles();
  const hero = SECTIONS.hero;

  return (
    <Container className={classes.wrapper}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Center my="md">
          <Avatar size={144} radius="lg" src={iconPrefix + '/static/avatar.png'} />
        </Center>
        <Title className={classes.title}>
          Hello, I'm{' '}
          <Text component="span" className={classes.highlight} inherit>
            <b>{hero.title}</b>
          </Text>{' '}
        </Title>

        <Container p={0} size={600}>
          <Text size="xl" fw={700} className={classes.description} color="teal">
            {hero.description}
          </Text>
          <Center p={12}>
            <Group>
              <Group align="center" style={{ gap: '0.3rem' }}>
                <IconMail size="1.2rem" />
                <Anchor href="mailto:sivarajng@gmail.com" target="_blank">
                  sivarajng@gmail.com
                </Anchor>
              </Group>
              <Group align="center" style={{ gap: '0.3rem' }}>
                <Avatar size="xs" radius={0} src={iconPrefix + '/images/linkedin.png'} />
                <Anchor href="https://www.linkedin.com/in/sivaraj-nagaraj" target="_blank">
                  https://www.linkedin.com/in/sivaraj-nagaraj
                </Anchor>
              </Group>
            </Group>
          </Center>
          <Center p={0}>
            <Group>
              {/* <Badge
                variant="gradient"
                gradient={{ from: 'indigo', to: 'grape', deg: 45 }}
                styles={{ inner: { textTransform: 'none' } }}
                p={'sm'}
                leftSection={<IconStarFilled size={12} style={{ marginTop: 8, color: 'white' }} />}
              >
                <Text size="md" fw={500} color="white">
                  Immediate Joiner
                </Text>
              </Badge> */}
              <Button
                download
                component="a"
                href="/resume/static/Resume_Sivaraj-Nagaraj_Full-Stack_Engineer_10YrExp.pdf"
                size="sm"
                leftIcon={<IconDownload size={12} />}
                compact
                variant="outline"
              >
                Resume
              </Button>
            </Group>
          </Center>
        </Container>
      </div>
    </Container>
  );
};

export { Hero };
