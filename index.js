// Various blocks
let header = document.getElementById('header');
let navbar = document.getElementById('navbar')
let selector = document.getElementById('selector');
let editArea = document.getElementById('edit-area');
let previewHtml = document.getElementById('preview-html');
let previewBlog = document.getElementById('preview-blog');

//Selector Buttons
let bch = document.getElementById('big-center-heading');
let blh = document.getElementById('big-left-heading');
let slh = document.getElementById('small-left-heading');
let sch = document.getElementById('small-center-heading');
let fci = document.getElementById('full-centered-image');
let cp = document.getElementById('complete-para');
let lpri = document.getElementById('left-para-right-image');
let lirp = document.getElementById('left-image-right-para');
let link = document.getElementById('link');
// Navbar button functionality
function showEditor(){
    editArea.style.display = "block";
    previewHtml.style.display = "none";
    previewBlog.style.display = "none";
    selector.style.display = "block";
}

function showHtml(){
    editArea.style.display = "none";
    previewHtml.style.display = "block";
    previewBlog.style.display = "none";
    selector.style.display = "none";
    blogHtml = `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Blog</title>
                    <link rel="stylesheet" href="blog.css">
                </head>
                <body>
                    <div id="blog">`;
    for(let obj in objs){
        blogHtml += objs[obj].generatedHtml()
    }
    blogHtml += ` </div>
                </body>
                </html>`
    previewHtml.value = blogHtml;
}

function showBlog(){
    editArea.style.display = "none";
    previewHtml.style.display = "none";
    previewBlog.style.display = "block";
    selector.style.display = "none";
    blogHtml = '';
    for(let obj in objs){
        blogHtml += objs[obj].generatedHtml()
    }
    previewBlog.innerHTML = blogHtml;
}
function saveBlog(){
    window.localStorage.setItem('blog-post', JSON.stringify(objs));
}
function loadBlog(){
    let rawText = window.localStorage.getItem('blog-post');
    objs = [];
    console.log(objs);
    for(let obj of JSON.parse(rawText)){
        console.log(obj)
        console.log(obj.type);
        console.log(obj.values);
        const new_obj = new Templates(obj.type, objs.length, [obj.values[0], obj.values[1]]);
        new_obj.setValues([obj.values[0], obj.values[1]]);
        objs.push(new_obj);
    }
   
    updateEditor();    
}
//Update the editor as soon as a new element is added

//-----Class--------
class Templates{
    skeletons = {
        bch: {
            no_of_values: 1,
            template: `<h1 class="bch">{}</h1>`,
            editor: `<div id="elem{}"><input type="text" class="bch-editor" onchange="update(this, 0)" value="{}" placeholder="Big Centered Heading"><button class="side-btn" onclick="up(this)" id="up{}">Up</button><button class="side-btn" onclick="down(this)" id="down{}">Down</button><button class="side-btn" onclick="del(this)" id="del{}">Del</button></div>`
        },
        blh: {
            no_of_values: 1,
            template: `<h1 class="blh">{}</h1>`,
            editor: `<div id="elem{}"><input type="text" class="blh-editor" onchange="update(this, 0)" value="{}" placeholder="Big Left Heading"><button class="side-btn" onclick="up(this)" id="up{}">Up</button><button class="side-btn" onclick="down(this)" id="down{}">Down</button><button class="side-btn" onclick="del(this)" id="del{}">Del</button></div>`
        },
        sch: {
            no_of_values: 1,
            template: `<h2 class="sch">{}</h2>`,
            editor: `<div id="elem{}"><input type="text" class="sch-editor" onchange="update(this, 0)" value="{}" placeholder="Small Centered Heading"><button class="side-btn" onclick="up(this)" id="up{}">Up</button><button class="side-btn" onclick="down(this)" id="down{}">Down</button><button class="side-btn" onclick="del(this)" id="del{}">Del</button></div>`
        },
        slh: {
            no_of_values: 1,
            template: `<h2 class="slh">{}</h2>`,
            editor: `<div id="elem{}"><input type="text" class="slh-editor" onchange="update(this, 0)" value="{}" placeholder="Small Left Heading"><button class="side-btn" onclick="up(this)" id="up{}">Up</button><button class="side-btn" onclick="down(this)" id="down{}">Down</button><button class="side-btn" onclick="del(this)" id="del{}">Del</button></div>`
        },
        cp: {
            no_of_values: 1,
            template: `<p class="cp">{}</p>`,
            editor: `<div id="elem{}"><textarea type="text" class="cp-editor" onkeyup="textAreaAdjust(this)" onchange="update(this, 0)" placeholder="Paragraph">{}</textarea><button class="side-btn" onclick="up(this)" id="up{}">Up</button><button class="side-btn" onclick="down(this)" id="down{}">Down</button><button class="side-btn" onclick="del(this)" id="del{}">Del</button></div>`
        },
        fci: {
            no_of_values: 1,
            template: `<img src="{}"  alt="Image not uploaded" class="fci">`,
            editor: `<div id="elem{}"><input type="text" class="fci-editor" onchange="update(this, 0)" value="{}" placeholder="Centered Large image"><button class="side-btn" onclick="up(this)" id="up{}">Up</button><button class="side-btn" onclick="down(this)" id="down{}">Down</button><button class="side-btn" onclick="del(this)" id="del{}">Del</button></div>`
        },
        lpri: {
            no_of_values: 2,
            template: `<div class="rilp">
                            <p class="lp">{}</p>
                            <img src="{}" alt="Image Not uploaded" class="ri">
                        </div>`,
            editor: `<div id="elem{}" class="imgae-and-para">
                        <textarea class="para" onchange="update(this, 0)" onkeyup="textAreaAdjust(this)"  placeholder="Paragraph">{}</textarea>
                        <textarea type="text" class="image-input" onchange="update(this, 1)" placeholder="Image URL">{}</textarea>
                        <button class="side-btn" onclick="up(this)" id="up{}">Up</button>
                        <button class="side-btn" onclick="down(this)" id="down{}">Down</button>
                        <button class="side-btn" onclick="del(this)" id="del{}">Del</button>
                    </div>`
        },
        lirp: {
            no_of_values: 2,
            template: `<div class="lirp">
                        <img src="{}" alt="Image Not uploaded" class="li">
                        <p>{}</p>
                    </div>`,
            editor: `<div id="elem{}" class="imgae-and-para">
                        <textarea type="text" class="image-input" onchange="update(this, 0)" placeholder="Image URL">{}</textarea>
                        <textarea class="para" onkeyup="textAreaAdjust(this)"  onchange="update(this, 1)" placeholder="Paragraph">{}</textarea>
                        <button class="side-btn" onclick="up(this)" id="up{}">Up</button>
                        <button class="side-btn" onclick="down(this)" id="down{}">Down</button>
                        <button class="side-btn" onclick="del(this)" id="del{}">Del</button>
                    </div>`
        },
        link: {
            no_of_values: 2,
            template: `<a href="{}" target="_blank">{}</a>`,
            editor: `<div id="elem{}"><input type="text" class="link-text" value="{}" onchange="update(this, 0)" placeholder="Link URL"><input class="link-url" value="{}" onchange="update(this, 1)" type="text" placeholder="Link Text"><button class="side-btn" onclick="up(this)" id="up{}">Up</button><button class="side-btn" onclick="down(this)" id="down{}">Down</button><button class="side-btn" onclick="del(this)" id="del{}">Del</button></div>`
        }
    }


    constructor(type, id){
        this.type = type;
        this.id = id;
        this.editor = this.skeletons[type].editor;
        this.template = this.skeletons[type].template;
        this.values = ['',''];
    }
    refresh(id){
        this.id = id;
        this.setValues(this.values);
    }
    generatedHtml(){
        // return this.skeletons[this.type].template.format(...args);
        console.log(this.skeletons[this.type].template.format(...this.values));
        return this.skeletons[this.type].template.format(...this.values);
    }
    getEditorHtml(){
        if(this.no_of_values==1){
            return this.skeletons[this.type].editor.format(...[this.id, this.values[0], this.id, this.id, this.id]);
        }
        return this.skeletons[this.type].editor.format(...[this.id, this.values[0], this.values[1], this.id, this.id, this.id]);
    }
    setValues(values){
        this.values = values;
        if(this.no_of_values==1){
            this.skeletons[this.type].editor.format(...[this.id, this.values[0], this.id, this.id, this.id]);
        }else{
            this.skeletons[this.type].editor.format(...[this.id, this.values[0], this.values[1], this.id, this.id, this.id]);
        }
    }
    getValues(){
        return this.values;
    }
}

let objs = [];
let counter = 0;
let html = '';
let blogHtml = '';
function updateEditor(){
    html = '';
    blogHtml = '';
    for(let obj in objs){
        html += objs[obj].getEditorHtml();
    }
    editArea.innerHTML = html;
    let textareas = document.getElementsByTagName('textarea');
    for(let textarea of textareas){
        textAreaAdjust(textarea);
    }
}

function del(element){
    let id = parseInt(element.parentNode.id.slice(4));
    console.log('before', objs);
    console.log('del', id);
    console.log('after', objs);
    for(let obj in objs){
        if(obj>id){
            
            objs[obj].refresh(obj-1);
        }
    }
    objs.splice(id, 1);
    updateEditor();
}
function up(element){
    let id = parseInt(element.parentNode.id.slice(4));
    if(id!=0){
        objs[id].refresh(id-1);
        objs[id-1].refresh(id);
        let temp = objs[id];
        objs[id] = objs[id-1];
        objs[id-1] = temp;
    }
    updateEditor();
}
function down(element){
    let id = parseInt(element.parentNode.id.slice(4));
    if(id!=objs.length-1){
        objs[id].refresh(id+1);
        objs[id+1].refresh(id);
        let temp = objs[id];
        objs[id] = objs[id+1];
        objs[id+1] = temp;
    }
    updateEditor();
}

function update(element, pos){
    let id = element.parentNode.id.slice(4);
    let previousValues = objs[id].getValues();
    let newValue = element.value;
    previousValues[pos] = newValue;
    
}

bch.addEventListener('click', ()=>{
    objs.push(new Templates('bch', objs.length, ['']));
    updateEditor();
})
blh.addEventListener('click', ()=>{
    objs.push(new Templates('blh', objs.length, ['']));
    updateEditor();
})
slh.addEventListener('click', ()=>{
    objs.push(new Templates('slh', objs.length, ['']));
    updateEditor();
})
sch.addEventListener('click', ()=>{
    objs.push(new Templates('sch', objs.length, ['']));
    updateEditor();
})
fci.addEventListener('click', ()=>{
    objs.push(new Templates('fci', objs.length, ['']));
    updateEditor();
})
cp.addEventListener('click', ()=>{
    objs.push(new Templates('cp', objs.length, ['']));
    updateEditor();
})
lpri.addEventListener('click', ()=>{
    objs.push(new Templates('lpri', objs.length, ['', '']));
    updateEditor();
})
lirp.addEventListener('click', ()=>{
    objs.push(new Templates('lirp', objs.length, ['', '']));
    updateEditor();
})
link.addEventListener('click', ()=>{
    objs.push(new Templates('link', objs.length, ['', '']));
    updateEditor();
})
// Python format equivalent in javascript
String.prototype.format = function (){
    var i = 0;
    args = arguments;
    return this.replace(/{}/g, function(){
        return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};
function textAreaAdjust(element){
    element.style.height = "1px";
    element.style.height = (25+element.scrollHeight)+"px";
}
