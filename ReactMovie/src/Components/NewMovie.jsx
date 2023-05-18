
function NewMovie(props) {
    return(
        <div>            
            <div><img src={props.Imge} /></div>
            <div className="hint">
                <p>{props.para}</p>
            </div>
        </div>
    )
}
export default NewMovie