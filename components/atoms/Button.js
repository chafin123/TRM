import Image from "next/dist/client/image"

const Button = (props) => {
    return (
        <>
            <button
                className={props.classNamePrev}
                onClick={props.onClickPrev}
            >
                <span>
                {/* change svgs to non attributed */}
                    <Image 
                        src='/icons/left-arrow-free.svg'
                        alt='previous arrow'
                        height={100}
                        width={100}
                    />
                </span>
            </button>
            <button
                className={props.classNameNext}
                onClick={props.onClickNext}
            >
                <span>
                    <Image 
                        src='/icons/right-arrow-free.svg'
                        alt='next arrow'
                        height={100}
                        width={100}
                    />
                </span>
            </button>
        </>
    )
}

export default Button