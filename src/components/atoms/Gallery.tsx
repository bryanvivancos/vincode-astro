import { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default function GalleryReact({galleryID, images}
    : { galleryID: string, images: string 
}) {
    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
        gallery: '#' + galleryID,
        children: 'a',
        pswpModule: () => import('photoswipe'),
        });
        lightbox.init();

        return () => {
        lightbox.destroy();
        lightbox = null;
        };
    }, []);

    return (
        <div className="pswp-gallery" id={galleryID}>
        {/* {props.map(({image, index}: {image: string, index:number}) => ( */}
            <a
            href={`/services-imgs/${images}.png`}
            data-pswp-width="1920"
            data-pswp-height="1536"
            target="_blank"
            rel="noreferrer"
            >
            <img src={`/services-imgs/${images}.webp`} alt="" />
            </a>
        {/* ))} */}
        </div>
    );
}
