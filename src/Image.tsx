interface ImageProps {
    src: string;
    className?: string;
}

const Image: React.FC<ImageProps> = ({src, className}) => {
    return <img src={src} className={className} />
}

export default Image;