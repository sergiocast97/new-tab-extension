import Calendar from './calendar';
import Clock from './clock';
import Background from './background';
import useTime from '../hooks/useTime';

export default function NewTab() {
  const [date] = useTime();

  return (
    <div className="relative grid w-full h-screen bg-theme-darkest text-theme-white place-items-center">
      <div className="relative z-10 flex flex-col items-center justify-center gap-1 text-center">
        <Calendar date={date} />
        <Clock date={date} />
      </div>

      <Background />
    </div>
  );
}
