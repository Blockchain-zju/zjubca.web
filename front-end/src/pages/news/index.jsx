import React from 'react';
import './index.css';
import '../../css/common.css';

const news=[
    {
        title:"致新成员的一封信",
        time:"2017-10-12 10:21:22",
        link:"https://mp.weixin.qq.com/s/bFjZ-HTMz4yHUKKc0Ekb7g"
    },
    {
        title:"致新成员的一封信",
        time:"2017-10-12 10:21:22",
        link:"https://mp.weixin.qq.com/s/bFjZ-HTMz4yHUKKc0Ekb7g"
    },
    {
        title:"致新成员的一封信",
        time:"2017-10-12 10:21:22",
        link:"https://mp.weixin.qq.com/s/bFjZ-HTMz4yHUKKc0Ekb7g"
    }
]
const news2Div=news=>(
    <div className="zjubca-news-item ccFlexColumn">
        <div className="zjubca-news-item-title scFlexRow">
            <a href={news.link} style={{textDecoration:"none",color:"black"}} target="_blank" rel="noopener noreferrer">{news.title}</a>
        </div>
        <div className="zjubca-news-item-content scFlexRow">
            {news.time}
        </div>
    </div>
)

export const News = () => (
    <div className="zjubca-news scFlexColumn">
        <div className="zjubca-news-bar scFlexColumn">
            <div className="zjubca-news-bar-top scFlexRow">
                <span>新闻链接</span>
            </div>
            <div className="zjubca-news-items-list scFlexColumn">
                {news.map(news2Div)}
            </div>
        </div>
    </div>
)
