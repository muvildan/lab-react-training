export default function Random (props){
    return (
        <div className="box">
            <p>Random value between {props.min} and {props.max} ={">"} {Math.floor(Math.random() * (props.max - props.min)) + props.min}</p>
        </div>
    )
}