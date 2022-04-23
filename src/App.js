import { useState } from 'react';
import { useAddProductMutation, useGetGoodsQuery } from './redux';

function App() {
  const [count, setCount] = useState('');
  const [newProduct, setNewProduct] = useState('');
  const { data = [], isLoading } = useGetGoodsQuery(count);
  const [addProduct, { isError }] = useAddProductMutation();

  const handleAddProduct = async () => {
    if (newProduct) {
      await addProduct({ name: newProduct }).unwrap();
      setNewProduct('');
    }
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <input
            type='text'
            value={newProduct}
            onChange={e => setNewProduct(e.target.value)}
          />
          <button onClick={handleAddProduct}>Add Product</button>
        </div>
        <div>
          <select value={count} onChange={e => setCount(e.target.value)}>
            <option value='' key='all'>
              all
            </option>
            <option value='1' key='1'>
              1
            </option>
            <option value='2' key='2'>
              2
            </option>
            <option value='3' key='3'>
              3
            </option>
          </select>
        </div>
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
