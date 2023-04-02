import * as React from 'react';
import './App.css';
import type { CatchBlockErrorType, IApp, IUser, RenderAndFunctionReturnType, _incrementCountReturnType, _incrementCountType } from 'App';



class App extends React.Component<{}, IApp> {
  constructor(props: {}) {
    super(props);

    this.state = {
      count: 0,
      users: [],
    };
  }

  _incrementCount: _incrementCountType = (): _incrementCountReturnType => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(usersJSON => usersJSON.json())
      .then(users => this.setState({ users: users }))
      .catch((e: CatchBlockErrorType) => console.log(e.message));
  }

  render(): RenderAndFunctionReturnType {
    return (
      <React.Fragment>
        {
          this.state.users.map((user: IUser): RenderAndFunctionReturnType => {
            return (
              <div key={user.id} style={{ margin: '20px' }}>
                {`${JSON.stringify(user)}`}
              </div>
            );
          })
        }
      </React.Fragment>
    );
  }
}

export default App;
