import styles from './Menu.module.css'

type Props = {
    title: string;
    description: string;
}

export default function Menu({ title, description }: Props) {
    return (
        <div className={styles.menu}>
            <div>{title}
                <div className={styles.description}>{description}</div>
            </div>

        </div>
    )
}