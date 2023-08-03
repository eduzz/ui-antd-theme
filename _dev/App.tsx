import { Button, Form, Input } from 'antd';

import { ThemeProvider } from '..';

function App() {
  return (
    <ThemeProvider brandColor='orbita'>
      <div style={{ padding: 12 }}>
        <Form layout='vertical'>
          <Form.Item label='Teste'>
            <Input />
          </Form.Item>

          <Form.Item label='Teste'>
            <Input />
          </Form.Item>
        </Form>
        <Button>Teste</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
