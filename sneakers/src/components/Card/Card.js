import React from "react";

import styles from './Card.module.scss';

export function Card(props) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isLiked, setIsLiked] = React.useState(false);

    const onClickLike = () => {
        setIsLiked(!isLiked);
    }

    const onClickPlus = () => {
        setIsAdded(!isAdded);
    }

    return (
        <div className={styles.card}>
            <button className={styles.like} onClick={onClickLike}>
                <img width={32} height={32} src={isLiked ? "/img/pinkLike.svg" : "/img/whiteLike.svg"} alt="like" />
            </button>
            <img width="133" height="112" src={props.imageUrl} alt="Sneakers"/>
            <p>{props.name}</p>
            <div className={styles.cardBottom}>
                <div className={styles.priceText}>
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className="plus" onClick={onClickPlus}>
                    <img width={32} height={32} src={isAdded ? "/img/greenPlus.svg" : "/img/whitePlus.svg"} alt="plus"/>
                </button>
            </div>
        </div>
    );
}