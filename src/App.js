import React, { useState } from 'react';
import Card from './Card';
import './index.css';
import Card_data from './Card_data';
import Navbar from './Navbar';



function App() {
  const [bg, setBg] = useState('#fff')
  const [color, setColor] = useState('#000')
  const [text, setText] = useState('ENABLE DARK MODE')
  const [bordor, setBordor] = useState('2px solid black')
  const [fullName, setfullName] = useState({
    firstName : '',
    lastName : '',
    email : '',
  })
  // const [lastName, setlastName] = useState('')
  // const [firstNameNew, setfirstNameNew] = useState('')
  // const [lastNameNew, setlastNameNew] = useState('')


  function bgColorChange() {
    setBg('#000')
    setColor('#fff')
    setText('DOUBLE CLICK TO ENABLE WHITE MODE')
    setBordor('2px solid white')
  };

  function bgBack() {
    setBg('#fff')
    setColor('#000')
    setText('ENABLE DARK MODE')
    setBordor('2px solid black')
  };

  function eventHandler(event) {
    const value = event.target.value;
    const name = event.target.name;

    setfullName((previous) => {
      return{
        ...previous,
        [name] : value,
      };
      // if (name === 'firstName') {
      //   return{
      //     firstName: value,
      //     lastName: previous.lastName
      //   };
      // } else if(name === 'lastName') {
      //   return{
      //     firstName: previous.firstName,
      //     lastName: value
      //   };
      // }
    });
  };

  function onSubmit(event) {
    event.preventDefault()
    alert('form submitted')
  }

  return (
    <>
      <div style={{ backgroundColor: bg, color: color }} className="heading">
        <h1 style={{ backgroundColor: bg, color: color }} className="">TOP RATED NETFLIX SERIES</h1>
        <button style={{ backgroundColor: bg, color: color, border: bordor }} onClick={bgColorChange} onDoubleClick={bgBack}>{text}</button>
      </div>

      {Card_data.map(all_card)};

      <br />
      <form onSubmit={onSubmit}>
        <div className="formcontainer">
          <h1>hello {fullName.firstName} {fullName.lastName}</h1>
          <p>{fullName.email}</p>
          <input type="text"
            onChange={eventHandler}
            name = 'firstName'
            value={fullName.firstName}
            placeholder='enter your first name' />
          <input type="text"
            onChange={eventHandler}
            name = 'lastName'
            value={fullName.lastName}
            placeholder='enter your last name' />
          <input type="email"
            onChange={eventHandler}
            name = 'email'
            value={fullName.email}
            autoComplete = 'off'
            placeholder='enter your email' />
          <button>submit</button>
        </div>
      </form>
    </>
  );
  function all_card(val) {
    return (
      <Card
        key={val.id}
        img_src={val.img_src}
        org_name={val.org_name}
        ser_name={val.ser_name}
        button={val.button}
      />
    );
  };
}

export default App;
