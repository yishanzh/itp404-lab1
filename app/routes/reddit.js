//ember comes with jquery by default
//import statements: a way to bring in different libraries and packages into a JavaScript file
import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
  model (params){
    console.log(params);
    let url = `https://www.reddit.com/r/javascript.json`;
    return $.getJSON(url);

  }
});
