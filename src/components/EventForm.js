import React from 'react'

const EventForm =() => {
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
   <>
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
   </>
  )
}

