const cohort = {
  name: 'May 2022',
  id: 123,
  students: ['Ollie', 'Sam', 'Matt'],

  getData: () => {
    console.log(`${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`)
  }
}

cohort.getData();