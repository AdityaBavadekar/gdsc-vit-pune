import React from 'react';
import './blogs.css';

const Blogs = () => {
    const [blogsData, setBlogsData] = React.useState([]);

    React.useEffect(() => {
        document.title = 'Blogs - ' + document.title;

        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/dscvitpune')
            .then((response) => response.json())
            .then((data) => {
                const blogItems = data.items.map((item) => {
                    let imageUrl = item.thumbnail;
                    if (!imageUrl || imageUrl === '') {
                        imageUrl = item.content.match(/src="([^"]+)"/)[1];
                    }
                    return {
                        author: item.author,
                        title: item.title,
                        link: item.link,
                        date: item.pubDate,
                        image: imageUrl
                    }
                })
                setBlogsData(blogItems);
            })
    }, [])

    
    return (
        <div className='container'>
            <div className="container py-5">
                <h1 className='text-center display-3 fw-800 lh-md py-5'>Blogs</h1>
                
                <div className="blogs-container container flex flex-row row gap-md-3 justify-content-center">
                    {
                        blogsData.map((blog, index) => {
                            return (
                                <div key={index} className="mb-3 col-md col-sm-12 border rounded blog-full-card">
                                    <a href={blog.link} className='text-decoration-none p-0 m-0' target='_blank'>
                                        <img src={blog.image} className="img-fluid border" alt={blog.title}/>
                                        <div className="container mt-3 z-3">
                                            {
                                                blog.date && <p className="fw-400 text-uppercase">{new Date(blog.date).toDateString().substring(3)}</p>
                                            }
                                            <p className="h5 fw-600 pb-2">{blog.title}</p>
                                            <p className="fw-400">{blog.author}</p>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
                <h2 className='text-center pt-5 font-monospace'>Follow us on <a href="https://medium.com/dscvitpune" target='_blank'>Medium</a> </h2>
            </div>
        </div>
    );
};

export default Blogs;