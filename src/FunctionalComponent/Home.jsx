import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem'

export default function Home(props) {
    let [articles, setArticals] = useState([])
    let [totalResults, setTotalResults] = useState(0)
    let [page, setPage] = useState(1)

    async function getApIData() {
        let response = await fetch(`https://newsapi.org/v2/everything?q=${props.search ? props.search : props.q}&pageSize=24&sortBy=publishedAt&language=${props.language}&apiKey=c7b851f1e29042cda7e7b0743a409b82`)
        response = await response.json()

        if (response.articles) {
            setArticals(response.articles.filter((elm) => elm.title !== "[Removed]"))
            setTotalResults(response.totalResults)
        }

    }
    async function fetchData() {
        setPage(page + 1)
        let response = await fetch(`https://newsapi.org/v2/everything?q=${props.search ? props.search : props.q}&pageSize=24&page=${page}&sortBy=publishedAt&language=${props.language}&apiKey=c7b851f1e29042cda7e7b0743a409b82`)
        response = await response.json()

        if (response.articles)
            setArticals(articles.concat(response.articles.filter((elm) => elm.title !== "[Removed]")))

    }

    useEffect(() => {
        getApIData()
    }, [props])


    return (
        <div className='container-fluid my-1'>
            <h5 className='background my-1 text-light text-center p-2 text-capitalize'>{props.search ? props.search : props.q} News Articles</h5>
            <InfiniteScroll
                dataLength={articles.length} //This is important field to render the next data
                next={fetchData}
                hasMore={articles.length < totalResults}
                loader={<div className='my-5 text-center font-size'>
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>}
            >

                <div className="row">
                    {
                        articles.map((item, index) => {
                            return <NewsItem
                                key={index}
                                source={item.source.name}
                                tittle={item.title}
                                description={item.description}
                                url={item.url}
                                pic={item.urlToImage}
                                date={item.publishedAt}
                            />
                        })
                    }

                </div>

            </InfiniteScroll>
        </div>
    )
}
