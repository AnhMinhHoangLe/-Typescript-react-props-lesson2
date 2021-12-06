import "./styles.css";
import { Button } from "./Components/Button/Button";
import { Input } from "./Components/Input/Input";
export default function App() {
    return (
        <div className="App">
            <Button
                handleClick={(event, id) => {
                    console.log("Button Clicked", event, id);
                }}
            />
            <hr />
            <Input
                value=""
                handleChange={(event) => {
                    console.log(event.target.value);
                }}
            />
        </div>
    );
}
