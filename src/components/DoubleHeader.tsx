import { useEffect, useState } from 'react';
import { createStyles, Header, Container, Anchor, Group, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const props = {
  mainLinks: [
    { link: '#summary', label: 'Summary' },
    { link: '#technical-skill-sets', label: 'Technical Skills' },
    { link: '#professional-experience', label: 'Work Experience' },
    { link: '#project-portfolio', label: 'Project Portfolio' },
    { link: '#academic-proficiency', label: 'Education' },
    { link: '#testimonials', label: 'Testimonials' },
  ],
};

const HEADER_HEIGHT = rem(0);

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  links: {
    paddingTop: theme.spacing.lg,
    height: HEADER_HEIGHT,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  mainLinks: {
    marginRight: `calc(${theme.spacing.sm} * -1)`,
  },

  mainLink: {
    // textTransform: 'uppercase',
    fontSize: rem(13),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    padding: `${rem(7)} ${theme.spacing.sm}`,
    fontWeight: 700,
    borderBottom: `${rem(2)} solid transparent`,
    transition: 'border-color 100ms ease, color 100ms ease',

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      textDecoration: 'none',
    },
  },

  secondaryLink: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    fontSize: theme.fontSizes.xs,
    textTransform: 'uppercase',
    transition: 'color 100ms ease',

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      textDecoration: 'none',
    },
  },

  mainLinkActive: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottomColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 6],
  },
}));

interface LinkProps {
  label: string;
  link: string;
}

interface DoubleHeaderProps {
  mainLinks?: LinkProps[];
}

export function DoubleHeader({ mainLinks = props.mainLinks }: DoubleHeaderProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(0);

  // STICKY HEADER
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };
  // ---------------------------------------------

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<'a'>
      href={item.link}
      key={item.label}
      className={cx(classes.mainLink, { [classes.mainLinkActive]: index === active })}
      onClick={(event) => {
        // event.preventDefault();
        setActive(index);
      }}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <div className={`navbar ${stickyClass}`}>
      <Header height={HEADER_HEIGHT} mb={120}>
        <Container className={classes.inner}>
          <div className={classes.links}>
            <Group spacing={0} position="right" className={classes.mainLinks}>
              {mainItems}
            </Group>
          </div>
        </Container>
      </Header>
    </div>
  );
}
