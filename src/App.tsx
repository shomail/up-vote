import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Footer, Container, TagsList } from './components';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Footer />
        <Container />
        <TagsList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
