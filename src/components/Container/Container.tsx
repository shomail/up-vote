import { Header, CommentsList } from '../';

interface ContainerProps {
  activeTag: string;
}

export const Container = ({ activeTag }: ContainerProps) => {
  return (
    <div className="container">
      <Header />
      <CommentsList activeTag={activeTag} />
    </div>
  );
};
