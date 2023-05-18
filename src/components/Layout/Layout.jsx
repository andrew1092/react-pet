import React from "react";
import classes from './Layout.module.css'

const Layout = ({children}) => {
    return (
        <div className={classes.wrapper}>
            <header className={classes.header}>
                <div className="container">
                    <h1>Recipe Book</h1>
                </div>
            </header>
            <main className={classes.main}>
                <div className="container">
                    {children}
                </div>
            </main>
            <footer className={classes.footer}>
                <div className="container">
                    <h3>Recipe Book</h3>
                </div>
            </footer>
        </div>
    )
}

export default Layout;