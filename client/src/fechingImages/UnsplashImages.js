import axios from 'axios'

export const fetchImages = () => {
    return ImageList();
}

const ImageList = async () => {
    return (
        await axios.get('https://api.unsplash.com/photos/?client_id=d685b79cfb072f6e7930cc71d6e89cd34f39d2d31260e1a44de5db64c2efd239')
                                .then(({data}) => {
                                    return data
                                })
                                .catch(err => {
                                })
                  
    )
}