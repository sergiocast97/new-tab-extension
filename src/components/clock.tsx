export default function Clock({ date }: { date: Date }) {
  const toTwoDigits = (value: number) => {
    return value.toLocaleString('en-UK', {
      minimumIntegerDigits: 2,
    });
  };

  return (
    <>
      <p className="font-semibold text-theme-white text-9xl/none">
        <span>{toTwoDigits(date.getHours())}</span>
        <span className="animate-separator">:</span>
        <span>{toTwoDigits(date.getMinutes())}</span>
      </p>
    </>
  );
}
