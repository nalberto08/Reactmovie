
function NewMovi(props) {
    return(
        <div>            
            <div><img src={props.Pic} /></div>
            <div className="great">
                <p>{props.parag}</p>
            </div>
        </div>
    )
}
export default NewMovi