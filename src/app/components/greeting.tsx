import React from 'react'

const Greeting = () => {
    let curDate=new Date()
    curDate=curDate.getHours()
    let greetings="";
    const cssStyle={};
    if(curDate>=1 && curDate<12){
        greetings="Good Morning"
        cssStyle.color="green"
    }else if
    (curDate>=12 && curDate<17){
        greetings="Good Afternoon"
        cssStyle.color="orange"
    }
    else if
    (curDate>=17 && curDate<19){
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