const API_URL_BASE = 'http://localhost:5000/api';

// Función para registrar usuario
export const registerUser = async (nombre, email, password) => {
    try {
        const response = await fetch(`${API_URL_BASE}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre, email, password }),
        });

        const data = await response.json(); // Obtener respuesta antes de verificar

        if (!response.ok) {
            throw new Error(data.message || 'Error en el registro');
        }

        localStorage.setItem('token', data.token);
        return { success: true, data }; 
    } catch (error) {
        console.error('Error en el registro:', error);
        return { success: false, error: error.message };
    }
};

// Función para iniciar sesión
export const loginUser = async (email, password) => {
    try {
        const response = await fetch(`${API_URL_BASE}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        console.log('Response status:', response.status); // Esto te dirá si la API está respondiendo correctamente

        if (!response.ok) {
            const errorData = await response.json();
            console.log('Error data:', errorData); // Ver qué datos está devolviendo la API en caso de error
            throw new Error(errorData.message || 'Error en el inicio de sesión');
        }

        const data = await response.json();
        console.log('Login success data:', data); // Ver el token y otros datos de respuesta

        localStorage.setItem('token', data.token); // Guardar el token en el localStorage
        return { success: true, data }; 
    } catch (error) {
        console.error('Error en la solicitud de inicio de sesión:', error);
        return { success: false, error: error.message };
    }
};

