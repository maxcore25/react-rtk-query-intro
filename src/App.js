import { useGetGoodsQuery } from './redux';

function App() {
  const { data = [], isLoading } = useGetGoodsQuery();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className='App'>
      <header className='App-header'>
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
