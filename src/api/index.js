// api.js
const API_URL = 'https://data.jsdelivr.com/v1';

export default {
    async fetchPackages() {
        const response = await fetch(`${API_URL}/stats/packages`);
        const data = await response.json();
        return data.files;
    },
};
