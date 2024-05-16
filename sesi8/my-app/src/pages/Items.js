import { getItems } from '../items';
import { Outlet, useNavigate } from 'react-router-dom';

const Items = () => {
  const items = getItems();
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(id.toString());
  };

  return (
    <div>
      <h1>Items</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>
                  <button
                    onClick={() => handleClick(item.id)}
                  >
                    Show Detail
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Outlet />
    </div>
  );
};

export default Items;
