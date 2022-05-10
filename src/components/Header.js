function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img src="/img/logo.png" width={40} height={40} alt="Логотип"/>
        <div>
          <h3 className="text-uppercase">Sport Sneakers</h3>
          <p className="opacity-5">Магазин спортивных кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <img src="/img/card.svg" width={18} height={18} alt="Card"/>
          <span>1205 грн.</span>
        </li>
        <li>
          <img src="/img/user.svg" width={20} height={20} alt="User"/>
        </li>
      </ul>
    </header>
  );
}

export default Header;