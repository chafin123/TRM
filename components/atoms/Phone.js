import Image from "next/dist/client/image"

const Phone = (props) => {
    return (
        <div className={props.className}>
            <div>
                <Image 
                    src="/icons/bigPhone.png"
                    alt="Phone Icon"
                    height={20}
                    width={15}
                />
            </div>
            <div>
                <a href="tel: +1-907-376-722">907.376.722</a>
            </div>
        
        </div>
    )
}

export default Phone