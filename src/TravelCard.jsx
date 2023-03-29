import locationLogo from './assets/location.svg'
export default function TravelCard(props) {
    return (
        <div className="flex">
            <img className="" src={props.imgUrl}></img>
            <div className="">
                <span><img src={locationLogo}></img>{props.location}</span>
                <span className="text-[#918E9B]"><a href={props.gmapsLink}>View on Google Maps</a></span>
                <h2>{props.location}</h2>
                <p>{props.startDate} - {props.endDate}</p>
                <p>{props.details}</p>
                <hr></hr>
            </div>
        </div>
    )
}
