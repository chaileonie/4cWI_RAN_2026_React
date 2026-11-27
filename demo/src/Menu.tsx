import styles from './Menu.module.css'

type Props = {}

export default function Menu({ }: Props) {
    return (
        <div className={styles.menu}>
            <div>Menu</div>
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
        </div>
    )
}