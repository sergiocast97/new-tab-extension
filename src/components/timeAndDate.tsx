import Calendar from './calendar';
import Clock from './clock';
import useTime from '../hooks/useTime';

export default function TimeAndDate() {
  const [date] = useTime();

  return (
    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-1 text-center bg-theme-darkest/25">
      <Calendar date={date} />
      <Clock date={date} />
    </div>
  );
}
