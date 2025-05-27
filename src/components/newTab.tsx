import TimeAndDate from './timeAndDate';
import Background from './background';

export default function NewTab() {
  return (
    <div className="relative grid w-full h-screen bg-theme-darkest text-theme-white place-items-center">
      <TimeAndDate />
      <Background />
    </div>
  );
}
