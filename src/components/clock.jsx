export default function Clock({ date }) {
  const toTwoDigits = (value) => {
    return value.toLocaleString('en-UK', {
      minimumIntegerDigits: 2,
    });
  };

  return (
    <>
      <p className="font-semibold text-6xl/none text-theme-white md:text-8xl/none lg:text-9xl/none drop-shadow-md ">
        <span>{toTwoDigits(date.getHours())}</span>
        <span className="animate-separator">:</span>
        <span>{toTwoDigits(date.getMinutes())}</span>
      </p>
    </>
  );
}
