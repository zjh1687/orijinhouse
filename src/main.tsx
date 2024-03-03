import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import './styles/index.scss';
import router from './router';

const app = createRoot(document.getElementById('root')!);
app.render(<RouterProvider router={router} />);
