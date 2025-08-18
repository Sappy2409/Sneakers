import React from "react";

import { Card } from './components/Card/Card';
import { Header } from './components/Header/Header';
import { Drawer } from "./components/Drawer/Drawer";


const arr = [
    {
        name: 'Мужские Кроссовки Nike Air Max 270',
        price: '12 999',
        imageUrl: '/img/1.png'
    },
    {
        name: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: '22 999',
        imageUrl: '/img/2.png'
    },
    {
        name: 'Кроссовки Puma X Aka Boku Future Rider',
        price: '8 999',
        imageUrl: '/img/3.png'
    },
    {
        name: 'Мужские Кроссовки Under Armour Curry 8',
        price: '15 199',
        imageUrl: '/img/4.png'
    }
];

export function App() {
    const [cartOpened, setCartOpened] = React.useState(false);

  return (
    <div className="wrapper">
        {cartOpened ? <Drawer onClickOverlay={() => setCartOpened(false)} /> : null}
            <Header onClickCart = {() => setCartOpened(true)}  />
        <div className="content">
            <div className="titleSearchBar">
                <h1>Все кроссовки</h1>
                <div className="search">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
                            stroke="#E4E4E4" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <input placeholder="Поиск..." />
                </div>
            </div>
            <div className="cardList">
                {arr.map((obj) =>
                    <Card
                        name={obj.name}
                        price={obj.price}
                        imageUrl={obj.imageUrl}
                        onLike={() => console.log('Добавили в избранное')}
                        onPlus={() => console.log('Добавили в корзину')}
                    />
                )}
            </div>
        </div>
    </div>
  );
}
