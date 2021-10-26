import { useState } from "react";
import 'bulma/css/bulma.min.css';
import { Button } from 'react-bulma-components';

function Show(props) {
    const id = props.match.params.id;
    const player = props.player;
    const playa = player.find(p => p._id === id);

    const [editForm, setEditForm] = useState(playa);

    // handleChange function for form
    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value });
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.updatePlayer(editForm);
        props.history.push("/");
    }

    const removePlayer = event => {
        props.deletePlayer(playa._id);
        props.history.push("/");
    }

    return (
        <div className="player">
            <h1>{player.name}</h1>
            <h2>{player.title}</h2>
            <img src={player.image} alt={player.name} />
            <Button id="delete" color="danger" size="small" onClick={removePlayer}>
                DELETE
            </Button>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.position}
                    name="position"
                    placeholder="position"
                    onChange={handleChange}
                />
                <Button type="submit" value="UPDATE" color="primary" size="small">UPDATE</Button>
            </form>
        </div>
    )
}

export default Show;