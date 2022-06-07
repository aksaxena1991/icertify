import { useEffect, useState } from "react"

const ImageUpload = (props:any) => {
    const [images, setImages] = useState<any>([]);
    const [imageURLs, setImageURLs] = useState<any>([]);
    const onImageChange = (e:any) => {
        setImages([e.target.files])
    }
    useEffect(()=>{
        if(images.length < 1) {
return 
        } else {
            const newImageURLs:any = [];
            images.forEach((image:any) => newImageURLs.push(window.URL.createObjectURL(image[0])));
            setImageURLs(newImageURLs);
        }
        
    },[images]);
    useEffect(()=>{
        props.callback(imageURLs)
    },[imageURLs])

    return(
        <><input type="file" multiple accept="image/*" onChange={onImageChange} />
        </>
    );
}
export default ImageUpload