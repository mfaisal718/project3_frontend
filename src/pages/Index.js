import { useState } from "react";
import { Link } from "react-router-dom"

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
        props.createPlayer(newForm);
        setNewForm({
            name: "",
            position: "",
            image: "",
        });
    };

    // loaded function
    const loaded = () => {
        return props.player.map((player) => (
            <div key={player._id} className="player">
                <Link to={`/player/${player._id}`}><h1>{player.name}</h1></Link>
                <img src={player.image} alt={player.name} />
                <h3>{player.position}</h3>
            </div>
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
                <input type="submit" value="Create Player" />
            </form>
            {props.player ? loaded() : loading()}
        </section>
    );
}

export default Index;



