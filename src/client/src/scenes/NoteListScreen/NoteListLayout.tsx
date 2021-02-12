import React from 'react';
import { NoteData } from '../../components/NoteCard/NoteCard';

import { NoteListHeader } from './NoteListHeader';
import { NoteCardList } from './NoteCardList';

import "./NoteLIst.css";

export interface NoteListLayoutProps {

}

export const NoteListLayout: React.FC<NoteListLayoutProps> = (props: NoteListLayoutProps) => {
    const data: NoteData[] = [
        {
            id: 1,
            name: "Note #1",
            last_edited: new Date()
        },
        {
            id: 2,
            name: "Note #2",
            last_edited: new Date()
        },
        {
            id: 3,
            name: "Note #3",
            last_edited: new Date()
        }, {
            id: 4,
            name: "Note #4",
            last_edited: new Date()
        }
        , {
            id: 5,
            name: "Note #5",
            last_edited: new Date()
        },
        {
            id: 6,
            name: "Note #6",
            last_edited: new Date()
        },
        {
            id: 7,
            name: "Note #7",
            last_edited: new Date()
        },
        {
            id: 8,
            name: "Note #8",
            last_edited: new Date()
        },
        {
            id: 9,
            name: "Note #9",
            last_edited: new Date()
        },
        {
            id: 10,
            name: "Note #10",
            last_edited: new Date()
        },
        {
            id: 11,
            name: "Note #11",
            last_edited: new Date()
        },
        {
            id: 12,
            name: "Note #12",
            last_edited: new Date()
        },
        {
            id: 13,
            name: "Note #13",
            last_edited: new Date()
        },
        {
            id: 14,
            name: "Note #5",
            last_edited: new Date()
        }
    ];
    
    return (
        <div>
            <NoteListHeader />
            <NoteCardList notesData={data}/>
        </div>
    );
}