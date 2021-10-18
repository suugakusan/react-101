import React, {useReducer, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'
import Event from './Event'
const App = () => {
  const [state, dispatch] = useReducer( reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const addEvent = e => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })
    setTitle("")
    setBody("")
  }
  
  const deleteAddEvent = e => {
    e.preventDefault()
    const result = window.confirm('すべてのイベントを本当に削除してもいいですか')
    if (result) dispatch({type: 'DELETE_ALL_EVENT'})
  }
  
  const unCreate = title === '' || body === ''
  const unAllDelete = state.length === 0
  
  return (
      <div className = 'container-fluid'>
        <h4>イベント作成</h4>
        <form>
          <div className="form-group">
            <label htmlFor="eventTitle">タイトル</label>
            <input className="form-control" id="eventTitle" value={title} onChange={e=> setTitle(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="eventbody">本文</label>
            <textarea className="form-control" id="eventbody" value={body} onChange={e=> setBody(e.target.value)}/>
          </div>
          <button className="btn btn-primary" onClick={addEvent} disabled={unCreate}>イベントを作成</button>
          <button className="btn btn-danger" onClick={deleteAddEvent} disabled={unAllDelete}>イベントを全て削除</button>
        </form>
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
