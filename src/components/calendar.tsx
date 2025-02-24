export default function Calendar({ date }: { date: Date }) {
  const getMonthName = (date: Date) => {
    return date.toLocaleString('en-UK', {
      month: 'long',
    });
  };

  const getOrdinal = (number: number) => {
    const formatter = new Intl.PluralRules('en-UK', { type: 'ordinal' });
    const ordinals = {
      one: 'st',
      two: 'nd',
      few: 'rd',
      many: 'th',
      zero: 'th',
      other: 'th ',
    };
    return `${number}${ordinals[formatter.select(number)]}`;
  };

  return (
    <>
      <p className="text-xl font-semibold text-theme-white drop-shadow-md">
        <span>{getOrdinal(date.getDate())} </span>
        <span>{getMonthName(date)}, </span>
        <span>{date.getFullYear()}</span>
      </p>
    </>
  );
}
