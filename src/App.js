import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 3999,
    imageUrl: '/img/sneakers/1.jpeg'
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 4299,
    imageUrl: '/img/sneakers/2.jpeg'
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 2699,
    imageUrl: '/img/sneakers/3.jpeg'
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 2999,
    imageUrl: '/img/sneakers/4.jpeg'
  },
];

function App() {
  return (
    <div className="app clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Поиск ..."/>
          </div>
        </div>

        <div className="cards d-flex">
          {arr.map((obj) => (

            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClick={() => console.log(obj)}
            />

          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
