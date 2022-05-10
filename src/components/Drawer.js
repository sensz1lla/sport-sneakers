function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">Корзина <img onClick={onClose} className="btnRemove cu-p" src="/img/btn-remove.svg" alt="Close" /></h2>

        {
          items.length > 0 ? (
            <div className="drawer-wrap">
              <div className="items">
                {items.map((obj) => (
                  <div className="cartItem d-flex align-center mb-20">
                    <img className="mr-20" src={obj.imageUrl} width={70} height={70} alt="Спортивные кроссовки" />
                    <div className="mr-20">
                      <p className="mb-5">{obj.title}</p>
                      <b>{obj.price} грн</b>
                    </div>
                    <img
                      onClick={() => onRemove(obj.id)}
                      className="btnRemove"
                      src="/img/btn-remove.svg"
                      alt="Remove"
                    />
                  </div>
                ))}
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
          ) : (
            <div className="cartEmpty d-flex align-center justify-center flex-column flex">
              <img className="mb-20" width={120} height={120} src="/img/empty-cart.svg" alt="Empty" />
              <h2>Корзина пустая</h2>
              <p className="opacity-6 mb-40">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
              <button onClick={onClose} className="btnGreen">
                <img src="/img/arrow-right.svg" alt="Arrow Right" />
                Вернуться назад
              </button>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Drawer;