import { Carousel } from '@mantine/carousel';
import {
  Avatar,
  Blockquote,
  Button,
  Center,
  Group,
  Paper,
  Spoiler,
  Text,
  Title,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { SECTIONS } from '../../config/config';
import { commomStyles } from '../../styles/commmon';
const Testimonials = () => {
  const testimonials = SECTIONS.testimonials;
  const { classes, cx } = commomStyles();
  const theme = useMantineTheme();
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <>
      <Center>
        <Title order={2} className={classes.title}>
          {testimonials.title}
        </Title>
      </Center>
      <Center>
        <Text size="md" className={classes.description} maw={'60%'}>
          {testimonials.description}
        </Text>
      </Center>

      <Carousel
        withIndicators
        // height={200}
        slideSize="50%"
        slideGap="md"
        loop
        align="center"
        slidesToScroll={1}
        pb={32}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        styles={{
          indicator: {
            width: rem(12),
            height: rem(6),
            transition: 'width 250ms ease',
            backgroundColor: theme.colors.blue[5],
            '&[data-active]': {
              width: rem(40),
            },
          },
        }}
      >
        {testimonials.list.map((item, index) => {
          return (
            <Carousel.Slide key={index + ''}>
              <Paper withBorder p={8}>
                <Group>
                  <Group p={0}>
                    <Avatar size="md" radius={50} src={item.avatar} />
                    <div>
                      <Text size={'md'} fw={600}>
                        {item.name}
                      </Text>
                      <Text size={'md'} color="dimmed">
                        {item.designation}
                      </Text>
                    </div>
                  </Group>
                  <Group>
                    <Spoiler
                      maxHeight={200}
                      showLabel={
                        <Button
                          compact
                          variant="subtle"
                          size="xs"
                          rightIcon={<IconChevronRight size={12} />}
                        >
                          Show more
                        </Button>
                      }
                      hideLabel={
                        <Button
                          compact
                          variant="subtle"
                          size="xs"
                          leftIcon={<IconChevronLeft size={12} />}
                        >
                          Hide
                        </Button>
                      }
                    >
                      <Blockquote
                        style={{ whiteSpace: 'pre-line' }}
                        styles={{
                          root: { paddingTop: 0 },
                          body: { fontSize: '1rem' },
                        }}
                      >
                        {item.description}
                      </Blockquote>

                      {/* <Text style={{ whiteSpace: 'pre-line' }}>{item.description}</Text> */}
                    </Spoiler>
                  </Group>
                </Group>
              </Paper>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </>
  );
};

export { Testimonials };
