import { Header, CommentsList } from '../';

interface ContainerProps {
  activeTagId: number | null;
}

export const Container = ({ activeTagId }: ContainerProps) => {
  return (
    <div className="container">
      <Header />
      <CommentsList activeTagId={activeTagId} />
    </div>
  );
};
