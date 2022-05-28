import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1  className='text-3xl'>How will you improve the performance of a React Application?</h1>
            <p>This way you improv your react application improve the performance:
                1.useMemo() use this hook improve your performance.
                2. If you render lot of data you can shortly render on your broswer viewport it use has  React libraries it's call windowing”.
                3.Use react pure component and update react commonent.
                4.Function should be call react component JSX in  render method.
                5. Lazy loading is one of major problem of react it slove to use React.lazy().
            </p>
        </div>
    );
};

export default Blog;