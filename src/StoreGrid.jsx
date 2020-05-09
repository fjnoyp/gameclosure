import React from 'react';


const boxStyle = {
    display: 'flex', 
    flexDirection: 'row',  
    //backgroundColor: 'yellow',
    margin: '5px', 
    minWidth: '150px',
    minHeight: '40px',
    width: '45%',
    height: '20%',
  }
  
  const leftBoxImageStyle = {
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  
  
    backgroundColor: 'purple',
    backgroundClip: 'content-box',
    padding: '2%',
    width: '20%',
    borderRadius: '40px',  
    
  }
  
  
  
  
  const progressBarStyle = {
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', 
  
    backgroundColor: 'lightGreen',  
    backgroundClip: 'content-box',
    padding: '2px',
  
    width: '100%', 
    height: '50%', 
    borderRadius: '10px',  
    
    fontSize: '20px',  
    color: 'black',  
    
  }
  
  const bottomBarStyle = {
    //backgroundColor: 'brown', 
    width: '100%',
    height: '50%',
    display: 'flex',
    flexDirection: 'row',
  }
  
  const priceStyle = {
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', 
  
    
    backgroundColor: 'orange',
    backgroundClip: 'content-box',
  
    
    borderRadius: '10px',  
    padding: '2px',
  
    width: '65%',
    height: '100%',
  }
  
  const timeStyle = {
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', 
  
    backgroundColor: 'grey', 
    backgroundClip: 'content-box',
    padding: '2px',
  
    width: '35%',
    height: '100%',
    borderRadius: '10px',  
    
    
    
  }


  export default () => (
          <Box/>
  ) 
  
  
  
  
  function Box(){
    return(
  
      <div style={boxStyle}>
  
  
        <div style={leftBoxImageStyle}>
  
         
            { /* <FontAwesomeIcon icon="lemon" /> */ } 
            <p>999</p> 
         
  
          </div>
  
        <div style={rightContentStyle}>
  
          <div style={progressBarStyle}>
            
            <p> + 9,999,999 </p> 
  
          </div>
  
          <div style={bottomBarStyle}>
  
            <div style={priceStyle}>
              <p> Buy x1 </p>
              <p> 25,000,000,000 </p>
            </div>
            <div style={timeStyle}>
              <p> 00:00:00 </p>
            </div>
  
          </div>
  
        </div>
  
      </div> 
  
    )
  }
  
  