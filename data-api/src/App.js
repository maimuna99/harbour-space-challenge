
import './App.css';
import React, { useEffect, useState } from "react";

const App = () => {
    const [name, setName] = useState("");

    useEffect(() => {
        const url = "https://stage.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.name);
                setName(json.name);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default App;
