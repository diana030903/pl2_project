import React, { useState} from "react";

const images = [
    'https://storage.googleapis.com/events_images_prd/event/image/cropped_20250908043024_qmlm_WhatsApp_Image_2025-09-08_at_10.29.02_1.jpg',
    'https://storage.googleapis.com/events_images_prd/event/image/cropped_20250716083843_hnxg_WhatsApp_Image_2025-07-16_at_12.55.45.jpg',
    'https://storage.googleapis.com/events_images_prd/event/image/img_kpop-concert-kisu1752864832.jpg',
    
]

function Slider() {
    const [index, setIndex] = useState(0);


const next = () => setIndex((index + 1) % images.length);
const prev = () => setIndex((index - 1) % images.length);


return (
    <div style={{textAlign: 'center', margin: '20px'}}>
        <img src={images[index]} alt="slide" style={{width: '300px', height: '400px', borderRadius: '8px'}} />
        <div>
            <button onClick={prev} style={{margin: '10px', borderRadius: '10px'}}>Предыдущий</button>
            <button onClick={next} style={{margin: '10px', borderRadius: '10px'}}>Следующий</button>
        </div>
    </div>
)

}

export default Slider;