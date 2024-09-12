import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Footer, Container, TagsList } from './components';
import { useState } from 'react';

const queryClient = new QueryClient();

function App() {
  const [activeTag, setActiveTag] = useState('');
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Footer />
        <Container activeTag={activeTag} />
        <TagsList handleTagClick={(tag: string) => setActiveTag(tag)} activeTag={activeTag} />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
