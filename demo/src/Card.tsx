import styles from './Card.module.css'



type Props = {
    title: string;
    text: string;
    image: string;
}

export default function Card({ title, text, image }: Props) {
    const random = Math.random()
    const words = ["Sonne", "Wolke", "Blume", "Stern", "Meer"]
    const randomWord = words[Math.floor(Math.random() * words.length)]

    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <img src={image + "?" + random} />
            <p>{text}</p>
            <p>{randomWord}</p>
        </div>
    )
}