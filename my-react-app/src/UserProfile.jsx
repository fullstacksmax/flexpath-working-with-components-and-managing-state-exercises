/**Exercise 2: Component Hierarchy

Description: 

Build a component hierarchy with a parent component `Dashboard` that 
renders child components `UserProfile` and `UserStats`.
Display this component in App.jsx.
 */

/** */

import React from 'react'



function UserProfile({ user }) {
   return (
    <div> name: {user.name} age: {user.age} </div>
   );

}
export default UserProfile