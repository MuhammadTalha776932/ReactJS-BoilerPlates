import * as React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider,useQuery } from 'react-query';
import type { IApp, IUser, RenderAndFunctionReturnType, _incrementCountReturnType, _incrementCountType } from 'App';



class App extends React.Component<{}, IApp> {

  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
      users: [],
      queryClient: new QueryClient(),
    };
  }


  _incrementCount: _incrementCountType = (): _incrementCountReturnType => {
    this.setState({ count: this.state.count + 1 });
  };

  async componentDidMount() {
    const { queryClient } = this.state;
    const data = await queryClient.fetchQuery('my-data', async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = response;
      return response.json();
    });

    this.setState({
      users: data
    })
  }

  render(): RenderAndFunctionReturnType {
    const {
      queryClient,
      users,
    } = this.state;
    return (
      <QueryClientProvider client={queryClient}>
        <React.Fragment>
          {
            users?.map((user: IUser, index: number) => (

              <div key={index} className="user-details">
                <h2>{user.name}</h2>
                <div className="details">
                  <p><strong>Username:</strong> {user.username}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Phone:</strong> {user.phone}</p>
                  <p><strong>Website:</strong> {user.website}</p>
                  <p>
                    <strong>Address:</strong> {user.address.street}, {user.address.suite},{' '}
                    {user.address.city}, {user.address.zipcode}
                  </p>
                  <p><strong>Latitude:</strong> {user.address.geo.lat}</p>
                  <p><strong>Longitude:</strong> {user.address.geo.lng}</p>
                </div>
              </div>
            ))
          }
        </React.Fragment>
      </QueryClientProvider>
    );
  }
}

export default App;
