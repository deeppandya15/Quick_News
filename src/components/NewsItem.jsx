/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// import React from 'react';

function NewsItem({ title, description, imgUrl, newsUrl, author, date, newsSource }) {

    return (
        <div className="my-3">
            <div className="card">
                <span className="position-absolute top-0  translate-middle badge  bg-danger " style={{ left: "90%", zIndex: 1 }}>
                    {newsSource}
                </span>
                <img src={imgUrl} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small>By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
