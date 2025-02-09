/**Exercise 2: Component Hierarchy

Description: 

Build a component hierarchy with a parent component `Dashboard` that 
renders child components `UserProfile` and `UserStats`.
Display this component in App.jsx.
 */
import React from 'react'
import UserProfile from './UserProfile'
import UserStats from './UserStats'
import DeepNestedComponent from "./DeepNestedComponent";





function Dashboard() {
    
    return (
        <div>
        <UserProfile user={{ name: "max", age: 34 }}/>
        <UserStats/>
        <DeepNestedComponent />

        </div>
    );
}

export default Dashboard;


