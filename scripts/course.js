const courses = [
{ code: 'WDD130', name: 'Web Fundamentals', credits: 3, completed: true },
{ code: 'WDD131', name: 'Dynamic Web Fundamentals', credits: 3, completed: true },
{ code: 'WDD231', name: 'Frontend Development I', credits: 3, completed: false },
{ code: 'CSE110', name: 'Programming Building Blocks', credits: 2, completed: true },
{ code: 'CSE111', name: 'Programming with Functions', credits: 2, completed: false }
];


const container = document.getElementById('courses');
const creditDisplay = document.getElementById('credits');


function displayCourses(list) {
container.innerHTML = '';
const total = list.reduce((sum, c) => sum + c.credits, 0);


list.forEach(course => {
const div = document.createElement('div');
div.className = 'course';
if (course.completed) div.classList.add('completed');
div.textContent = `${course.code} - ${course.name} (${course.credits} credits)`;
container.appendChild(div);
});


creditDisplay.textContent = `Total Credits: ${total}`;
}


displayCourses(courses);


document.querySelectorAll('.filters button').forEach(button => {
button.addEventListener('click', () => {
const type = button.dataset.filter;
if (type === 'all') displayCourses(courses);
else displayCourses(courses.filter(c => c.code.startsWith(type.toUpperCase())));
});
});