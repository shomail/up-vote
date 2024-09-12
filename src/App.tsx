import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Footer, Container, TagsList } from './components';
import { useState } from 'react';

const queryClient = new QueryClient();

function App() {
  const [activeTagId, setActiveTagId] = useState<number | null>(null);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Footer />
        <Container activeTagId={activeTagId} />
        <TagsList handleTagClick={(tagId: number) => setActiveTagId(tagId)} />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
