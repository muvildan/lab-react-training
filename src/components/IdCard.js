export default function IdCard (props) {
    const {card} = props
    return (
        <div className="IdCard box">
            <img src={card.picture} alt="Profile pic"/>
            <div className="info">
            <div><strong>First name:</strong> {card.firstName}</div>
            <div><strong>Last name:</strong> {card.lastName}</div>
            <div><strong>Gender:</strong> {card.gender}</div>
            <div><strong>Height:</strong> {card.height}</div>
            <div><strong>Birth:</strong> {card.birth}</div>
            </div>
        </div>
    )
}