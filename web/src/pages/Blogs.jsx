import React from 'react';

const Blogs = () => {
    const [blogsData, setBlogsData] = React.useState([]);

    React.useEffect(() => {
        fetch('./data/blogs.json')
            .then((response) => response.json())
            .then((data) => setBlogsData(data))
    }, [])

    
    return (
        <div className='container'>
            <div className="container py-5">
                <h1 className='text-center display-3 fw-700 lh-md py-5'>Blogs</h1>
                <div className="blogs-container container flex flex-row row gap-3 justify-content-center">
                    {
                        blogsData.map((blog, index) => {
                            return (
                                <div key={index} className="mb-3 w-25 border rounded">
                                    <a href={blog.link} className='text-decoration-none p-0 m-0 text-dark' target='_blank'>
                                        <div className="p-0 m-0 w-full">
                                            <img src={blog.image} className="img-fluid w-full bg-dark p-3" alt={blog.title} style={{objectFit: 'cover'}}/>
                                        </div>
                                        <div className="container mt-3 pb-5">
                                            <p className="h3 fw-600">{blog.title}</p>
                                            <p className="fw-400">{blog.author}</p>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;