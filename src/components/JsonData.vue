  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        jsonData: null,
      };
    },
    mounted() {
      this.loadData();
    },
    methods: {
      async loadData() {
        try {
          const response = await axios.get('../assets/data.json');
          this.jsonData = response.data;
        } catch (error) {
          console.error('Fejl ved indlæsning af JSON-fil:', error);
        }
      },
    },
  };
  </script>
