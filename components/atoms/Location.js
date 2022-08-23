import Image from "next/dist/client/image"


const Location = (props) => {
    return (
        <div className={props.className}>
            <div>
                <Image 
                    src="/icons/bigLocation.png"
                    alt="Location Marker"
                    height={20}
                    width={12}
                />
            </div>
            <div>
                <a href="https://g.page/BasilGinger?share?">
                    <p>850 s Roberts St.Suite 100</p>
                    <p>Wasilla,Alaska,99654</p>
                </a>
            </div>

        </div>
    )
}

export default Location