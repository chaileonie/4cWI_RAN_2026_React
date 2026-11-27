import styles from './Sidebar.module.css'

type Props = {
    title: string;
    numbering: number;
}

export default function Sidebar({ title, numbering }: Props) {
    return (
        <div className={styles.sidebar}>

            <div>{title} {numbering}</div>

        </div>
    )
}