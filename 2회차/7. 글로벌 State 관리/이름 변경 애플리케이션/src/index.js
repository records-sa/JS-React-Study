import { ReactDOM } from 'react-dom';
import { AdminFlagProvider } from './components/providers/AdminFlagProvider';
import { App } from './App';

ReactDOM.render(
  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>,
  document.getElementById('root')
);
