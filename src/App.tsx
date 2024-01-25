import reactSymbol from "./assets/react.svg";
import './App.css';
import { PropsWithChildren } from "react";

function App() {
  // const userChoice = prompt("Please enter 1 or 2");
  // const userChoice = "2";

  // if (userChoice === "1") {
  //   return (
  //     <main>
  //       <h1>Hello world</h1>
  //       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, aliquid?</p>
  //       <p>1</p>
  //     </main>
  //   );
  // }
  
  // if (userChoice === "2") {
  //   return (
  //     <main>
  //       <h1>Hello world</h1>
  //       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, aliquid?</p>
  //       <p>2</p>
  //     </main>
  //   );
  // }

  const foo = <div>hello</div>;

  // switch (userChoice) {
  //   case "1":
  //     extraMessage = <p>1</p>;
  //     break;
  //   case "2":
  //     extraMessage = <p>2</p>;
  //     break;
  // }

  return (
    <main>
      <Menu activePage="home" />
      <Menu activePage="about" />
      <Menu activePage="contact" />
      <h1>Hello world</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, aliquid?</p>
      {/* {userChoice === "1" ?
        <p>1</p> :
        userChoice === "2" ?
          <p>2</p> :
          undefined} */}
      {foo}
      <Button className="primary" size={1.5}>Sign up now</Button>
      <Button className="secondary" size={1.2}>More details</Button>
      <Button className="secondary" size={1.2}>
        <img src={reactSymbol} />
      </Button>
      <Button className="secondary" size={1.2}>
        {10}
      </Button>
    </main>
  );
}

type ButtonProps = {
  className: string;
  size?: number;
};

const { foo } = { foo: "hello" };
console.log(foo);

function Button({ className, size = 1, children }: PropsWithChildren<ButtonProps>) {
  return <button className={className} style={{ fontSize: `${size}rem` }}>
    {children}
    </button>;
}

type MenuProps = {
  activePage: "home" | "about" | "contact"
};

// <Menu activePage="home" />

function Menu({ activePage }: MenuProps) {
  // if (activePage === "home") {
  //   return <menu style={{
  //     display: "flex",
  //     gap: "1rem",
  //     padding: "0",
  //     listStyle: "none"
  //   }}>
  //     <li>Home</li>
  //     <li><a href="">About</a></li>
  //     <li><a href="">Contact us</a></li>
  //   </menu>;
  // }

  // if (activePage === "about") {
  //   return <menu style={{
  //     display: "flex",
  //     gap: "1rem",
  //     padding: "0",
  //     listStyle: "none"
  //   }}>
  //     <li><a href="">Home</a></li>
  //     <li>About</li>
  //     <li><a href="">Contact us</a></li>
  //   </menu>
  // }

  return <menu style={{
    display: "flex",
    gap: "1rem",
    padding: "0",
    listStyle: "none",
    justifyContent: "space-between"
  }}>
    <li>{activePage === "home" ? <span>Home</span> : <a href="">Home</a>}</li>
    <li>{activePage === "about" ? <span>About</span> : <a href="">About</a>}</li>
    <li>{activePage === "contact" ? <span>Contact us</span> : <a href="">Contact us</a>}</li>
  </menu>;
}

export default App;
