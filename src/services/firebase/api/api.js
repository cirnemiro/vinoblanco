import { auth } from '../config/firebaseConfig'

//Auth

export async function singInWithEmailAndPassword(email, password) {
    return await auth.signInWithEmailAndPassword(email, password);
}



// CRUD ----------------------
// Create


export const createItem = () => {

}

// Read

export const getItem = () => {

}

export const getItems = () => {

}

export const sortItems = () => {

}

//Update

export const updateItem = () => {

}

//Delete

export const deleteItem = () => {

}