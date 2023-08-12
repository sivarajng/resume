import { Container, List, Title, useMantineTheme } from '@mantine/core';
import { SECTIONS } from '../../config/config';
import { commomStyles } from '../../styles/commmon';
import { IconCircle, IconCircleFilled } from '@tabler/icons-react';

const Summary = () => {
  const summary = SECTIONS.summary;
  const { classes } = commomStyles();
  const theme = useMantineTheme();

  return (
    <>
      <Title order={2} className={classes.title}>
        {summary.title}
      </Title>
      <List>
        {summary.list.map((item, index) => {
          return (
            <List.Item
              icon={<IconCircleFilled size="0.5rem" style={{ color: theme.colors.teal[5] }} />}
              key={index + ''}
            >
              {item}
            </List.Item>
          );
        })}
      </List>
    </>
  );
};

export { Summary };
