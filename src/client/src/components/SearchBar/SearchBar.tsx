import React from 'react';

import "./SearchBar.css";

export interface SearchBarProps {
    keyword: string,
    setKeyword: Function
}

export const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
    return (
        <input 
            className="searchBar"
            value={props.keyword}
            placeholder="Search notes..."
            onChange={(e) => props.setKeyword(e.target.value)}
        />
    )
}