/* eslint-disable react/prop-types */



const StudentList = ({CallStudents}) => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Student List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Bike</th>
          </tr>
        </thead>
        <tbody>
          {CallStudents.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
              <td>{student.bike}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
