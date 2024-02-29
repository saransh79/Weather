import React from 'react'

export const WeatherLogo = () => {
    const weatherLogoLinkStyles = `inline-block p-[0_20px_20px_20px] transition ease-in-out
            active:text-slate-200 hover:text-slate-200 xl:p-[0_25px_25px_0]`;

    return (
        <div className='mt-10'>
            <a href='/' aria-label='Go weather app'
                className={weatherLogoLinkStyles}>
                <h1 className='font-bold tracking-wide'>
                    GOWeather
                </h1>
            </a>
        </div>
    )
}
