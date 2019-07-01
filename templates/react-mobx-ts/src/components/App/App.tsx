import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

import Home from '../Home';
import Nav from './Nav';

import 'antd/dist/antd.css';
import './style.less';

interface IProps {}

class App extends React.Component<IProps> {
    public static defaultProps: IProps = {};

    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <HashRouter>
                <div className="app">
                    <Nav />
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to="/index" />} />
                        <Route exact path="/index" component={Home} />
                    </Switch>
                </div>
            </HashRouter>
        );
    }

    public componentWillMount(): void {}
}

export default hot(App);
