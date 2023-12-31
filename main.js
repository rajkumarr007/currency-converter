console.log("Main.js working");

let logo = document.querySelector(".logo");


let str = "MyCurrencyConverter";
let i=0;
setTimeout(logomaker,1000);

function logomaker(){
        console.log(logo.innerHTML);
        logo.innerHTML =  str.substring(0,i);
        i++;
        console.log(i);
        if(i<=str.length){
            setTimeout(logomaker,700);
        }
        
}

// while(i<=str.length){
    // console.log(logo.innerHTML);
    // logo.innerHTML =  str.substring(0,i);
    // i++;
    // setTimeout(()=>{
    //     console.log(i);
    // },2000);
// }

const populate = async (value, currency) => {
    let myStr = ""
    url = "https://api.currencyapi.com/v3/latest?apikey=fca_live_XeFT2ToA4K50THIlqsowpNxPQ4KtDRvvOZO8zD2T";
    var response = await fetch(url)
    var rJson = await response.json()
    console.log(response);
    console.log(rJson);
    console.log(rJson.data.INR);
    document.querySelector(".output").style.display = "block"

    for (let key of Object.keys(rJson["data"])) {
        myStr += ` <tr>
                        <td>${key}</td>
                        <td>${rJson["data"][key]["code"]}</td>
                        <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
                    </tr> 
                `
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;

}
const btn = document.querySelector(".btn")
btn.addEventListener("click", (e) => {
    e.preventDefault()
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value
    populate(value, currency)
})