const binURL = "https://api.jsonbin.io/b/5e86b835f4dba3539aac2e05"
const API_KEY = "$2b$10$Qr6aUjNoKmyjAKLAnCe3UOycslGqlT/scg.bP/OuEVjHg3D546.Li"

const RATES = null;

exports.getComissionRates = () => {
  return new Promse((resolve, reject) => {
  const time = new Date();
  const min = time.getMinutes();
  if(min % 5 === 0 && RATES) {
    return resolve(RATES);
  }
  let req = new XMLHttpRequest();

  req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    console.log(req.responseText);
      RATES = req.responseText;  
      resolve(req.responseText);
    }
  };
  req.open("GET", binURL, true);
  req.setRequestHeader("secret-key", API_KEY);
  req.send();
  }); 
}


exports.addComission = (exchageRates) => {
  // return modified rate, with ask and bid price.

}