import React, { useState } from 'react';
import Student from './Student';

const initialStudents = [
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
        location: 'NZ',
        pets: 'Bird',
        favColour: 'Red',
        height: '182cm',
        age: 25
    },
    {
        id: 9,
        name: 'Preshen Govender',
        location: 'NZ'
    } 
]

const StudentList = () => {
    const [sortAsc, setSortAsc] = useState(true);
    const [students, setStudents] = useState(initialStudents);
    const [showOnlyAU, setShowOnlyAU] = useState(false);
    const [showOnlyNZ, setShowOnlyNZ] = useState(false);

    const toggleSortOrder = () => {
        setSortAsc(!sortAsc);
        const sortedStudents = [...students].sort((a, b) => {
            if (a.name < b.name) {
                return sortAsc ? -1 : 1;
            }
            if (a.name > b.name) {
                return sortAsc ? 1 : -1;
            }
            return 0;
        });
        setStudents(sortedStudents);
    };
    const handleShowOnlyAU = () => {
        setShowOnlyAU(true);
        setShowOnlyNZ(false);
    };

    const handleShowOnlyNZ = () => {
        setShowOnlyNZ(true);
        setShowOnlyAU(false);
    };

    const filteredStudents = students.filter(student => {
        if (showOnlyAU && student.location === 'AU') {
            return true;
        }
        if (showOnlyNZ && student.location === 'NZ') {
            return true;
        }
        if (!showOnlyAU && !showOnlyNZ) {
            return true;
        }
        return false;
    });

    return (
        <div className="StudentList componentBox">
            <h2>IOD Software Engineering Students ({filteredStudents.length} in cohort)</h2>
            <ul className="hideBullets">
                {filteredStudents.map((student) => (
                    <Student
                        key={student.id}
                        id={student.id}
                        name={student.name}
                        location={student.location}
                        pets={student.pets}
                        favColour={student.favColour}
                        height={student.height}
                        age={student.age}
                    />
                ))}
                <button onClick={toggleSortOrder}>Toggle Sort Order</button>
                <button onClick={handleShowOnlyAU}>Show Only AU Students</button>
                <button onClick={handleShowOnlyNZ}>Show Only NZ Students</button>
            </ul>
        </div>
    );
};



//add a button to show only AU students and only NZ students

export default StudentList;