import { Avatar, Badge, Card, Group, SimpleGrid, Space, Table, Text, Title } from '@mantine/core';
import { SECTIONS, iconPrefix } from '../../config/config';
import { commomStyles } from '../../styles/commmon';

const Feature = ({ name, skills }: any) => {
  const tabs = skills.tabs[name].map((tab: any, index: number) => (
    <Tab tab={tab} key={index + ''} name={name} />
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

const Tab = ({ tab, name }: any) => {
  const { classes } = commomStyles();
  const icon = iconPrefix + `/images/skill/${tab.replace('/', '')}.png`;

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
        leftSection={name != 'Others' ? <Avatar size={'xs'} src={icon} radius={0} /> : undefined}
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

      <SimpleGrid cols={2} breakpoints={gridStyle}>
        <Feature name={'Programming'} skills={skills} />
        <Feature name={'Frontend and Mobile'} skills={skills} />
        <Feature name={'Backend'} skills={skills} />
        <Feature name={'Data'} skills={skills} />
        <Feature name={'Cloud'} skills={skills} />
        <Feature name={'DevOps'} skills={skills} />
        <Feature name={'Product'} skills={skills} />
        <Feature name={'Secondary Skills'} skills={skills} />
      </SimpleGrid>
      <Space h={'md'} />
      <SimpleGrid cols={1} breakpoints={gridStyle}>
        <Feature name={'Others'} skills={skills} />
      </SimpleGrid>
    </>
  );
};

export { Skill };
