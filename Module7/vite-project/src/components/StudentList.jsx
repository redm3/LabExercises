import React from 'react';
import Student from './Student';
import { Grid } from '@mui/material';
import StudentCard from './StudentCard';
import AddStudentForm from './AddStudentForm';

export const students = [
    {
        id: 1,
        name: 'Adam Sagar',
        location: 'NZ'
    },
    {
        id: 2,
        name: 'Alannie Decena',
        location: 'NZ'
    },
    {
        id: 3,
        name: 'Amber Min Hsuan Hong',
        location: 'AU'
    },
    {
        id: 4,
        name: 'Christopher Marsh',
        location: 'AU'
    },
    {
        id: 5,
        name: 'David Palmer',
        location: 'NZ'
    },
    {
        id: 6,
        name: 'Jason Reid',
        location: 'AU'
    },    
    {
        id: 7,
        name: 'Luke Barker',
        location: 'NZ'
    },
    {
        id: 8,
        name: 'Marco Wells',
        location: 'NZ'
    },
    {
        id: 9,
        name: 'Preshen Govender',
        location: 'NZ'
    }  
]

function StudentList() {   

    const [currentStudents, setCurrentStudents] = React.useState(students);

    const handleAddStudent = (name,location) => {
        setCurrentStudents([...currentStudents, { id: currentStudents.length + 1, name:name, location:location }]);
      };

    //we can either create a variable storing all the list items and render it, OR we can move this students.map down into the return directly
    const studentList = currentStudents.map((student) => (
        <Grid item xs={6} sm={4} md={3}>
          <StudentCard key={student.id} id={student.id} name={student.name} location={student.location} set="set1"/>
        </Grid>
      ));

    return (
        <div className="StudentList componentBox">
            <h2>IOD Software Engineering Students ({students.length} in cohort)</h2>
                <Grid container spacing={3}>
                {studentList}
                </Grid>
                <AddStudentForm handleAdd={handleAddStudent} />
            {/* since reverse modifies the original array and we shouldn't mutate state directly, we clone it first */}
            <button onClick={() => setCurrentStudents([...currentStudents].reverse())}>Reverse Order</button>

            <button onClick={() => setCurrentStudents(students.filter(student => student.location==='AU'))}>Show Australian Students</button>
            <button onClick={() => setCurrentStudents(students.filter(student => student.location==='NZ'))}>Show New Zealand Students</button>

            <button onClick={() => setCurrentStudents(students)}>Show All</button>

        </div>
    );
}

export default StudentList;