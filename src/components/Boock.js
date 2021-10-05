function Boock(props) {
    const srcOfImage = '/img/' + props.boockObj.coverFileName;
    return (
        <div className="card">
            <img src={srcOfImage} alt=""/>
            <p className="movie-overview">{props.boockObj.bookId}</p>
            <h3 className="movie-title">{props.boockObj.title}</h3>
            <p className="movie-author">{props.boockObj.author}</p>
            <p className="movie-category">{props.boockObj.category}</p>
            <p className="movie-price">{props.boockObj.price}</p>
            
        </div>
    );
}

export default Boock;