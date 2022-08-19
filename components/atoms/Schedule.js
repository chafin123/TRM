import Image from "next/dist/client/image"

const Schedule = () => {
    return (
        <div className={className}>
            <Image 
                src="/icons/bigTime.png"
                alt="Clock Symbol"
                height={50}
                width={50}
            />
            <p>M - T 11:30 - 8:30</p>
            <p>F 11:30 - 9</p>
            <p>S 12 - 8:30</p>
        </div>
    )
}

export default Schedule