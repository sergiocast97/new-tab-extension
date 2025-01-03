import { pictureList } from './images';

const position = Math.floor(Math.random() * pictureList.length);

export default function Background() {
  return (
    <>
      <div className="absolute inset-0 z-0">
        <img
          className="object-cover w-full h-full"
          alt={pictureList[position].author}
          src={pictureList[position].img}
        />
      </div>
    </>
  );
}
