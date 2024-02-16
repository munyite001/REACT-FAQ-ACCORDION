/* eslint-disable react/prop-types */
export default function TILE(props) {
    return (
        <div className="tile">
            <div className="question">
                <p>{props.data.question}</p>
                <img 
                    src={props.index == props.activeSection ? "/images/icon-minus.svg" : "/images/icon-plus.svg"} 
                    alt="open accordion icon"
                    onClick={() => props.handleSectionClick(props.index)}
                />
            </div>
            <div className="answer">
                <p>
                    {props.index === props.activeSection && props.data.answer}
                </p>
            </div>
            {props.index < 3 && <hr/>}
        </div>
    )
}