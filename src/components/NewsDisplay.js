// We Must Import the React Library
import React from "react";

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
const NewsDisplay = ({ News }) => {
    //The component must return some JSX
    const loaded = () => {

        return (
            <>
                <h1>{News[0].Title}</h1>
                <p>{News[0].Content}</p>
                <p>{News[0].Categories}</p>
            </>
        );
    }
    const loading = () => {
        return <h1>No News to Display</h1>
    }
    return News ? loaded() : loading();
}

// We must export the component to use it in other files
export default NewsDisplay;