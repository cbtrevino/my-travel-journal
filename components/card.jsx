export default function Card(props) {
    return (
        <div>
            <div className="card">
                <img src={`${props.img}`} alt="picture of Mount Fuji" className="card-image"/>
                <div className="card-data">
                    <div className="card-location-maps">
                        <img src="./src/assets/images/map-pin-svgrepo-com.svg" className="card-map-pin"/>
                        <p className="card-location">{props.location.toUpperCase()}</p>
                        <a href={props.maps} target="_blank" className="card-maps">View on google Maps</a>
                    </div>
                    <h2 className="card-title">{props.title}</h2>
                    <p className="card-start-end-date">{props.startDate} - {props.endDate}</p>
                    <p className="card-desc">{props.description}</p>
                </div>
                
            </div>
            <hr class="card-line" />
        </div>
    )
}