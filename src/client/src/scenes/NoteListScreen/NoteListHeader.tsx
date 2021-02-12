import React, { useState } from 'react';

import Logo from '../../assets/images/Drafts.png';
import { SearchBar } from '../../components/SearchBar/SearchBar';

export interface NoteListHeaderProps {}

export const NoteListHeader: React.FC<NoteListHeaderProps> = (props: NoteListHeaderProps) => {
    const [keyword, setKeyword] = useState("");

    return (
        <header className="noteListHeader__main">
            <img src={Logo} />
            <span>-</span>
            <h1>Notes</h1>
            <SearchBar keyword={keyword} setKeyword={setKeyword}/>
        </header>
    )
}