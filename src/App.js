import React, { useMemo, useState } from "react";

import Main from "./Component/Main";
import { faker } from "@faker-js/faker";
const App = () => {
    const [dummynotes, setDummynotes] = useState([]);

    const generateRandomNote = () => {
        let tmpNotes = [];
        for (let index = 0; index < 200; index++) {
            tmpNotes.push(
                {
                    avatar: faker.image.avatar(),
                    text: faker.name.fullName(),
                    
                });
        }

        return tmpNotes;
    }

    const notes = useMemo(() => generateRandomNote(), []);

    const deletnotes = (searchNote) => {
        const filternotes = notes.filter((note) => note.text.toLowerCase().includes(searchNote.toLowerCase()))
        setDummynotes(filternotes);
    };

    return (
        <div>
          
            <Main deletandler={deletnotes} note={dummynotes} />
        </div>
    )
}

export default App;