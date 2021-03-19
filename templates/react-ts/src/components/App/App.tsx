import { Home } from 'comps/Home';
import * as React from 'react';
import { HashRouter, Route, Redirect, Link } from 'react-router-dom';

import './style.less';

export class App extends React.Component<any, any> {
  public static defaultProps: Partial<any> = {
    count: 0,
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
      <div className='app'>
        <h1>React</h1>
        <HashRouter>
          <div>
            <ul className='app__router'>
              <li>
                <Link to='/home'>Home</Link>
              </li>
              {/* <li>
                <Link to='/field'>Field</Link>
              </li> */}
            </ul>
            <hr />
            <Route exact path='/home' component={Home} />
            <Redirect to='/home' />
          </div>
        </HashRouter>
      </div>
    );
  }
}
