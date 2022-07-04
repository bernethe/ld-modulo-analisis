import React, { useState } from 'react';
import BarChart from '../UI/BarChart';
import '../../SCSS/chartCarousel.scss';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';

const ChartCarousel = ({chartColor, chartTitle, chartData}) => {

    const [currentChart, setCurrentChart] = useState(0);

    const handleClick = (toGo) => {
        setCurrentChart(currentChart+toGo);
    }

    return <div className='carousel d-flex'>
        <div className='flex-grow-0 d-flex justify-content-center align-items-center'>
            <button className={ `btn ${ currentChart === 0 && 'opacity-25' }` } onClick={ () => handleClick(-1) } disabled={currentChart === 0}>
                <FaChevronLeft />
            </button>
        </div>
        <div className='flex-grow-1'>
            <BarChart chartColor={chartColor} chartTitle={chartTitle} chartData={chartData[currentChart]} />
        </div>
        <div className='flex-grow-0 d-flex justify-content-center align-items-center'>
            <button className={ `btn ${ currentChart === chartData.length-1 && 'opacity-25' }` } onClick={ () => handleClick(1) } disabled={currentChart === (chartData.length-1)}>
                <FaChevronRight />
            </button>
        </div>
    </div>
}

export default ChartCarousel