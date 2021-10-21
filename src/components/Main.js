import { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
    const [player, setPlayer] = useState(null)

    const URL = "https://mohammed-project3.herokuapp.com/";

    const getPlayer = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setPlayer(data);
    };

    const createdPlayer = async (player) => {
        // make post request to create people
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

    useEffect(() => { getPlayer() }, []);

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index player={player} createdPlayer={createdPlayer} />
                </Route>
                <Route path="/player/:id" render={(rp) => (
                    <Show {...rp}
                    />
                )}
                />
            </Switch>
        </main>
    );
}

export default Main;