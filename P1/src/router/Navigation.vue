<template>  
    <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/Counter">1. Counter</router-link></li>
            <li><router-link to="/Decider">2. Decider</router-link></li>
            <li><router-link to="/GuessGame">3. Guess Game</router-link></li>
        </ul>
    </nav>
</template>

<style>
nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;

    padding: 0px 3vw;
    height: 50px;
    max-width: 100vw;
    margin-bottom: 30px;
    background-color: #2c3e50;
} nav li {
    list-style: none;
    color: #fafafa;
    display: inline-block;
    padding-left: 10px;
} nav a {
    color: unset;
    text-decoration: none;
} nav > ul {
    display: flex;
    width: 100%;
    margin: 0%;
    padding: 0%;
    justify-content: space-between;
} nav li:hover, nav .router-link-active, nav .router-link-exact-active {
    text-decoration: underline;
}
</style>