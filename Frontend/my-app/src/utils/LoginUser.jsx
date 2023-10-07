export async function loginUser(userName, password) {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userName,
          password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log("You are logged in");
        return data;
      } else {
        throw new Error(data.message || 'Erreur lors de la connexion');
      }
    } catch (error) {
      console.error('Erreur lors de la requête:', error);
      throw error;
    }
  }  