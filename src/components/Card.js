import React from "react"

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img className="hero--photo" src={require("../images/katie.png")} />
        <div className="card--stats">
        <img className="card--star" src={require("../images/Star 1.png")} />
            <span>{props.item.rating}</span>
            <span className="gray">({props.item.reviewCount}) • </span>
            <span className="gray">{props.item.location}</span>
        </div>
        <p>{props.item.title}</p>
        <p><span className="bold">From ${props.item.price}</span> / person</p>
    </div>
    )
}