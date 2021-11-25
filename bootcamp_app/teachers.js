const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


pool.query(`
  SELECT teachers.name AS teacher, cohorts.name AS cohort, COUNT(assistance_requests.*) AS total_assistances
  FROM teachers
  JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
  JOIN students ON assistance_requests.student_id = students.id
  JOIN cohorts ON students.cohort_id = cohorts.id
  WHERE cohorts.name = ${process.argv[2]}
  GROUP BY teacher, cohort
  ORDER BY teacher
  LIMIT ${process.argv[3]};
  `)
  .then(res => {
    console.log(res);
  })
  .catch(err => console.error('query error', err.stack));