import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { HomeLayout } from '../scenes/HomeScreen/HomeLayout';
import { LoginLayout } from '../scenes/LoginScreen/LoginLayout';
import { NoteListLayout } from '../scenes/NoteListScreen/NoteListLayout';
import { RegisterLayout } from '../scenes/RegisterScreen/RegisterLayout';

export function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/notes">
                    <NoteListLayout />
                </Route>
                <Route path="/signup">
                    <RegisterLayout />
                </Route>
                <Route path="/login">
                    <LoginLayout />
                </Route>
                <Route path="/">
                    <HomeLayout />
                </Route>
            </Switch>
        </Router>
    )
}