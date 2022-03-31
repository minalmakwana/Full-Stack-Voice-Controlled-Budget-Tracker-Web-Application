import React from 'react';
//Using navigation to provide sufficient gap from the top border

const Navigation = ({ onRouteChange, isSignedIn }) => {
      return (
<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p className='f3 link dim black underline pa3 pointer'></p>
 </nav>
      );
}




export default Navigation;