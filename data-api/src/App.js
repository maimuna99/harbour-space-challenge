
import './App.css';
import React, { useEffect, useState } from "react";

const App = () => {
    const [scope, setScope] = useState("");

    useEffect(() => {
        const url = "https://stage.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.scope);
                setScope(json.scope);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <p>{scope}</p>
        </div>
    );
};

export default App;
