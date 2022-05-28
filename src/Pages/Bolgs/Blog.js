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
            <h1 className='text-3xl'>What are the different ways to manage a state in a React application?</h1>
            <p>The differeance ways to manage is four way that are: 
                1.Local(UI) state - local state manage data one or another component.
                2.Global (UI) state - Global state manage data multiple component.
                3.Server state - Server data comes to the integrated the UI state.
                4.URL state - URL data comes to the  URL and query pathname.
            </p>
           
            <h1 className='text-3xl'>How does prototypical inheritance work?</h1>
            <p>
            Prototype-based programming is a  object-oriented programming which work reaptly object base. It can be  known also prototypal,prototype-oriented, classless, or instance-based programming. It's object base it should clone and extend. This  prototypical has no direct language. Objects directly other object prototype property.
            </p>
            <h1 className='text-3xl'>Why you do not set the state directly in React. </h1>
            <p>Reasons that cann't be do not set the state directly in react is:
                1. If you set direct in react after you call the setState information has been change.
                2.When call directly state in react it can't immediately this.state and after it's give you present value.
                3.You wil lost constrol of all componet.
            </p>
           
            <p>
                const =[{}]
            </p>
            <h1  className='text-3xl'>What is a unit test? Why should write unit tests?</h1>
            <p> Unit test is a software system which unit behavior. JavaScript Unit Testing is a method which JavaScript test code is written web page or web application .
            Unit testing allows software developers to think through the design of the software. It has to write before they write code. It can help to developer stay focused and them to create best design.
             
            </p>
        </div>
    );
};

export default Blog;