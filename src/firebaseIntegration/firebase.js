import React, { createContext, useEffect } from 'react'
import firebaseConfig from './firebaseConfig';
import app from 'firebase/app'
import 'firebase/database';
import { useDispatch } from 'react-redux';
import {addExpense,removeExpense, editExpense} from '../actions/expenses' 


// we create a React Context, for this to be accessible
// from a component later
const FirebaseContext = createContext(null)
export { FirebaseContext }

export default ({ children }) => {
    let firebase = {
        app: null,
        database: null
   }

    const dispatch = useDispatch();

    // check if firebase app has been initialized previously
    // if not, initialize with the config we saved earlier
    if (!app.length) {
        app.initializeApp(firebaseConfig);
        firebase = {
            app: app,
            database: app.database(),
            api: {
              addExpense,
                removeExpense,
                editExpense
            }
        }
    }

    // function to query Expenses from the database and
    // fire a Redux action to update the items in real-time
    // function getExpenses(){
    //     firebase.database.ref('expense').on('value', (snapshot) => {
    //         const vals = snapshot.val();
    //         let _records = [];
    //         for(let key in vals){
    //             _records.push({
    //                 ...vals[key],
    //                 id: key
    //             });
    //         }
    //         // setTodos is a Redux action that would update the todo store
    //         // to the _records payload
    //         dispatch(setTodos(_records));
    //     })
    // }

    return (
        <FirebaseContext.Provider value={firebase}>
            {children}
        </FirebaseContext.Provider>
    )
}