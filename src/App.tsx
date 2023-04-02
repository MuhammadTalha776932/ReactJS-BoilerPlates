import * as React from 'react';
import './App.css';

interface IApp {
  count: number,
  users: Array<unknown>
}
class App extends React.Component<{}, IApp> {
  constructor(props: {}) {
    super(props);

    this.state = {
      count: 0,
      users: [],
    };
  }

  _incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(usersJSON => usersJSON.json())
      .then(users => this.setState({ users: users }))
      .catch((e:{message:string}) => console.log(e.message));
  }

  render(): React.ReactNode {
    return (
      <React.Fragment>
        {/* <h1>count : {this.state.count}</h1>
        <button onClick={this._incrementCount}>+</button> */}
        {
          this.state.users.map((user:any) => {
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
