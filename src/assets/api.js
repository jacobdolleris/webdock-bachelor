
export async function fetchData() {
    try {
      const response = await fetch('https://webdock.io/en/platform_data/getConfigurationData');
      const finalRes = await response.json();
      return finalRes;
    } catch (error) {
      console.error('Fejl ved indlæsning af JSON-data:', error);
      throw error;
    }
  }
  