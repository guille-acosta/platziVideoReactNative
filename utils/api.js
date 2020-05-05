const urlBaseApi='https://yts.mx/api/v2/';

class Api{
  async getSugestions(id=1){
    try {
      const query = await fetch(`${urlBaseApi}movie_suggestions.json?movie_id=${id}`)
      const {data:{movies}} = await query.json()
    return movies
    } catch (error) {
      console.log(error);
      
    }
  }
}
export default new Api()