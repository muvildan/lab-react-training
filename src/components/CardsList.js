import IdCard from "./IdCard";

const CardsData = [
    {
        _id: "jajaja",
        lastName:'Doe',
        firstName:'John',
        gender:'male',
        height: '178',
        birth: "1992-07-14",
        picture:"https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
        _id: "jejeje",
        lastName:'Delores',
        firstName:'Obrien',
        gender:'female',
        height: '172',
        birth: "1988-05-11",
        picture:"https://randomuser.me/api/portraits/women/44.jpg",
    }
]

export default function CardsList (props) {
    return (
        <div className="list">
            {CardsData.map((card) => <IdCard key={card._id} card={card} />)}
        </div>
    );
}