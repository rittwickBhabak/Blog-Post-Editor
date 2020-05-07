let templates = [[],[],[],[],[],[],[],[],[],[],[],[]];
// 00 --> Big heading (left)
// 01 --> Big heading (mid)
// 02 --> Medium heading (left)
// 03 --> Small heading (left)
// 04 --> normal paragraph
// 05 --> paragraph with small left image
// 06 --> paragraph with big left image
// 07 --> paragraph with small right image
// 08 --> paragraph with big right image
// 09 --> Centered Big image
// 10 --> Two image section
// 11 --> Blog title

templates[0].push(`<div class="my-3"><h2>`);
templates[0].push(`</h2></div>`);

templates[1].push(`<div class=" text-center my-3"><h2>`);
templates[1].push(`</h2></div>`);

templates[2].push(`<div class=" my-3"><h3>`);
templates[2].push(`</h3></div>`);

templates[3].push(`<div class=" my-3"><h5>`);
templates[3].push(`</h5></div>`);

templates[4].push(`<div class=" text-justify">`);
templates[4].push(`</div>`);

templates[5].push(`<div class="sli border my-3"><div class="row"><div class="col-3 border"><img src="`);
templates[5].push(`" width="100%" alt=""></div><div class="col-9 border">`);
templates[5].push(`</div></div></div>`);

templates[6].push(`<div class="bli border my-3"><div class="row"><div class="col-5 border"><img src="`);
templates[6].push(`" width="100%" alt=""></div><div class="col-7 border">`);
templates[6].push(`</div></div></div>`);

templates[7].push(`<div class="sri border my-3"><div class="row"><div class="col-9 border">`);
templates[7].push(`</div><div class="col-3 border"><img src="`);
templates[7].push(`" width="100%" alt=""></div></div></div>`);

templates[8].push(`<div class="bri border my-3"><div class="row"><div class="col-7 border">`);
templates[8].push(`</div><div class="col-5 border"><img src="`);
templates[8].push(`" width="100%" alt=""></div></div></div>`);

templates[9].push(`<div class="container-fluid border text-center my-3"><img src="`);
templates[9].push(`" alt="" height="500px"></div>`);

templates[10].push(`<div class="container-fluid border text-center my-3"><div class="row"><div class="col-6 m-auto"><img src="`);
templates[10].push(`" alt="" width="100%"></div><div class="col-6 m-auto"><img src="`);
templates[10].push(`" alt="" width="100%"></div></div></div>`);

templates[11].push(`<div class="my-3 text-center"><div class="col"><h1 class="text-center">`)
templates[11].push(`</h1></div></div>`);

//HTML for demo STARTS, div with id test
// let myDiv = document.createElement('div');
// myDiv.id='test'
// // myDiv.style = 'width:100%;height:300px;border:1px solid black;text-align:center;margin:10px auto'
// myDiv.className = "container-fluid"
// myDiv.innerHTML = templates[10][0] + 'main.png' + templates[10][1] + 'main.png' + templates[10][2];
// document.getElementsByTagName('body')[0].appendChild(myDiv)
//HTML for demo ends