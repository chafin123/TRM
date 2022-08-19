import Image from "next/dist/client/image"

const Phone = () => {
    return (
        <div className={className}>
            <Image 
                src="/icons/bigPhone.png"
                alt="Phone Icon"
                height={100}
                width={100}
            />
            <a href="tel: +1-907-376-722">907.376.722</a>
        </div>
    )
}

export default Phone