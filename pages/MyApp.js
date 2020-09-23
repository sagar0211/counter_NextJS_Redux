import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {incrementCounter, decrementCounter} from '../redux/actions/counterActions';
import styles from '../styles/MyApp.module.css';


export const MyApp = ({}) => {
    const {counter} = useSelector((state) =>{
        const {counter} = state;
        return {counter}

    });
    const dispatch = useDispatch();

    return (
        <div className = "MyApp" >
            <header className={styles.head}>NEXT.JS Counter using Redux(Hooks)</header>
            <div  className = {styles.tab} >
                <br/>
                <button className = { styles.inc } onClick={() => {dispatch(incrementCounter())}}>Increment</button>
                <h1 className={ styles.show } >{counter.value}</h1>
                <button className = { styles.dec } onClick={() => {dispatch(decrementCounter())}}>Decrement</button>
                <br/>
                <footer className={styles.foot}>Thank you for using Counter</footer>
            </div>
        </div>
    )
}
