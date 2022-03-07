import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `News - ${this.capitalizeLatter(this.props.category)}`
    }

    async updateNews() {
        this.props.changeProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url)
        this.props.changeProgress(30)
        let parsedData = await data.json()
        this.props.changeProgress(70)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.changeProgress(100);
    }

    async componentDidMount() {
        this.updateNews()
    }

    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 })
        this.updateNews()
    }

    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 })
        this.updateNews()
    }

    capitalizeLatter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
        })
    }

    render() {
        let { mode } = this.props
        return (
            <>
                {/* Scroll Using Previous and next button */}
                {/* <div className='container my-3'>
                    <div className="row">
                        <h1 className='text-center' style={{ margin: '35px 0px', color: mode === 'dark' ? 'white' : 'black' }}>Today's Top {this.capitalizeLatter(this.props.category)} Headlines <hr /></h1>
                        {this.state.loading && <Spinner />}
                        {!this.state.loading && this.state.articles.map((ele) => {
                            return <div className="col-md-4" key={ele.url}>
                                <NewsItem title={ele.title} description={ele.description ? ele.description : ""} imageUrl={ele.urlToImage} newsUrl={ele.url} author={ele.author} date={ele.publishedAt} source={ele.source} />
                            </div>
                        })}
                    </div>
                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} className={`btn btn-${mode === 'dark' ? 'light' : 'dark'}`}>&larr; Previous </button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.pageSize)} type="button" onClick={this.handleNextClick} className={`btn btn-${mode === 'dark' ? 'light' : 'dark'}`}>Next &rarr;</button>
                    </div>
                </div> */}


                {/* Scroll using infinite Scroll */}
                <h1 className='text-center' style={{ margin: '35px 0px', color: mode === 'dark' ? 'white' : 'black' }}>Today's Top {this.capitalizeLatter(this.props.category)} Headlines</h1>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}>
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((ele) => {
                                return <div className="col-md-4" key={ele.url}>
                                    <NewsItem title={ele.title} description={ele.description ? ele.description : ""} imageUrl={ele.urlToImage} newsUrl={ele.url} author={ele.author} date={ele.publishedAt} source={ele.source} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        );
    }
}

export default News;
