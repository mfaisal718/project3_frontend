import { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
    const [player, setPlayer] = useState(null)

    const URL = "https://mohammed-project3.herokuapp.com/player";

    const getPlayer = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setPlayer(data);
    };

    const createdPlayer = async (player) => {
        // make post request to create player
        await fetch(URL, {
            method: "POST",
            headers: {
                "content-Type": "Application/json",
            },
            body: JSON.stringify(player),
        });
        //update list of player
        getPlayer();
    };

    const updatePlayer = async (player, id) => {
        // make put request to create player
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(player),
        });
        // update list of player
        getPlayer();
    }

    const deletePlayer = async id => {
        // make delete request to create player
        await fetch(URL + id, {
            method: "DELETE",
        })
        // update list of player
        getPlayer();
    }

    useEffect(() => { getPlayer() }, []);

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index player={player} createdPlayer={createdPlayer} />
                </Route>
                {player &&
                    <Route path="/player/:id"
                        render={(rp) => (
                            <Show
                                player={player}
                                updatePlayer={updatePlayer}
                                deletePlayer={deletePlayer}
                                {...rp}
                            />
                        )}
                    />}
            </Switch>
        </main>
    );
}

export default Main;