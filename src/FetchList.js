import axios from 'axios';

const getAllList = (setMyList) => {
    axios.get("https://todolist-backend-esb6.onrender.com")
    .then (({data}) => {console.log(data)
        setMyList(data)
    })
}

const addList = (title, setTitle, setMyList) => {
    axios.post('https://todolist-backend-esb6.onrender.com/saveList', { title })
    .then((data) => {
        console.log(data)
        setTitle('')
        getAllList(setMyList)
    })
}

const editList = ( listId, title, setTitle, setMyList, setEditing) => {
    axios.put('https://todolist-backend-esb6.onrender.com/editList', {_id: listId, title})
    .then((data) => {
        console.log(data)
        setTitle('')
        setEditing(false)
        getAllList(setMyList)
    })
}

const deleteList = (_id, setMyList) => {
    axios.delete(`https://todolist-backend-esb6.onrender.com/deleteList/${ _id }`)
    .then((data) => {
        console.log(data)
        getAllList(setMyList)
    })
}



export { getAllList, addList, editList, deleteList } ;