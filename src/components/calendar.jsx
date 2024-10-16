export default function Calendar({ date }){

    const getMonthName = (date) => {
        return date.toLocaleString('en-UK', { 
            month: 'long' 
        })
    }

    function getOrdinal(number) {
        const formatter = new Intl.PluralRules('en-UK', { type: 'ordinal' })
        const ordinals = { one: 'st', two: 'nd', few: 'rd', many: 'th', zero: 'th', other: 'th '}
        return `${number}${ordinals[formatter.select(number)]}`
    }

    return (
        <>
            <p className="text-lg font-semibold text-theme-white md:text-xl drop-shadow-lg">
                <span>{ getOrdinal(date.getDate()) } </span>
                <span>{ getMonthName(date) }, </span>
                <span>{ date.getFullYear() }</span>
            </p>
        </>
    )
}