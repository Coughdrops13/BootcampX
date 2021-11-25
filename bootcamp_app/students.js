const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const queryString = `
SELECT id, name, cohort_id
FROM students
LIMIT 5;
`;

pool.query(queryString)
.then(res => {
  console.log(res);
})
.catch(err => console.error('query error', err.stack));