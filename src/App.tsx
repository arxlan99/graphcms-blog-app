import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

function App() {
  const a = `12`;

  return (
    <div>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
