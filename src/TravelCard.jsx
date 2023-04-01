import locationLogo from './assets/location.svg'
export default function TravelCard(props) {
    return (
        <>
        <div className="flex my-[18px] text-[#2B283A]">
            <img className="rounded-md max-w-[30%] aspect-square" src={props.imgUrl}></img>
            <div className="p-[19px]">
            <img className = "w-[24px] inline-block"src={locationLogo}></img><span className='tracking-widest ml-1'>{props.location}</span>
                <a className="text-[#918E9B] ml-3 underline" href={props.gmapsLink}>View on Google Maps</a>
                <h2 className=' font-bold text-2xl mb-4 mt-2'>{props.title}</h2>
                <p className='font-bold text-sm my-1'>{props.startDate} - {props.endDate}</p>
                <p className=''>{props.description}</p> 
            </div>
        </div>
        <hr></hr>
        </>
        
    )
}

