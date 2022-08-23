import imageArray from "../atoms/Image"
import Image from "next/dist/client/image"
const ImageBlock = () => {

    return (
        <>
            <Image 
                src={imageArray[selector].name}
                alt={imageArray[selector].alt}
                height={100}
                width={100}
            />
        </>
    )
}

export default ImageBlock