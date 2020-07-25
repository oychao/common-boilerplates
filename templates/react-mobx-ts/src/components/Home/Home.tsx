import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

interface IProps {}

@observer
export class Index extends React.PureComponent<IProps, any> {
  public static defaultProps: Partial<any> = {};

  @observable
  private list: string[] = ['ga@rabomve.mv', 'gersabtav@kious.mz', 'nefjegi@fa.gl', 'netuwuc@mok.sx'];

  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div>
        <h3>Home</h3>
        <ul>
          {this.list.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  @action
  public componentDidMount(): void {
    this.list.push('nonoze@gif.co');
  }
}

export default hot(Index);
