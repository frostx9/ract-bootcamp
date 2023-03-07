// In Contact.js - This is Children Compnenet
import React from "react"

// This is like forEach function in vanila js
export default function Contact(props) {

  // export default function Contact({img, name, phone, email }) { // With Destruture

  return (

    <div className="contact-card">
      <img src={props.img} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src="./images/phone-icon.png" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src="./images/mail-icon.png" />
        <p>{props.email}</p>
      </div>
    </div>

  )
}



// In App.js - This is Parent Component
import React from "react"
import Contact from "./Contact"

export default function App() {
  return (
    <div className="contacts">
      <Contact
        img="./images/mr-whiskerson.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow" // For String
        isPun={true}  // For Boolean
        upvotes={10} // For Number
        downvotes={2}
        comments={[{ author: "", body: "", title: "" }]}
      />
      <Contact
        img="./images/fluffykins.png"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img="./images/felix.png"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img="./images/pumpkin.png"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  )
}

<h3 style={{ display: props.setup ? "block" : "none" }}>Setup: {props.setup}</h3>  // Condtional Props


// Map Method

export default function App() {
  const colors = [
    <h3>Red</h3>,
    <h3>Orange</h3>,
    <h3>Yellow</h3>,

  ]
  // Retrun method of a array
  return (
    <div>
      {colors}
    </div>
  )
}

//Example

export default function App() {

  const jokeElements = jokesData.map(joke => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />  // Props Method with map array method
  })

  return (
    <div>
      {jokeElements}
    </div>
  )
}