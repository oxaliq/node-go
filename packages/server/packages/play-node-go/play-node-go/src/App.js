import React, {useState, useEffect, useReducer} from 'react';
import './App.scss';
import config from './config';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import socketIOClient from 'socket.io-client';

import MainWrapper from './components/MainWrapper/MainWrapper';

import { stateReducer } from './reducers/stateReducer';
import { initState } from './reducers/init/stateReducer.init';

export const socket = socketIOClient(config.apiAddress);


function App() {
  const [fetchData, setFetchData] = useState();
  const [socketData, setSocketData] = useState();
  const [error, setError] = useState([]);

  const [ state, dispatch ] = useReducer(
    stateReducer,
    {},
    initState
  );

  const fetchIndexAPI = () => {
    fetch(config.apiAddress)
    .then(res => res.text())
    .catch(err => setError([...error, err]))
    .then(data => {
      const action = {
        type: 'INDEX',
        message: 'INDEX_DATA',
        body: data
      }
      dispatch(action)
    })
  }

  const socketConnect = () => {
    socket.emit('connect');
    socket.on('connected', data => setSocketData('socket connected'));
    socket.on('connect_error', err => setError([...error, err]));
    socket.on('error', err => setError([...error, err]))
  }

  useEffect(() => {
    fetchIndexAPI();
    socketConnect();
  }, [socketData, state.user])

  return (
    <Router>
    {/* {fetchOnLoad()}; */}
      
      <div data-testid="App" className="App">        
        <Switch>

          <Route path="/account">
            <MainWrapper page="account" state={state} dispatch={dispatch}/>
          </Route>

          <Route path="/rooms">
            <MainWrapper page="room" state={state} dispatch={dispatch}/>
          </Route>

          <Route path="/games">
            <MainWrapper page="game" state={state} dispatch={dispatch}/>
          </Route>
        
          <Route path="/news">
            <MainWrapper page="news" state={state} dispatch={dispatch}/>
          </Route>
        
          <Route path="/">
            {/* Add ternary for login */}
            <MainWrapper page="home" state={state} dispatch={dispatch}/>
          </Route>

        </Switch>
        <h1>React Boilerplate</h1>
        {fetchData ? <p>{fetchData}</p> : <></>}
        {socketData ? <p>{socketData}</p> : <></>}
        {/* {error ? error.map(err => <p>{err}</p>): <></>} */}
      </div>
    </Router>
  );
}

export default App;