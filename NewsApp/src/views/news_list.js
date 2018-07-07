import React from 'react'
import NewsListItem from './news_list_item'

const NewsList = (props) => {
    const create_items = props.news.map((item) => {
        return (
            <NewsListItem key={item.id} item={item}/>
        )
    });
    return (
        <div>{create_items}</div>
    )
};

export default NewsList