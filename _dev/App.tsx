import { Button } from 'antd';

import { ThemeProvider } from '..';

function App() {
  return (
    <ThemeProvider brandColor='orbita'>
      <Button>Teste</Button>
    </ThemeProvider>
  );
}

export default App;
