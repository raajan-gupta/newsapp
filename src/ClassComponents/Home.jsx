import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            totalResults: 0,
            page: 1

        }
    }
    async getApIData() {
        let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search ? this.props.search : this.props.q}&pageSize=24&sortBy=publishedAt&language=${this.props.language}&apiKey=c7b851f1e29042cda7e7b0743a409b82`)
        response = await response.json()

        if (response.articles)
            this.setState({
                articles: response.articles.filter((elm) => elm.title !== "[Removed]"),
                totalResults: response.totalResults
            })

    }
    fetchData = async () => {
        this.setState({ page: this.state.page + 1 })
        let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search ? this.props.search : this.props.q}&pageSize=24&page=${this.state.page}&sortBy=publishedAt&language=${this.props.language}&apiKey=c7b851f1e29042cda7e7b0743a409b82`)
        response = await response.json()

        if (response.articles)
            this.setState({
                articles: this.state.articles.concat(response.articles.filter((elm) => elm.title !== "[Removed]"),)
            })

    }
    componentDidMount() {
        this.getApIData()
    }
    componentDidUpdate(oldprops) {
        if (oldprops !== this.props)
            this.getApIData()
    }
    render() {
        return (
            <div className='container-fluid  my-1'>
                <h5 className='background my-1 text-light text-center p-2 text-capitalize'>{this.props.search ? this.props.search : this.props.q} News Articles</h5>

                <InfiniteScroll
                    dataLength={this.state.articles.length} //This is important field to render the next data
                    next={this.fetchData}
                    hasMore={this.state.articles.length < this.state.totalResults}
                    loader={<div className='my-5 text-center font-size'>
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>}
                >

                    <div className="row">
                        {
                            this.state.articles.map((item, index) => {
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
}
