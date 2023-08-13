
const container= document.querySelector('#container');
const  request= new XMLHttpRequest();
request.open('GET',"https://restcountries.com/v3.1/translation/nepal");
request.send();

request.addEventListener('load', function (){

const [data]= JSON.parse(this.responseText);

const htmlData=`
<div id="card">
        <article class="card">
            <div class="class-body">
                <img src="${data.flags.png}" alt="" class="card-body-img" />
                <h1 class="card-body-title">
                    ${data.name.common}<span></span>
                </h1>
                <p class="card-body- text">capital : ${data.capital}</p>
            </div>
            <div class="card-footer">
                <div class="card-footer-social">
                    <h3>${data.name.nativeName.nep.common}</h3>
                    <p>Native Language</p>
                </div>
                <div class="card-footer-social">
                    <h3>${data.population}</h3>
                    <p>Populaton</p>
                </div>
                <div class="card-footer-social">
                    <h3>${data.currencies.NPR.name}</h3>
                     <p>Demonym</p>                          
                </div>
            </div>
        </article>
    </div>

`;

container.insertAdjacentHTML("afterbegin",htmlData)
});