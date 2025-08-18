import {CartItem} from "../CartItem/CartItem";
import styles from './Drawer.module.scss';

export function Drawer(props) {
    return (
        <div className={styles.overlay} onClick={props.onClickOverlay}>
            <div className={styles.drawer}>
                <h2>Корзина</h2>
                <div className={styles.items}>
                    <CartItem/>
                    <CartItem/>
                </div>
                <div className={styles.cartTotalBlock}>
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button>Оформить заказ</button>
                </div>
            </div>
        </div>
    );
}