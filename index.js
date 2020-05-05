// blog-title==> title

let html = '<div>';
$('.nav-item').click(function (event) {
    console.log(event.target.className);
    if(event.target.id=='blog-title'){
        html += `<h1 id="title">Heading</h1>`
    }
    if(event.target.id=="update"){
        html += `</div>` 
        document.getElementById('preview').innerHTML = html;
        console.log(html);
    }
})


