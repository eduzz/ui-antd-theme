import { Button, Divider, Form, Input, Tooltip, Typography } from 'antd';

import { ThemeProvider } from '..';

function App() {
  return (
    <ThemeProvider brandColor='orbita' mode='light'>
      <section style={{ padding: 12 }}>
        <Form layout='vertical'>
          <Form.Item label='Teste'>
            <Input />
          </Form.Item>

          <Form.Item label='Teste'>
            <Input />
          </Form.Item>
        </Form>
        <Button type='primary'>Teste</Button>
      </section>

      <Divider />

      <section style={{ padding: '1rem' }}>
        <Typography.Title level={1}>H1 - Roboto (38px)</Typography.Title>
        <Typography.Title level={2}>H2 - Roboto (30px)</Typography.Title>
        <Typography.Title level={3}>H3 - Roboto (24px)</Typography.Title>
        <Typography.Title level={4}>H4 - Roboto (20px)</Typography.Title>
        <Typography.Title level={5}>H5 - Roboto (16px)</Typography.Title>

        <Typography.Paragraph>Paragraph - Roboto (16px)</Typography.Paragraph>
      </section>

      <Divider />

      <section style={{ padding: '1rem' }}>
        <Tooltip placement='right' title='Lorem ipsum dolor sit amet consectur.'>
          <Typography.Text>Hover me to see the tooltip.</Typography.Text>
        </Tooltip>
      </section>

      <Divider />

      <Button type='link'>This is a link</Button>
      <Typography.Link>This is a link too</Typography.Link>
    </ThemeProvider>
  );
}

export default App;
