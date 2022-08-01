import 'tachyons';
import "./Card.css"

const Card = (props) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow'>
            <div className='cardImg' style={{background: "url(" + props.url + ")"}}></div>
            <p>{props.name}</p>
        </div>
    )
}

export default Card;