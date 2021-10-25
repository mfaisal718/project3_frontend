import { useState } from "react";
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

    const removePlayer = () => {
        props.deletePlayer(player._id);
        props.history.push("/");
    }

    return (
        <div className="playa">
            <h1>{player.name}</h1>
            <h2>{player.title}</h2>
            <img src={player.image} alt={player.name} />
            <button id="delete" onClick={removePlayer}>
                DELETE
            </button>
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
                <input type="submit" value="UPDATE" />
            </form>
        </div>
    )
}

export default Show;