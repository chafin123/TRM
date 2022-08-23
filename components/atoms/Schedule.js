import Image from "next/dist/client/image"

const Schedule = (props) => {
    return (
        <div className={props.className}>
            <div>
                <Image 
                    src="/icons/bigTime.png"
                    alt="Clock Symbol"
                    height={20}
                    width={20}
                />
            </div>
            <div>
                <p>M - T 11:30 - 8:30</p>
                <p>F 11:30 - 9</p>
                <p>S 12 - 9</p>
                <p>S 12 - 8:30</p>
            </div>
        </div>
    )
}

export default Schedule