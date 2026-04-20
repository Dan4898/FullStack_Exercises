const Header = (props) => <h2>{props.course}</h2>;

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Total = (props) => <p>Number of exercises {props.total}</p>;

const Course = ({ course }) => {
  const total1 = course[0].parts.reduce((sum, order) => {
    return sum + order.exercises;
  }, 0);
  const total2 = course[1].parts.reduce((sum, order) => {
    return sum + order.exercises;
  }, 0);
  return (
    <div>
      <h1>Web development curriculum</h1>
      <Header course={course[0].name} />
      <Content parts={course[0].parts} />
      <Total total={total1} />
      <Header course={course[1].name} />
      <Content parts={course[1].parts} />
      <Total total={total2} />
    </div>
  );
};

const App = () => {
  const course = [
    {
      id: 1,
      name: "Half Stack application development",
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
