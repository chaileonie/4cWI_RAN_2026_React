import React from 'react'

type Props = {}

export default function Card({ }: Props) {
    return (
        <div className="card">
            <h2>Haus</h2>
            <img src="https://picsum.photos/150/200" alt="Susi" />
            <p>Halloooooo</p>
        </div>
    )
}