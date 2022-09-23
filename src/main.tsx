import { NovuProvider } from '@novu/notification-center';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NovuProvider
      subscriberId={import.meta.env.SUBSCRIBER_ID}
      applicationIdentifier={import.meta.env.APP_ID}
    >
      <App />
    </NovuProvider>
  </React.StrictMode>,
);
