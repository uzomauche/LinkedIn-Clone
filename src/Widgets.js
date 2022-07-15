import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {

    const newArticle = (heading, subtitle) => (
        <div className='widgets_article'>
            <div className='widgets_articleleft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets_articleright'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )
    return (
        <div className='widgets'>
            <div className='widgets_header'>
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newArticle('I am fully back on perfecting my React.js so watch out for me', 'Top news-1000 readers')}
            {newArticle('Russia and Ukraine war is getting mercy', 'Top news-11000 readers')}
            {newArticle('I am loving my React.js work', 'Self taught -1000 readers')}
            {newArticle('I am Google community work', 'Self promise -100 readers')}
            {newArticle('Tesla car hits new highs', 'Cars & auto -1000 readers')}
        </div>
    );
}

export default Widgets