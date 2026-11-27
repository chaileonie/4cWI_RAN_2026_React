import styles from './Sidebar.module.css'

type Props = {}

export default function Sidebar({ }: Props) {
    return (
        <div className={styles.sidebar}>
            <h1>News</h1>
            <div>Sport</div>
            <div>Wetter</div>
            <div>Politik</div>
        </div>
    )
}