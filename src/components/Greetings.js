export default function Greetings (props) {
    const greetingText = {
        "de": "Halo, ",
        "fr": "Bonjour, ",
        "es": "Hola, ",
        "en": "Hello, ",
    }
    return (
        <div className="box">
        <p> {greetingText[props.lang]} {props.children}</p>
        </div>
    )
}