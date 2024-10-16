export default function Clock({ date }){

    const toTwoDigits = (value) => {
        return value.toLocaleString('en-UK', {
            minimumIntegerDigits: 2
        })
    }

    return (
        <>
            <p className="text-6xl font-semibold text-theme-white md:text-8xl lg:text-9xl drop-shadow-lg ">
                <span>{ toTwoDigits( date.getHours()) }</span>
                <span className="animate-separator">:</span>
                <span>{ toTwoDigits( date.getMinutes()) }</span>
            </p>
        </>
    )
}