import React from 'react';
import { Route } from 'react-router-dom'


function myFunction(parametro) {
    // if (parametro === 'calendar') {
    //pode fazer varios if
    switch (parametro) {
        case 'calendar': //ou fazer switch
    }
}

class Content extends React.Component {
    render() {
        return (
            <main>
                <switch>
                    <Route path="/calendar" component={() => { }} />
                    <Route path="/calendar/feriados" component={() => { }} />
                    <Route path="/live-lectures" component={() => { }} />
                    <Route path="/trybe-talks" component={() => { }} />
                    <Route path="/solutions" component={() => { }} />
                </switch>
            </main>
        )
    }

}

export default Content;