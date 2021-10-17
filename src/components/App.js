import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
      <div className = 'container-fluid'>
        <h4>イベント作成</h4>
        <form>
          <div className="form-group">
            <label htmlFor="eventTitle">タイトル</label>
            <input className="form-control" id="eventTitle"/>
          </div>
          <div className="form-group">
            <label htmlFor="eventbody">本文</label>
            <textarea className="form-control" id="eventbody"/>
          </div>
          <button className="btn btn-primary">イベントを作成</button>
          <button className="btn btn-danger">イベントを全て削除</button>
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
          </tbody>
        </table>
      </div>
  );
}


export default App;
