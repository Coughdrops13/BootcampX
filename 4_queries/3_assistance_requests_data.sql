SELECT teachers.name AS teacher_name, students.name AS student_name, assignments.name AS assignment_name, assistance_requests.completed_at - assistance_requests.started_at AS request_duration
FROM teachers
JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
JOIN students ON students.id = assistance_requests.student_id
JOIN assignments ON assignments.id = assistance_requests.assignment_id
ORDER BY request_duration;