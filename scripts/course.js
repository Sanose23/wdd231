const courses = [
    { subject: 'CSE', number: 110, title: 'Intro to Programming', credits: 2, completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: true },
    { subject: 'CSE', number: 111, title: 'Programming Functions', credits: 2, completed: false },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, completed: true },
    { subject: 'WDD', number: 231, title: 'Frontend Development I', credits: 2, completed: false }
];

const displayCourses = (filtered) => {
    const list = document.querySelector('#course-list');
    list.innerHTML = '';
    
    // Criterion 8 & 11: Dynamic display and marked completed courses
    filtered.forEach(course => {
        const div = document.createElement('div');
        div.classList.add('course-card');
        if (course.completed) div.classList.add('completed');
        div.innerHTML = `<span>${course.subject} ${course.number}</span>`;
        list.appendChild(div);
    });

    // Criterion 10: Using reduce to determine total credits
    const total = filtered.reduce((acc, c) => acc + c.credits, 0);
    document.querySelector('#total-credits').textContent = `Total Credits Required: ${total}`;
};

// Criterion 9: Event listeners for filtering
document.querySelector('#all').addEventListener('click', () => displayCourses(courses));
document.querySelector('#wdd').addEventListener('click', () => displayCourses(courses.filter(c => c.subject === 'WDD')));
document.querySelector('#cse').addEventListener('click', () => displayCourses(courses.filter(c => c.subject === 'CSE')));

// Initial load
displayCourses(courses);