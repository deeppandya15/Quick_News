/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
// import React from 'react'
import Spinner from './Spinner';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import { useState, useEffect } from "react";


function News(props) {

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalRecord, setTotalRecord] = useState()
    const [loading, setloading] = useState(false)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const fetchData = async () => {
        props.loadingBar(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.newsApi}&page=${page}&pageSize=${props.pagesize}`;
        console.log(url);
        setloading(true);
        props.loadingBar(30);
        let response = await fetch(url);
        let parseData = await response.json();
        props.loadingBar(70);
        setloading(false);

        // Update state with fetched data
        setArticles(parseData.articles); //data.articles means in receive data articles is obj. in which all info are stored
        setTotalRecord(parseData.totalResults)
        props.loadingBar(100);
    }
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        // Call the fetchData function when the component renders
        fetchData();
    }, [page]);

    const handlePrevious = () => {
        setPage(page - 1)
    }
    const handleNext = () => {
        setPage(page + 1)
    }
    return (
        <>
            <div className='container my-3'>
                <h2 className='text-center'>QuickNews-Top Headlines</h2>
                {loading && <Spinner />}
                <div className="row">
                    {!loading && articles.map((elem) => {
                        return <div className="col-md-4" key={elem.url}>
                            <NewsItem title={elem.title ? elem.title.slice(0, 45) : ""} description={elem.description ? elem.description.slice(0, 90) : ""} imgUrl={elem.urlToImage ? elem.urlToImage : "https://img.etimg.com/thumb/msid-106520531,width-1070,height-580,overlay-etmarkets/photo.jpg"} newsUrl={elem.url} date={elem.publishedAt} author={elem.author} newsSource={elem.source.name} />
                        </div>
                    })}

                </div>

                <div className='container d-flex justify-content-between'>
                    <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevious}>&larr; Previous</button>
                    <button disabled={articles.length === 0} type="button" className="btn btn-dark" onClick={handleNext}>	Next &rarr;</button>
                </div>
            </div>
        </>
    )
}

News.defaultProps = {
    country: "in",
    category: "general",
    pagesize: "8"
}

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pagesize: PropTypes.number
}

export default News