import { hot } from 'react-hot-loader';
import * as React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

import Home from '../Home';
import Login from '../Login';

import './style.less';

class App extends React.Component<any, any> {
  public static defaultProps: Partial<any> = {
    count: 0
  };

  constructor(props: any) {
    super(props);
    this.handleCount = this.handleCount.bind(this);
  }

  handleCount(): void {
    this.props.handleCount(1);
  }

  render(): JSX.Element {
    return (
      <HashRouter>
        <div className="app">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/index" />} />
            <Route exact path="/index" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </HashRouter>
    );
  }

  public componentWillMount(): void {}
}

export default hot(module)(App);
