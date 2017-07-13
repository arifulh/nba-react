import Loki from 'lokijs'
import raw from './rawdata'

const FIELDS = [ "games", "started", "minutes", "ppg", "fg", "fga", "fg%", "3pt", "3pta", "3pt%", "2pt", "2pta", "2pt%", "ft", "fta", "ft%", "orb", "drb", "trb", "ast", "stl", "blk", "tov", "fouls"];
const FIELDS_LONG = [ "games played", "games started", "minutes", "points", "total field goals", "field goals attempts", "fiedl goal %", "3PT", "3pt attempts", "3PT %", "2PT", "2pt attempts", "2pt%", "free throws", "free throws attempts", "free throws %", "offensive rebounds", "defenseive rebounds", "total rebounds", "assists", "steals", "blocks", "turnovers", "fouls"];
const MAXRANGES = [  82, 82, 48, 50, 50, 50, 100, 50, 50, 100, 50, 50, 100, 50, 50, 100, 30, 30, 30, 30, 30, 20, 20, 6];

class Data {

   constructor() {
        this._raw = raw;
        this._keys = raw.keys;
        this._players = raw.values;
        this._db = new Loki('nba-react.db');
        this._data = this._db.addCollection('data');
        this.insertAll();
    }

	insertAll() {
	  let bulk = [];
	  this._players.forEach((p, i) => {
	    let pdata = { };
	    p.forEach((data, index) => {
	      if (this._keys[index].match('%')) data = data*100;
	      pdata[this._keys[index]] = data;
	    })
	    bulk.push(pdata);
	  })
	  this._data.insert(bulk);
	}
  	
}


export default new Data;