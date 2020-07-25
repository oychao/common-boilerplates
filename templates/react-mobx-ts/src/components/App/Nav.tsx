import * as React from 'react';
import { Link } from 'react-router-dom';

interface IProps {}

class Nav extends React.PureComponent<IProps, any> {
  public static defaultProps: Partial<any> = {};

  constructor(props: any) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div>
        <ul className='app__router'>
          <li>
            <Link to='/index'>Index</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
        <hr />
      </div>
    );
  }
}

export default Nav;
