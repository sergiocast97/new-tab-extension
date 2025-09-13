const toTwoDigits = (n: number) => n.toString().padStart(2, '0');

export default function Clock({ date }: { date: Date }) {
  return (
    <>
      <p className="font-semibold text-theme-white text-8xl/none sm:text-9xl/none drop-shadow-md ">
        <span>{toTwoDigits(date.getHours())}</span>
        <span className="animate-separator">:</span>
        <span>{toTwoDigits(date.getMinutes())}</span>
      </p>
    </>
  );
}
