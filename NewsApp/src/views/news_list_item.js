import React from 'react'
import classes from '../css/styles.css'
// import {css} from 'glamor'

const NewsListItem = ({item}) => {
    return (
        <div className={classes.news_item}>
            <h3>{item.title}</h3>
            <div>
                {item.feed}
            </div>
        </div>
    );
};

export default NewsListItem


// let news_item = css({
//     padding: '20px',
//     boxSizing: 'border-box',
//     borderBottom: '1px solid grey',
//     ':hover': {
//         color: 'red'
//     },
//     '@media(max-width:500px)': { // color of item changes to blue when window size hits 500px
//         color: 'blue'
//     }
// });
//
// let item_grey = css({
//     background: 'lightgrey'
// });
// className={`${news_item} ${item_grey}`}