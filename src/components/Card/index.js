import styles from './Card.module.scss';

console.log(styles);

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked"/>
      </div>
      <img src={props.imageUrl} width={133} height={112} alt={props.title} />
        <h5>{props.title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>{props.price} грн</b>
          </div>
          <button className="button" onClick={props.onClick}>
            <img src="/img/plus.svg" width={11} height={11} alt="Plus"/>
          </button>
        </div>
     </div>
  );
}

export default Card;