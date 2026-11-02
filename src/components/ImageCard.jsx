function ImageCard(props){
    return(
        <div className="image-card">
            <img src={props.image} alt={props.title}/>
            <div className="card-content"> 
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            </div>
        </div>
    )
}
export default ImageCard