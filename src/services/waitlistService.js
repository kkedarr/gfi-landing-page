const API_BASE_URL = 'https://glovestapi-dev.up.railway.app/api/v1';

/**
 * Submit email to waitlist
 * @param {string} email - User's email address
 * @returns {Promise<Object>} Response data
 */
export const joinWaitlist = async (email) => {
    try {
        const response = await fetch(`${API_BASE_URL}/waitlist`, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to join waitlist');
        }

        return {
            success: true,
            message: data.data?.message || 'You have been added to the waitlist',
        };
    } catch (error) {
        return {
            success: false,
            message: error.message || 'Something went wrong. Please try again.',
        };
    }
};
