import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';

interface IProps {}

export class Nav extends React.PureComponent<IProps, any> {
  public static defaultProps: Partial<any> = {};

  constructor(props: any) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div>
        <ul className="app__router">
          <li>
            <Link to="/index">Index</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <hr />
      </div>
    );
  }
}

const RouteNav = withRouter(Nav);

const withNav = (CompClass: React.ComponentClass): React.ComponentClass => {
  return class NavWrapper extends React.Component {
    render(): JSX.Element {
      return (
        <>
          <RouteNav />
          <CompClass />
        </>
      );
    }
  };
};

export default withNav;
