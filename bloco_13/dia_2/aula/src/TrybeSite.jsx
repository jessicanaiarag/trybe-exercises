import { link, Switch, Route } from 'react-router-dom'
import { Sobre, Aula, Contato, Home } from './Paginas'

function TrybeSite() {
    return (
        <div>
            <header className="header-site">
                <nav>
                    <span className="logo-site">
                        <link to="/">Trybe</link>
                    </span>
                    <span className="link-site">
                        <link to="/sobre">Sobre</link>
                    </span>
                    <span className="link-site">
                        <link to="/contato">Contato</link>
                    </span>
                    <span className="link-site">
                        <link to="/aula">Aula</link>
                    </span>
                </nav>
            </header>
            <div className="content-site">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/sobre" component={Sobre} />
                    <Route path="/contato" component={Contato} />
                    <Route path="/aula" render={() => <Aula titulo = "Aulas de Reac" />} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </div>
        </div >
    );
}

export default TrybeSite;