// We Must Import the React Library
import React from "react";
import { Card } from "react-bulma-components";

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
const NewsDisplay = ({ News }) => {
    //The component must return some JSX
    const loaded = () => {

        return (
            <>
                <Card style={{ width: 300, margin: 'auto' }}>
                    <Card.Header> {News[0].Title} </Card.Header>
                    <Card.Content> {News[0].Content} </Card.Content>
                    <Card.Footer> {News[0].Categories} </Card.Footer>
                </Card>
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