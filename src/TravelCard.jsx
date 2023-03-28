import locationLogo from './assets/location.svg'
export default function TravelCard(props) {
    return (
        <div className="flex">
            <img className="" src={props.img}></img>
            <div className="">
                <span><img src={locationLogo}></img>{props.location}</span>
                <span className="text-[#918E9B]">View on Google Maps</span>
                <h2>{props.location}</h2>
                <p>{props.date}</p>
                <p>{props.info}</p>
                <hr></hr>
            </div>
        </div>
    )
}
