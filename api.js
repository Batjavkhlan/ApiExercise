let data = "";
const apiWget = async() => {
    const mykey = "fqiyuYDtWuY8mzfPdx3NpsR6DhvrV9bO";
    data = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/1-246421_1_AL?apikey=${mykey}`);

    const wtext = document.querySelector("#wtext");
    wtext.innerText = data.data[0].WeatherText;
    const wtemp = document.querySelector("#wtemp");
    wtemp.innerText = data.data[0].Temperature.Metric.Value;
    const wdate = document.querySelector("#wdate");
    wdate.innerText = data.data[0].LocalObservationDateTime.replace("T", "   ");
}
apiWget();
const wRefresh = document.querySelector("#wbtn");
wRefresh.addEventListener('click', apiWget);

const apiRget = async() => {
    const data = await axios.get('http://monxansh.appspot.com/xansh.json?currency=USD|JPY|GBP|RUB|KRW');
    const dataArr = data.data;
    dataArr.forEach(element => {
        pushRate(element.code, element.rate, element.name);
    });
}

function pushRate(code, rate, name) {
    const rdiv = document.querySelector(`#r${code.toLowerCase()}`);
    rdiv.innerText = (`${name} : ${rate} ₮  ${code}`);
}
apiRget();
const rRefresh = document.querySelector("#rbtn")
rRefresh.addEventListener('click', apiRget);