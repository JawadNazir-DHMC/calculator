import React from 'react'

const Greeting = () => {
    const curDate=new Date()
    const hours=curDate.getHours()
    let greetings="";
    const cssStyle:React.CSSProperties={};
    if(hours>=1 && hours<12){
        greetings="Good Morning"
        cssStyle.color="green"
    }else if
    (hours>=12 && hours<17){
        greetings="Good Afternoon"
        cssStyle.color="orange"
    }
    else if
    (hours>=17 && hours<19){
        greetings="Good Evening"
        cssStyle.color="purple"}
    else{
        greetings="GOOD NIGHT"
        cssStyle.color="black"
    }
  return (
    <div>Hello Sir/Mam, <span style={cssStyle}>{greetings}</span></div>
  )
}

export default Greeting