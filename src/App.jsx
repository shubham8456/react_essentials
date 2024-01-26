import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max+1));
}

function Header() {
  const description = reactDescriptions[getRandomInt(2)];

  return (
  <header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {description} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept
              title = "Components"
              description = "The core UI building block."
              image = {componentsImg}
            />
            <CoreConcept
              title = "Props"
              description = "The core UI building block."
              image = {componentsImg}
            />
            <CoreConcept
              title = "Shubham"
              description = "The core UI building block."
              image = {componentsImg}
            />
            <CoreConcept
              title = "Rawat"
              description = "The core UI building block."
              image = {componentsImg}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
