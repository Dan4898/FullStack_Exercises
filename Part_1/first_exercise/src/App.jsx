const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Part = (props) => {
  console.log(props);
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part
        part={props.part.parts[0].name}
        exercises={props.part.parts[0].exercises}
      />
      <Part
        part={props.part.parts[1].name}
        exercises={props.part.parts[1].exercises}
      />
      <Part
        part={props.part.parts[2].name}
        exercises={props.part.parts[2].exercises}
      />
    </div>
  );
};

const Total = (props) => {
  return <p>Number of exercises: {props.total}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },

      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content part={course} />
      <Total
        total={
          course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises
        }
      />
    </div>
  );
};

export default App;
