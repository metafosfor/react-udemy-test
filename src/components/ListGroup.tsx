import { useState } from "react";


function ListGroup() {
    const items = [
        "New York",
        "San Francisco",
        "Tokyo",
        "London",
        "Paris",
        "Berlin"];

    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    return (
        <>
            <h1>CITY List</h1>
            <ul className="list-group">
                {items.map(item => <li
                    className={"list-group-item" + (selectedItem === item ? " active" : "")}
                    key={item}
                    onClick={() => setSelectedItem(item)}
                >
                    {item}
                </li>)}

            </ul>
        </>
    );

}

export default ListGroup;