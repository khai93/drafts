import React from 'react';

import { NoteCard, NoteData } from '../../components/NoteCard/NoteCard'

export interface NoteListProps {
    notesData: NoteData[]
}

export const NoteCardList: React.FC<NoteListProps> = (props: NoteListProps) => {
    
    const noteCards = props.notesData.map(note => 
        <NoteCard noteData={note} />
    );

    return (
        <div className="notelist__main">
            {noteCards && noteCards.length > 0 ?
             noteCards : 
             <p>No notes found.</p>}
        </div>
    )
}