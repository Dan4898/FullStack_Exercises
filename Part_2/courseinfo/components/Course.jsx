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

export default Course;
