
import './App.css';
import { useEffect, useState } from 'react';
import { MyLists } from './MyLists';
import { addList, getAllList, editList, deleteList } from './FetchList';



function App() {

  const [myList, setMyList] = useState([]);
  const [title, setTitle] = useState('');
  const [editing, setEditing] = useState(false);
  const [listId, setListId] = useState('')

  useEffect(() => {
    getAllList(setMyList)
  }, [])

  const updatingInInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setListId(_id)
  }


  return (
    <div className="App">
      <h1 className='header'>Simple Task Management with To-Do List!</h1>
      <h2 className='text'>Quickly add, edit, and delete tasks. Stay organized and in control of your day with just a few clicks</h2>
      <input
      type="text"
      placeholder='What do you want to do?' 
      value = {title}
      onChange = {(e) => setTitle(e.target.value)}
      />
      <button 
      disabled={!title}
      onClick=
      {editing ? () => editList (listId, title, setTitle, setMyList, setEditing) :
      () => addList(title, setTitle, setMyList )}>
      
      {editing ? "Edit" : "Add"}
      </button>

      {myList.map((todo) => <MyLists text={todo.title} key={todo._id}
      updatingInInput = {() => updatingInInput(todo._id, todo.title)}
      deleteList = { () => deleteList(todo._id, setMyList)}/>
    )}
      
    </div>
  );
}

export default App;
