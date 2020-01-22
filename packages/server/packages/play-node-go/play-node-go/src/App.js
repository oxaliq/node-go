import React, {useState, useEffect, useReducer} from 'react';
import socketIOClient from 'socket.io-client';
import config from './config';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import MainWrapper from './pages/Layout/MainWrapper/MainWrapper';
import { stateReducer } from './reducers/stateReducer';
import { initState } from './reducers/init/stateReducer.init';
import indexServices from './services/api/indexServices';
import './App.scss';

export const socket = socketIOClient(config.socketAddress);


function App() {
  const [fetchData, setFetchData] = useState();
  const [socketData, setSocketData] = useState();
  const [error, setError] = useState([]);

  const [ state, dispatch ] = useReducer(
    stateReducer,
    {},
    initState
  );

  const fetchIndexAPI = async () => {
    const response = await indexServices.indexService();
    if (response) {
      const action = {
        type: 'INDEX',
        message: 'SET_USER',
        body: response
      }
      dispatch(action)
    }
  }

  useEffect(() => {
    fetchIndexAPI();
  }, [])

  const socketConnect = () => {
    socket.emit('connect');
    socket.on('connected', data => setSocketData('socket connected'));
    socket.on('connect_error', err => setError([...error, err]));
    socket.on('error', err => setError([...error, err]))
  }

  useEffect(() => {
    socketConnect();
  }, [])

  return (
    <Router>
      
      <div data-testid="App" className="App">        
        <Switch>

          <Route path="/account">
            <MainWrapper page="account" state={state} dispatch={dispatch}/>
          </Route>

          <Route path="/rooms/:id">
            <MainWrapper page="room" state={state} dispatch={dispatch}/>
          </Route>

          <Route path="/games">
            <MainWrapper page="game" state={state} dispatch={dispatch}/>
          </Route>
        
          <Route path="/news">
            <MainWrapper page="news" state={state} dispatch={dispatch}/>
          </Route>

          <Route path="/home">
            <MainWrapper page="home" state={state} dispatch={dispatch}/>
          </Route>
        
          <Route path="/">
            {state.user.username 
            ? <MainWrapper page="home" state={state} dispatch={dispatch}/> 
            : <MainWrapper page="news" state={state} dispatch={dispatch}/>}
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
