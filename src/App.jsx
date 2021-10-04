import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LangContext } from '../src/utils/context'
import { HeadingBar } from './components/heading_bar'
import { NotFoundError } from './errors/404'
import GridDefault from './gird-default'
import { HomePage } from './home'
import { ContactUs } from './contact_us'

export default function App() {
    const [lang, setLang] = React.useState('fr')
    const lang_context = React.useMemo(
        () => ({
            lang: lang,
            setLang: setLang,
        }),
        [lang, setLang]
    )

    return (
        <LangContext.Provider value={lang_context}>
            <Router>
                <HeadingBar />
                <Switch>
                    <Route exact={true} path="/grid-default">
                        <GridDefault />
                    </Route>
                    <Route exact={true} path={"/contact"}>
                        <ContactUs/>
                    </Route>
                    <Route exact={true} path="/">
                        <HomePage />
                    </Route>
                    <Route path="*">
                        <NotFoundError />
                    </Route>
                </Switch>
            </Router>
        </LangContext.Provider>
    )
}
