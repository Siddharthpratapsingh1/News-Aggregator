import React from 'react'

const NewsItem = (props) => {
    let {title, description, imageUrl, newsUrl, author, date} = props;
    return (
      <div className='my-3'>
        <div className="card" style={{ width: "20rem" }}>
            <img src={imageUrl?imageUrl:"https://images.pexels.com/photos/4288671/pexels-photo-4288671.jpeg?auto=compress&cs=tinysrgb&w=400"} className="card-img-top"  alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">
                {description}...
                </p>
                <div className="card-footer text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</div>
                <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">
                Read more
                </a>
            </div>
        </div>

      </div>
    )
  }

export default NewsItem