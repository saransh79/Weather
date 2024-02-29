import React from 'react';
import { useAppSelector } from '../../../../hooks/redux';
import { getWeatherShortWeather } from '../../../../store/weatherReducer/selectors';

export const CityShortWeather = () => {
    const shortWeather = useAppSelector(getWeatherShortWeather);

    const shortWeatherStyles = `flex items-center justify-center bg-black/40 select-none
            border-2 h-[28px] rounded-md h-full px-[8px] mr-0 xs:mb-0 xs:mr-2 `

    return (
        <div className={shortWeatherStyles}>
            <p>{shortWeather}</p>
        </div>
    )
}
