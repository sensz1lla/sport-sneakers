function Drawer() {
  return (
    <div className="overlay" style={{ display: 'none' }}>
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">Корзина <img className="btnRemove cu-p" src="/img/btn-remove.svg" alt="Remove" /></h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <img className="mr-20" src="/img/sneakers/1.jpeg" width={70} height={70} alt="Спортивные кроссовки" />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>3999 грн</b>
            </div>
            <img className="btnRemove" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem d-flex align-center">
            <img className="mr-20" src="/img/sneakers/1.jpeg" width={70} height={70} alt="Спортивные кроссовки" />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>3999 грн</b>
            </div>
            <img className="btnRemove" src="/img/btn-remove.svg" alt="Remove" />
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>7598 грн</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>399 грн</b>
            </li>
          </ul>
          <button className="btnGreen">Оформить заказ <img src="/img/arrow-right.svg" alt="Arrow Right" /></button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;