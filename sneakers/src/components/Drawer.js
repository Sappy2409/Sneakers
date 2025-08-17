import {CartItem} from "./CartItem";

export function Drawer() {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2>Корзина</h2>
                <div className="items">
                    <CartItem/>
                    <CartItem/>
                </div>
                <div className="cartTotalBlock">
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