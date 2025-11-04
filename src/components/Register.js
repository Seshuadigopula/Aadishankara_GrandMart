const handleRegister = (e) => {
  e.preventDefault();
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  existingUsers.push(formData);
  localStorage.setItem('users', JSON.stringify(existingUsers));
  alert('Registration successful! You can now login.');
  navigate('/login');
};
