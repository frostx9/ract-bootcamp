/**
 * Props Mainly Pass From Parent To Child, But We Can Send Props Once Child Component To Another Component
 * 
 * Though you cannot pass props directly from one child to another child. Instead, you pass the data up to the parent, and the parent passes it down to whichever child 
 * needs it. This pattern is called “lifting state up”
 * 
 * We Can Send Anythings Through Props.. Like Data, Objects, Functions, Array ... Etc
 * 
 * 
 * 
 * We Decalare Two State In Parent Component, Whihch Will Be Shared Between Child Components
 * 
 * When Child A Send Message To Parent, It Sends Via setMessageFromA() State which is Defined in Parnet Component, Then It Update the messageFromA State
 * Pass Down to ChildB Via Props
 * 
 * When Child B Send Message To Parent, It Sends Via setMessageFromB() State which is Defined in Parnet Component, Then It Update the messageFromB State
 * Pass Down to ChildA Via Props
 * 
 * Remeber When We Pass A Props we give Name. This Name Beacme the Prop Name. Whichs Link To The Variable Name
 * receivedMessage={setMessageFromA}
 * 
 * setMessageFromA() Is A State Function... When We Pass Via receivedMessage name... receivedMessage it Became The State Fucntion Which is Referring To 
 * setMessageFromA() Fucntion
 * 
 */

// Parent Component
function Parent() {

  // Shared state in the Parent
  const [messageFromA, setMessageFromA] = useState("");
  const [messageFromB, setMessageFromB] = useState("");

  return (
    <div>
      <h2>Parent Component</h2>

      {/* Pass down setter for A and the message from B */}
      <ChildA receivedMessage={messageFromB} sendToParent={setMessageFromA} />

      {/* Pass down setter for B and the message from A */}
      <ChildB receivedMessage={messageFromA} sendToParent={setMessageFromB} />
    </div>
  );
}


// Child A Component
function ChildA({ receivedMessage, sendToParent }) {
  return (
    <div>
      <h3>Child A</h3>
      <input
        type="text"
        placeholder="Send to Child B"
        onChange={(e) => sendToParent(e.target.value)}
      />
      <p>Message from Child B: {receivedMessage}</p>
    </div>
  );
}



// Child B Component
function ChildB({ receivedMessage, sendToParent }) {
  return (
    <div>
      <h3>Child B</h3>
      <input
        type="text"
        placeholder="Send to Child A"
        onChange={(e) => sendToParent(e.target.value)}
      />
      <p>Message from Child A: {receivedMessage}</p>
    </div>
  );
}

