import { Avatar, Badge, Card, Group, SimpleGrid, Table, Text, Title } from '@mantine/core';
import { SECTIONS, iconPrefix } from '../../config/config';
import { commomStyles } from '../../styles/commmon';

const Feature = ({ name, skills }: any) => {
  const tabs = skills.tabs[name].map((tab: any, index: number) => (
    <Tab tab={tab} key={index + ''} />
  ));

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group pb={12}>
        <Text weight={500}>{name}</Text>
      </Group>
      {tabs}
    </Card>
  );
};

const Tab = ({ tab }: any) => {
  const { classes } = commomStyles();
  const icon = iconPrefix + `/images/skill/${tab}.png`;

  return (
    <>
      {/* <Text size="sm" weight={500} color="dimmed"> */}
      <Badge
        size="lg"
        color={'gray'}
        variant="outline"
        m={4}
        p={14}
        styles={{
          inner: {
            textTransform: 'none',
          },
        }}
        leftSection={<Avatar size={'xs'} src={icon} radius={0} />}
      >
        {tab}
      </Badge>
      {/* </Text> */}
    </>
  );
};

const Skill = () => {
  const skills: any = SECTIONS.skills;
  const { classes, cx } = commomStyles();

  const gridStyle = [
    { maxWidth: 980, cols: 2, spacing: 'xl' },
    { maxWidth: 755, cols: 1, spacing: 'xl' },
  ];

  return (
    <>
      <Title order={2} className={classes.title}>
        {skills.title}
      </Title>

      <SimpleGrid
        // mt={40}
        cols={2}
        breakpoints={gridStyle}
      >
        <SimpleGrid
          // mt={40}
          cols={1}
          breakpoints={gridStyle}
        >
          <SimpleGrid
            // mt={40}
            cols={1}
            breakpoints={gridStyle}
          >
            <Feature name={'Programming'} skills={skills} />
          </SimpleGrid>

          <SimpleGrid
            // mt={40}
            cols={1}
            breakpoints={gridStyle}
          >
            <Feature name={'Cloud Platforms'} skills={skills} />
          </SimpleGrid>

          <SimpleGrid
            // mt={40}
            cols={1}
            breakpoints={gridStyle}
          >
            <Feature name={'Streams / Verticals'} skills={skills} />
          </SimpleGrid>
        </SimpleGrid>

        <SimpleGrid
          // mt={40}
          cols={1}
          breakpoints={gridStyle}
        >
          <Feature name={'Frameworks, Applications, Libraries and Tools'} skills={skills} />
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid mt={12} cols={1} breakpoints={gridStyle}>
        <SimpleGrid
          // mt={40}
          cols={1}
          breakpoints={gridStyle}
        >
          <Feature name={'Products'} skills={skills} />
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
};

export { Skill };
