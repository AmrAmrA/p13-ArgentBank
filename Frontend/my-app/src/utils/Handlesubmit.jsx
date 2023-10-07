import  { loginUser } from './LoginUser';

export const handleSubmit = async (email, password, setError) => {
  try {
    const data = await loginUser(email, password);
  } catch (error) {
    setError(error.message);
  }
};
