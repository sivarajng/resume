import { Avatar, Badge, Card, Group, Table, Text, Title } from '@mantine/core';
import { SECTIONS } from '../../config/config';
import { commomStyles } from '../../styles/commmon';

// Example usage:
const materialColors = [
  'blue',
  // 'orange',
  // 'pink',
  // 'purple',
  // 'deep purple',
  // 'indigo',
  // 'blue',
  // 'light blue',
  // 'cyan',
  // 'teal',
  // 'green',
  // 'light green',
  // 'lime'
];

function getRandomColor(colors: string[]): string {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

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
  const skills: any = SECTIONS.skills;
  const { classes, cx } = commomStyles();
  const features = skills.list.map((feature: any, index: number) => (
    <Feature {...feature} key={index + ''} />
  ));

  const rows = Object.keys(skills.tabs).map((key: string) => (
    <tr key={key}>
      <th>{key}</th>
      <td>
        <Text size="sm" weight={500} color="dimmed">
          {skills.tabs[key].map((t: string, idx: number) => (
            <Badge
              size="lg"
              color={getRandomColor(materialColors)}
              variant="light"
              m={4}
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
      </td>
    </tr>
  ));

  return (
    <>
      <Title order={2} className={classes.title}>
        {skills.title}
      </Title>

      <Table verticalSpacing="md" withBorder>
        <tbody>{rows}</tbody>
      </Table>

      {/* <SimpleGrid
        // mt={40}
        cols={4}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
      >
        {features}
      </SimpleGrid> */}
    </>
  );
};

export { Skill };
