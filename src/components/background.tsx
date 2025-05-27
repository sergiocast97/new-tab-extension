import { usePictures } from '../hooks/usePictures';

export default function Background() {
  const pictures = usePictures();
  const position = Math.floor(Math.random() * pictures.length);

  return pictures.length === 0 ? (
    <div className="absolute inset-0 z-0 bg-theme-darkest"></div>
  ) : (
    <div className="absolute inset-0 z-0">
      <img
        className="object-cover w-full h-full"
        alt={pictures[position].alt}
        src={pictures[position].url}
      />
    </div>
  );
}
