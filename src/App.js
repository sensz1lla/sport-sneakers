function App() {
  return (
    <div className="app clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img src="/img/logo.png" width={40} height={40} alt="Логотип"/>
          <div>
            <h3 className="text-uppercase">Sport Sneakers</h3>
            <p className="opacity-5">Магазин спортивных кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img src="/img/card.svg" width={18} height={18}/>
            <span>1205 грн.</span>
          </li>
          <li>
            <img src="/img/user.svg" width={20} height={20}/>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>

        <div className="cards d-flex justify-between">
          <div className="card">
            <img src="/img/sneakers/1.jpeg" width={133} height={112} alt="Спортивные кроссовки"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>3999 грн</b>
              </div>
              <button className="button">
              <img src="/img/plus.svg" width={11} height={11} alt="Plus"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/2.jpeg" width={133} height={112} alt="Спортивные кроссовки"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>3999 грн</b>
              </div>
              <button className="button">
              <img src="/img/plus.svg" width={11} height={11} alt="Plus"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/3.jpeg" width={133} height={112} alt="Спортивные кроссовки"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>3999 грн</b>
              </div>
              <button className="button">
              <img src="/img/plus.svg" width={11} height={11} alt="Plus"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/4.jpeg" width={133} height={112} alt="Спортивные кроссовки"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>3999 грн</b>
              </div>
              <button className="button">
              <img src="/img/plus.svg" width={11} height={11} alt="Plus"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
