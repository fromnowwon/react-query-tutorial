import React from 'react';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import ReactDOM from 'react-dom/client';
import App from './App';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<QueryClientProvider client={queryClient}>
    	<App />
			<ReactQueryDevtools initialOpem={false} position='bottom-right' />
		</QueryClientProvider>
  </React.StrictMode>
);