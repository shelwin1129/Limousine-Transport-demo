// Check if a value is not null or empty
export const isNotNull = (value) => {
    return value !== null && value.trim() !== '';
  };
  
  // Validate email format
  export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Validate that the password and confirm password match
  export const doPasswordsMatch = (password, confirmPassword) => {
    return password === confirmPassword;
  };