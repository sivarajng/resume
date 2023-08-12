import { Container, List } from '@mantine/core';
import { SECTIONS } from '../../config/config';

const Summary = () => {
  const summary = SECTIONS.summary;
  return (
    <>
      <List>
        {summary.list.map((item, index) => {
          return <List.Item key={index + ''}>{item}</List.Item>;
        })}
      </List>
    </>
  );
};

export { Summary };
