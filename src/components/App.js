import React, {useReducer, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'
import EventForm from './EventForm'
import Event from './Event'
const App = () => {
  const [state, dispatch] = useReducer( reducer, [])
  
  return (
      <div className = 'container-fluid'>
        <h4>イベント一覧</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>本文</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />))}
          </tbody>
        </table>
      </div>
  );
}


export default App;
