import * as React from 'react';

import withNav from 'comps/App/Nav';

interface IProps {}

export class Index extends React.PureComponent<IProps, any> {
  public static defaultProps: Partial<any> = {};

  constructor(props: any) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div>
        <h3>Home</h3>
      </div>
    );
  }
}

export default withNav(Index);
