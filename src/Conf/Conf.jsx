// const conf = {
//   appWriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
//   appWriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
// };
// export default conf;

// const conf = {
//   appWriteUrl: import.meta.env.VITE_APPWRITE_URL,
//   appWriteProjectID: import.meta.env.VITE_APPWRITE_PROJECT_ID,
// };

export default conf;

// const logIn = async (e) => {
//   e.preventDefault(); // Prevent form from refreshing the page
//   try {
//     // Use the correct method for logging in with email and password
//     const session = await account.create("unique()", email, password);
//     console.log(session);
//     navigate("/");
//   } catch (e) {
//     console.error(e); // Log the error for debugging
//     setError("Login failed. Please check your credentials and try again.");
//   }
// };
