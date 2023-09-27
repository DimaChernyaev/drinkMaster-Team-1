import { Button } from './AddToFavoriteBtn.style';

export const AddToFavoriteBtn = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};
