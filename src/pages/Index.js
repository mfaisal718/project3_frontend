import { Link } from "react-router-dom";
import { useState } from "react";
import { Card } from "react-bulma-components";
import { Button } from 'react-bulma-components';

function Index(props) {
    // state to hold formData
    const [newForm, setNewForm] = useState({
        name: "",
        position: "",
        image: "",
    });

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createdPlayer(newForm);
        setNewForm({
            name: "",
            position: "",
            image: "",
        });
    };

    // loaded function
    const loaded = () => {
        return props.player.map((player) => (
            <Card style={{ width: 300, margin: 'auto' }}>
                <Card.Header.Title />
                <div key={player._id} className="player">
                    <Link to={`/player/${player._id}`}><h1>{player.name}</h1></Link>
                    <h2>{player.position}</h2></div>
                <Card.Image src={player.image} alt={player.name} />

            </Card>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.position}
                    name="position"
                    placeholder="position"
                    onChange={handleChange}
                />
                <Button color="primary" type="submit" value="create player" size="small" >CREATE PLAYER</Button>
            </form>
            {props.player ? loaded() : loading()}
        </section>
    );
}

export default Index;



