import styles from './Card.module.css'

import { useState } from 'react';

type Props = {
    title: string;
    text: string;
    image: string;
}

export default function Card({ title, text, image }: Props) {
    const [random, setRandom] = useState(Math.random());
    const words = ["Sonne", "Wolke", "Blume", "Stern", "Meer"]
    const randomWord = words[Math.floor(Math.random() * words.length)]
    const [counter, setCounter] = useState(0);


    return (
        <div className={styles.card} onClick={() => {

            alert("Card clicked! " + title)
            let Newvalue = counter + 1;
            setCounter(Newvalue);
            console.log(counter);
        }}>

            <h2>{title}</h2>
            <img src={image + "?" + random} />
            <p>{text}</p>
            <p>{randomWord}</p>
            <p>Amount of clicks {counter}</p>
            <button onClick={(e) => {
                setRandom(Math.random());
            }}>Change Image</button>
        </div>
    )
}