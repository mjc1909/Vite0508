function Greeting({ name }) {
    return (
      <div>
        <h1>Hello, {name}!</h1>
      </div>
    );
  }
  
  // Eksporterer komponenten for at kunne bruges andre steder
  export default Greeting;