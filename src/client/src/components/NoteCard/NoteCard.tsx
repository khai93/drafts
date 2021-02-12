import React from 'react';

import TemplateImage from '../../assets/images/template.png';
import './NoteCard.css';

export interface NoteData {
    id: number,
    name: string,
    last_edited: Date
}

export interface NoteCardProps {
    noteData: NoteData
}
 
export const NoteCard: React.FC<NoteCardProps> = (props: NoteCardProps) => {
    return (
        <div className="noteCard__main">
            <img src={TemplateImage}></img>
            <h3>{props.noteData.name}</h3>
            <h5>Last edited {props.noteData.last_edited.toLocaleDateString()}</h5>
        </div>
    )
}