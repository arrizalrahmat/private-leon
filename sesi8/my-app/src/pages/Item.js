import { useParams } from 'react-router-dom';
import { getItems } from '../items';

const Item = () => {
  const params = useParams();
  const items = getItems();
  const item = items.find(
    (e) => e.id.toString() === params.itemId
  );
  return (
    <div>
      <h1>Item {params.itemId}</h1>
      <h5>name: {item.name}</h5>
      <h5>power: {item.power}</h5>
    </div>
  );
};

export default Item;
