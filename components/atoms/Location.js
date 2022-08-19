import Image from "next/dist/client/image"


const Location = () => {
    return (
        <div className={className}>
            <Image 
                src="/icons/bigLocation.png"
                alt="Location Marker"
                height={50}
                width={50}
            />
            <a href="https://g.page/BasilGinger?share?">
                <p>850 s Roberts St.Suite 100</p>
                <p>Wasilla,Alaska,99654</p>
            </a>
        </div>
    )
}

export default Location