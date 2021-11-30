export default function BoxColor (props) {
    const divStyle = {
        r: Math.floor(Math.random() * (props.max - props.min)) + props.min,
        g: Math.floor(Math.random() * (props.max - props.min)) + props.min,
        b: Math.floor(Math.random() * (props.max - props.min)) + props.min,
    }
    return (
        <div className="color-box" style={divStyle}/>
    )
}