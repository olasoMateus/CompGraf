// function mainEntrance(){
//     var jsons = $.getJson('https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json');
    
//     for(let p in jsons){
//         var display = `seq : ${p.seq}<br>
//          sqcand : ${p.sqcand}<br>
//          n : ${p.n}<br>
//          nm : ${p.nm}<br>
//          cc : ${p.cc}<br> 
//          nv : ${p.nv}<br>
//          e : ${p.e}<br>
//          st : ${p.st}<br>
//          dvt : ${p.dvt}<br>
//          vap : ${p.vap}<br>
//          pvap : ${p.pvap}<br>`
//          $(".display").html(display);
//     }
// }

function main(){
    fetch('https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json', 
    function(data) {

        var text = `Date: ${data.cand}`


        $("mypanel").html(text);
    });
    // big.cand.forEach(q => {
    //     var p = q.json();
    //     var display = `seq : ${p.seq}<br>
    //     sqcand : ${p.sqcand}<br>
    //     n : ${p.n}<br>
    //     nm : ${p.nm}<br>
    //     cc : ${p.cc}<br> 
    //     nv : ${p.nv}<br>
    //     e : ${p.e}<br>
    //     st : ${p.st}<br>
    //     dvt : ${p.dvt}<br>
    //     vap : ${p.vap}<br>
    //     pvap : ${p.pvap}<br>`;
    //     console.log(q);
    // });
    // var candArray = big.cand;
    // for(var p in candArray){

    //     console.log(p);
    // }
    // console.log(big);
    
}
