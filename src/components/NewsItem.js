import React, { Component } from 'react';
import img from '../newImg.jpg'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props
        return (
            <div className='my-3'>
                <div className="card" >
                    <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
                        <span className="badge rounded-pill bg-danger">
                            <b>Source</b>: {source.name}
                        </span>
                    </div>
                    <img src={!imageUrl ? img : imageUrl} className="card-img-top" style={{ height: '210px' }} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><strong>{title}</strong></h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;
