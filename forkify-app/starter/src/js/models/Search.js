import axios from 'axios'
import {key, proxy} from '../config'

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {


    try {
      //To do it with fetch api instead of axios
      // const result = await fetch(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
      //const data = await result.json();
      //console.log(data);


      //due to daily limit of 50 calls i switched to jonas library to continue
      //const result = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);

      //to get around the limit of 50 calls a day i use this from jonas
      const result = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
        this.res = result.data.recipes
        //console.log(this.res);
     }
     catch (error){
       alert(error);
     }

  }

};
