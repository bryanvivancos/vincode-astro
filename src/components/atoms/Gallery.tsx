import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export default function GalleryReact({
    galleryID,
    images,
}: {
    galleryID: string;
    images: Array<string>;
}) {
    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: "#" + galleryID,
            children: "a",
            pswpModule: () => import("photoswipe"),
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
            <div className="flex max-md:flex-wrap justify-center items-center gap-4">
                {images.map((img, index) => (
                    <a
                        key={index}
                        href={`/services-imgs/${img}.png`}
                        data-pswp-width="1920"
                        data-pswp-height="1536"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={`/services-imgs/${img}.webp`}
                            alt="Imagen de servicio"
                            className="md:w-96 rounded-lg object-cover"
                        />
                    </a>
                ))}
            </div>

            {/* <a
            href={`/services-imgs/${images}.png`}
            data-pswp-width="1920"
            data-pswp-height="1536"
            target="_blank"
            rel="noreferrer"
            >
            <img src={`/services-imgs/${images}.webp`} 
                alt="Imagen de servicio" 
                className="w-auto h-full rounded-lg object-cover"
            />
            </a> */}
            {/* ))} */}
        </div>
    );
}
