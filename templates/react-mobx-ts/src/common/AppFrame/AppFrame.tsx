import { hot } from 'react-hot-loader';
import * as React from 'react';
import { observer } from 'mobx-react';

import './style.less';

interface IProps {}

@observer
class AppFrame extends React.Component<IProps> {
  static defaultProps: IProps = {};

  constructor(props: IProps) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className='app-frame'>
        <h3>AppFrame</h3>
      </div>
    );
  }
}

export default hot(module)(AppFrame);
