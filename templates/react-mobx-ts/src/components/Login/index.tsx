import * as React from 'react';
import { Input, Button } from 'antd';

import './style.less';
import { withRouter, RouteComponentProps } from 'react-router';

interface IProps extends RouteComponentProps {}

export class Login extends React.PureComponent<IProps, any> {
  public static defaultProps: Partial<any> = {};

  constructor(props: any) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className="login">
        <div className="login__form">
          <h1>Please Login</h1>
          <div className="login__form__row">
            <Input size="large" placeholder="User Name" />
          </div>
          <div className="login__form__row">
            <Input size="large" placeholder="Password" />
          </div>
          <div className="login__form__row__control">
            <Button
              size="large"
              type="primary"
              className="login__button"
              onClick={this.login}
            >
              Login
            </Button>
          </div>
          <div className="login__copyright">&copy;2019</div>
        </div>
      </div>
    );
  }

  private login = () => {
    this.props.history.push('/index');
  };
}

export default withRouter(Login);
