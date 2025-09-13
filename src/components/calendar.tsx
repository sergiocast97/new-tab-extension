const getMonthName = (date: Date) => {
  return date.toLocaleString('en-UK', {
    month: 'long',
  });
};

const getOrdinal = (number: number): string => {
  const mod10 = number % 10;
  const mod100 = number % 100;
  let suffix = 'th';

  if (mod10 === 1 && mod100 !== 11) {
    suffix = 'st';
  } else if (mod10 === 2 && mod100 !== 12) {
    suffix = 'nd';
  } else if (mod10 === 3 && mod100 !== 13) {
    suffix = 'rd';
  }

  return `${number}${suffix}`;
};

export default function Calendar({ date }: { date: Date }) {
  return (
    <>
      <p className="text-lg sm:text-xl font-semibold text-theme-white drop-shadow-md">
        <span>{getOrdinal(date.getDate())} </span>
        <span>{getMonthName(date)}, </span>
        <span>{date.getFullYear()}</span>
      </p>
    </>
  );
}
