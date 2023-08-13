import { List, Text, Title, useMantineTheme } from '@mantine/core';
import { IconCircleFilled } from '@tabler/icons-react';
import { SECTIONS } from '../../config/config';
import { commomStyles } from '../../styles/commmon';

const Summary = () => {
  const summary = SECTIONS.summary;
  const { classes } = commomStyles();
  const theme = useMantineTheme();

  return (
    <>
      <Title order={2} className={classes.title}>
        {summary.title}
      </Title>
      <List spacing={'lg'}>
        {summary.list.map((item, index) => {
          return (
            <List.Item
              icon={<IconCircleFilled size="0.5rem" style={{ color: theme.colors.teal[5] }} />}
              key={index + ''}
            >
              <Text dangerouslySetInnerHTML={{ __html: item }} />
            </List.Item>
          );
        })}
      </List>
    </>
  );
};

export { Summary };
