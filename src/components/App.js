import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import FirstList from './FirstList';
import SecondList from './SecondList';
import ThirdList from './ThirdList';
import '../styles.css';

const App = () => {
  return (
    <div>
      <Nav />
      <div className="todos-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/daily"
            render={() => <FirstList title={'Daily Todos'} />}
          />
          <Route
            path="/weekly"
            render={() => <SecondList title={'Weekly Todos'} />}
          />
          <Route
            path="/monthly"
            render={() => <ThirdList title={'Monthly Todos'} />}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
