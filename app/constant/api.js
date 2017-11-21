export const fetchTeachers = () => {
	fetch('http://localhost:3000/teachers')
		.then(res => res.json());
};
