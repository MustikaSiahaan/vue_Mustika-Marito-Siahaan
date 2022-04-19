const state = {
    lists: [],
    totalResults: 0,
  }
  
  const mutations = {
    setArticles(state, param) {
      state.lists = param.articles;
      state.totalResults = param.totalResults;
    }
  }
  
  const actions = {
    getArticles(store) {
      this.$axios
        .get(
          `https://newsapi.org/v2/everything?q=bitcoin&apiKey=2855be0bd75a436cb0f78dd5e74313cf`
        )
        .then((response) => {
          console.log("fetchListNews set global state");
          store.commit("setNews", response.data); 
        })
        .catch((error) => {
          console.log("fetchListNews set global state error", error.message);
          console.log("error status: ", error.response.status);
          store.commit("setError", error.msg);
        });
  
    },
  }
  
  export default { state, mutations, actions }
  