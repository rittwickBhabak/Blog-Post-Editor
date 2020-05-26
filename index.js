let elements = [];
$('#preview').hide();
$('#show-editor').click(()=>{
    $("#preview").hide();
    $('#editor').show();
    $('#show-preview').parent()[0].className = "nav-item"    
    $('#show-editor').parent()[0].className = "nav-item active"    
})

$('#show-preview').click(function(){
    $("#preview").show();
    $('#editor').hide();
    $('#show-preview').parent()[0].className = "nav-item active"    
    $('#show-editor').parent()[0].className = "nav-item"
    let x = ''
    $('#preview').html('')
    console.log(elements)
    elements.forEach(function(list, index){
            if(list!=''){
            let existingHtml = document.getElementById('preview').innerHTML;
            console.log(list[0]);
            if(list[0]=='large-heading-center'){
                let largeHeadingCenter = document.createElement('h1');
                largeHeadingCenter.setAttribute('class','text-center');
                largeHeadingCenter.textContent = list[1];
                document.getElementById('preview').appendChild(largeHeadingCenter);
            }
            if(list[0]=='normal-heading-center'){
                let largeHeadingCenter = document.createElement('h3');
                largeHeadingCenter.setAttribute('class','text-center');
                largeHeadingCenter.textContent = list[1];
                document.getElementById('preview').appendChild(largeHeadingCenter);
            }
            if(list[0]=='small-heading-center'){
                let largeHeadingCenter = document.createElement('h5');
                largeHeadingCenter.setAttribute('class','text-center');
                largeHeadingCenter.textContent = list[1];
                document.getElementById('preview').appendChild(largeHeadingCenter);
            }
            if(list[0]=='small-heading-left'){
                let largeHeadingCenter = document.createElement('h5');
                largeHeadingCenter.textContent = list[1];
                document.getElementById('preview').appendChild(largeHeadingCenter);
            }
            if(list[0]=='normal-heading-left'){
                let largeHeadingCenter = document.createElement('h3');
                largeHeadingCenter.textContent = list[1];
                document.getElementById('preview').appendChild(largeHeadingCenter);
            }
            if(list[0]=='large-heading-left'){
                let largeHeadingCenter = document.createElement('h1');
                largeHeadingCenter.textContent = list[1];
                document.getElementById('preview').appendChild(largeHeadingCenter);
            }
            if(list[0]=='simple-paragraph'){
                let simpleParagraph = document.createElement('p');
                simpleParagraph.textContent = list[1];
                document.getElementById('preview').appendChild(simpleParagraph);
            }
            if(list[0]=='link-text'){
                let link = document.createElement('a');
                link.setAttribute('href', elements[index+1][1]);
                link.textContent = list[1];
                document.getElementById('preview').appendChild(link);
            }
            if(list[0]=='img-50-50-1'){
                let img5050 = document.createElement('div');
                img5050.setAttribute('class','row my-2');
                let div1 = document.createElement('div');
                let div2 = document.createElement('div');
                div1.className = "col-sm-6 mx-auto"
                div2.className = "col-sm-6 mx-auto"
                let img1 = document.createElement('img');
                let img2 = document.createElement('img');
                img1.src = list[1];
                img2.src = elements[index+1][1];
                img1.id = 'img' + parseInt(list[list.length-1]);
                img2.id = 'img' + parseInt(elements[index+1][list.length-1]);
                img1.setAttribute('width','100%');
                img2.setAttribute('width','100%');
                div1.appendChild(img1)
                div2.appendChild(img2);
                img5050.appendChild(div1);
                img5050.appendChild(div2);
                // <div class="row my-2">
                //     <div class="col-sm-6 mx-auto"><img src="main.png" width="100%" alt=""></div>
                //     <div class="col-sm-6 mx-auto"><img src="main.png" width="100%" alt=""></div>
                // </div>
                document.getElementById('preview').appendChild(img5050);
            }
            if(list[0]=='img-100'){
                // <div class="row my-2">
                //     <div class="col-sm-10 mx-auto">
                //         <img src="main.png" width="100%" alt="">
                //     </div>
                // </div>
                let img100 = document.createElement('div');
                img100.className = "row my-2";
                let innerDiv = document.createElement('div');
                innerDiv.className = "col-sm-10 mx-auto";
                let img = document.createElement('img');
                img.setAttribute('width','100%');
                img.id = 'img' + list[list.length-1];
                img.src = list[1];
                innerDiv.appendChild(img);
                img100.appendChild(innerDiv);
                document.getElementById('preview').appendChild(img100);
            }
            if(list[0]=='img-50-left-img'){
                console.log('from img:',list[list.length-1])
                console.log('form img(next item):', elements[index+1])
                // div .row .my-4
                //      div .col-sm-6
                //          img width=100% src=""
                //      div .col-sm-6
                let wrapper = document.createElement('div');
                wrapper.className = "row my-4";
                let imgDiv = document.createElement('div');
                imgDiv.className = 'col-sm-6';
                let img = document.createElement('img');
                img.setAttribute('width', '100%');
                img.src = list[1];
                let textDiv = document.createElement('div');
                textDiv.className = "col-sm-6";
                // textDiv.textContent = elements[index+1][list.length-1];
                textDiv.textContent = elements[index+1][1];
                imgDiv.appendChild(img);
                wrapper.appendChild(imgDiv);
                wrapper.appendChild(textDiv);
                document.getElementById('preview').appendChild(wrapper);

            }
            if(list[0]=='img-25-left-img'){
                console.log('from img:',list[list.length-1])
                console.log('form img(next item):', elements[index+1])
                // div .row .my-4
                //      div .col-sm-6
                //          img width=100% src=""
                //      div .col-sm-6
                let wrapper = document.createElement('div');
                wrapper.className = "row my-4";
                let imgDiv = document.createElement('div');
                imgDiv.className = 'col-sm-3';
                let img = document.createElement('img');
                img.setAttribute('width', '100%');
                img.src = list[1];
                let textDiv = document.createElement('div');
                textDiv.className = "col-sm-9 text-justify";
                // textDiv.textContent = elements[index+1][list.length-1];
                textDiv.textContent = elements[index+1][1];
                imgDiv.appendChild(img);
                wrapper.appendChild(imgDiv);
                wrapper.appendChild(textDiv);
                document.getElementById('preview').appendChild(wrapper);

            }
            if(list[0]=='img-vs-left-img'){
                console.log('from img:',list[list.length-1])
                console.log('form img(next item):', elements[index+1])
                // div .row .my-4
                //      div .col-sm-6
                //          img width=100% src=""
                //      div .col-sm-6
                let wrapper = document.createElement('div');
                wrapper.className = "row my-4";
                let imgDiv = document.createElement('div');
                imgDiv.className = 'col-sm-2';
                let img = document.createElement('img');
                img.setAttribute('width', '100%');
                img.src = list[1];
                let textDiv = document.createElement('div');
                textDiv.className = "col-sm-10 text-justify";
                // textDiv.textContent = elements[index+1][list.length-1];
                textDiv.textContent = elements[index+1][1];
                imgDiv.appendChild(img);
                wrapper.appendChild(imgDiv);
                wrapper.appendChild(textDiv);
                document.getElementById('preview').appendChild(wrapper);

            }
            if(list[0]=='img-50-right-img'){
                console.log('from img:',list[list.length-1])
                console.log('form img(next item):', elements[index+1])
                // div .row .my-4
                //      div .col-sm-6
                //          img width=100% src=""
                //      div .col-sm-6
                let wrapper = document.createElement('div');
                wrapper.className = "row my-4";
                let imgDiv = document.createElement('div');
                imgDiv.className = 'col-sm-6';
                let img = document.createElement('img');
                img.setAttribute('width', '100%');
                img.src = list[1];
                let textDiv = document.createElement('div');
                textDiv.className = "col-sm-6";
                // textDiv.textContent = elements[index+1][list.length-1];
                textDiv.textContent = elements[index+1][1];
                imgDiv.appendChild(img);
                wrapper.appendChild(textDiv);
                wrapper.appendChild(imgDiv);
                document.getElementById('preview').appendChild(wrapper);

            }
            if(list[0]=='img-25-right-img'){
                console.log('from img:',list[list.length-1])
                console.log('form img(next item):', elements[index+1])
                // div .row .my-4
                //      div .col-sm-6
                //          img width=100% src=""
                //      div .col-sm-6
                let wrapper = document.createElement('div');
                wrapper.className = "row my-4";
                let imgDiv = document.createElement('div');
                imgDiv.className = 'col-sm-3';
                let img = document.createElement('img');
                img.setAttribute('width', '100%');
                img.src = list[1];
                let textDiv = document.createElement('div');
                textDiv.className = "col-sm-9 text-justify";
                // textDiv.textContent = elements[index+1][list.length-1];
                textDiv.textContent = elements[index+1][1];
                imgDiv.appendChild(img);
                wrapper.appendChild(textDiv);
                wrapper.appendChild(imgDiv);
                document.getElementById('preview').appendChild(wrapper);

            }
            if(list[0]=='img-vs-right-img'){
                console.log('from img:',list[list.length-1])
                console.log('form img(next item):', elements[index+1])
                // div .row .my-4
                //      div .col-sm-6
                //          img width=100% src=""
                //      div .col-sm-6
                let wrapper = document.createElement('div');
                wrapper.className = "row my-4";
                let imgDiv = document.createElement('div');
                imgDiv.className = 'col-sm-2';
                let img = document.createElement('img');
                img.setAttribute('width', '100%');
                img.src = list[1];
                let textDiv = document.createElement('div');
                textDiv.className = "col-sm-10 text-justify";
                // textDiv.textContent = elements[index+1][list.length-1];
                textDiv.textContent = elements[index+1][1];
                imgDiv.appendChild(img);
                wrapper.appendChild(textDiv);
                wrapper.appendChild(imgDiv);
                document.getElementById('preview').appendChild(wrapper);

            }
        }
    })
})

$(document).on('keyup','.store-values', function(event){
    let elementValue = event.target.value;
    let elementId = event.target.id.slice(9);
    elements.forEach(function(list){
        if(list[list.length-1]==elementId){
            if(list[0]=='large-heading-center'){
                list[1] = elementValue;
            }
            if(list[0]=='large-heading-left'){
                list[1] = elementValue;
            }
            if(list[0]=='simple-paragraph'){
                list[1] = elementValue;
            }
            if(list[0]=='link-text'){
                list[1] = elementValue;
            }
            if(list[0]=='link-href'){
                list[1] = elementValue;
            }
            if(list[0]=='img-50-left-text'){
                list[1] = elementValue;
                console.log(list[1]); 
            }
            if(list[0]=='img-25-left-text'){
                list[1] = elementValue;
                console.log(list[1]); 
            }
            if(list[0]=='img-vs-left-text'){
                list[1] = elementValue;
                console.log(list[1]); 
            }
            if(list[0]=='img-vs-right-text'){
                list[1] = elementValue;
                console.log(list[1]); 
            }
            if(list[0]=='img-50-right-text'){
                list[1] = elementValue;
                console.log(list[1]); 
            }
            if(list[0]=='img-25-right-text'){
                list[1] = elementValue;
                console.log(list[1]); 
            }
            if(list[0]=='normal-heading-center'){
                list[1] = elementValue;
            }
            if(list[0]=='normal-heading-left'){
                list[1] = elementValue;
            }
            if(list[0]=='small-heading-center'){
                list[1] = elementValue;
            }
            if(list[0]=='small-heading-left'){
                list[1] = elementValue;
            }
        }
    })
    
})
$(document).on('click', '.deleteElement', function(event){
    $('#'+event.target.id).parent().parent().remove();
    let id = parseInt(event.target.id.slice(3));
    elements.forEach(function(list, index){
        if(list[list.length-1]==id){
            if(list[0]=='large-heading-center'){
                console.log('Deleting ',elements[index]);
                elements.splice(index,1);
            }
            else if(list[0]=='large-heading-left'){
                console.log('Deleting ',elements[index]);
                elements.splice(index,1);
            }
            else if(list[0]=='simple-paragraph'){
                console.log('Deleting ',elements[index]);
                elements.splice(index,1);
            }
            else if(list[0]=='link-text'){
                console.log('Deleting ',elements[index]);
                elements.splice(index,2);
            }
            else if(list[0]=='img-50-50-1'){
                console.log('Deleting ',elements[index]);
                elements.splice(index,2);
            }
            else if(list[0]=='img-100'){
                console.log('Deleting ',elements[index]);
                elements.splice(index,1);
            }
            else if(list[0]=='img-50-left-img'){
                console.log('Deleting ',elements[index]);
                elements.splice(index,2);
            }
            else if(list[0]=='img-25-left-img'){
                console.log('Deleting ',elements[index]);
                elements.splice(index,2);
            }
            else if(list[0]=='img-vs-left-img'){
                console.log('Deleting ',elements[index]);
                elements.splice(index,2);
            }
            else if(list[0]=='img-vs-right-img'){
                console.log('Deleting ',elements[index]);
                elements.splice(index,2);
            }
            else if(list[0]=='img-50-right-img'){
                console.log('Deleting ',elements[index]);
                elements.splice(index,2);
            }
            else if(list[0]=='img-25-right-img'){
                console.log('Deleting ',elements[index]);
                elements.splice(index,2);
            }
            else if(list[0]=='normal-heading-center'){
                elements.splice(index,1);
            }
            else if(list[0]=='normal-heading-left'){
                elements.splice(index,1);
            }
            else if(list[0]=='small-heading-center'){
                elements.splice(index,1);
            }
            else if(list[0]=='small-heading-left'){
                elements.splice(index,1);
            }
            else{
                console.log('not found')
            }
        }
    })  
})

// Headings
$('#lhc').click(()=>{
    let id = elements.length;
    let template = `
    <!-- large-heading-center -->
    <div class="row my-2">
        <div class="col-sm-10">
            <div class="form-group">
                <!-- <label for="elementNo${elements.length}">Large Heading (center aligned)</label> -->
                <input type="text" class="form-control text-center store-values" id="elementNo${elements.length}" placeholder="Large Heading center aligned">
                <small class="form-text text-muted">Large Heading (center aligned)</small>
            </div>
        </div>
        <div class="col-sm-2"><button class="btn btn-primary deleteElement" role="button" id="del${elements.length}">Delete</button></div>
    </div>`

    let new_element = document.createElement('div');
    new_element.innerHTML = template;
    document.getElementById('addHere').appendChild(new_element);
    
    elements.push(['large-heading-center', '', id]);
    
})

$('#nhl').click(()=>{
    let id = elements.length;
    let template = `
    <div class="row">
        <div class="col-sm-10">
            <div class="form-group">
                <!-- <label for="elementNo${elements.length}">Normal Heading (left aligned)</label> -->
                <input type="text" class="form-control store-values" id="elementNo${elements.length}" placeholder="Normal Heading left aligned">
                <small class="form-text text-muted">Normal Heading (left aligned)</small>
            </div>
        </div>
        <div class="col-sm-2"><button class="btn btn-primary deleteElement" id="del${elements.length}">Delete</button></div>
    </div>`

    let new_element = document.createElement('div');
    new_element.innerHTML = template;
    document.getElementById('addHere').appendChild(new_element);
    // at end 
    elements.push(['normal-heading-left','', id]);

})

$('#lhl').click(()=>{
    let id = elements.length;
    let template = `
    <!-- large-heading-left -->
    <div class="row">
        <div class="col-sm-10">
            <div class="form-group">
                <!-- <label for="elementNo${elements.length}">Large Heading (left aligned)</label> -->
                <input type="text" class="form-control store-values" id="elementNo${elements.length}" placeholder="Large Heading left aligned">
                <small class="form-text text-muted">Large Heading (left aligned)</small>
            </div>
        </div>
        <div class="col-sm-2"><button class="btn btn-primary deleteElement"  id="del${elements.length}">Delete</button></div>
    </div>`
    
    let new_element = document.createElement('div');
    new_element.innerHTML = template;
    document.getElementById('addHere').appendChild(new_element);
    
    // at end 
    elements.push(['large-heading-left','', id]);
})

$('#nhc').click(()=>{
    let id = elements.length;
    let template = `
    <!-- Normal-heading-center -->
    <div class="row">
        <div class="col-sm-10">
            <div class="form-group">
                <!-- <label for="elementNo${elements.length}">Normal Heading (center aligned)</label> -->
                <input type="text" class="form-control text-center store-values" id="elementNo${elements.length}" placeholder="Normal Heading center aligned">
                <small class="form-text text-muted">Normal Heading (center aligned)</small>
            </div>
        </div>
        <div class="col-sm-2"><button class="btn btn-primary deleteElement" id="del${elements.length}">Delete</button></div>
    </div>`

    let new_element = document.createElement('div');
    new_element.innerHTML = template;
    document.getElementById('addHere').appendChild(new_element);
    // at end 
    elements.push(['normal-heading-center','', id]);
})

$('#shc').click(()=>{
    let id = elements.length;
    let template = `
    <!-- small-heading-center -->
    <div class="row">
        <div class="col-sm-10">
            <div class="form-group">
                <!-- <label for="elementNo${elements.length}">small Heading (center aligned)</label> -->
                <input type="text" class="form-control text-center store-values" id="elementNo${elements.length}" placeholder="Small Heading center aligned">
                <small class="form-text text-muted">Small Heading (center aligned)</small>
            </div>
        </div>
        <div class="col-sm-2"><button class="btn btn-primary deleteElement" id="del${elements.length}">Delete</button></div>
    </div>`

    let new_element = document.createElement('div');
    new_element.innerHTML = template;
    document.getElementById('addHere').appendChild(new_element);
    // at end 
    elements.push(['small-heading-center','', id]);

})

$('#shl').click(()=>{
    let id = elements.length;
    let template = `
    <!-- small-heading-left -->
    <div class="row">
        <div class="col-sm-10">
            <div class="form-group">
                <!-- <label for="elementNo${elements.length}">small Heading (left aligned)</label> -->
                <input type="text" class="form-control store-values" id="elementNo${elements.length}" placeholder="small Heading left aligned">
                <small class="form-text text-muted">Small Heading (left aligned)</small>
            </div>
        </div>
        <div class="col-sm-2"><button class="btn btn-primary deleteElement" id="del${elements.length}">Delete</button></div>
    </div>`

    let new_element = document.createElement('div');
    new_element.innerHTML = template;
    document.getElementById('addHere').appendChild(new_element);
    // at end 
    elements.push(['small-heading-left','', id]);

})

// Simple paragraphs
$('#sp').click(()=>{
    let id = elements.length;
    let template = `
    <!-- simple-paragraph -->
    <div class="row">
        <div class="col-sm-10">
            <div class="form-group">
                <!-- <label for="elementNo${elements.length}">Example textarea</label> -->
                <textarea class="form-control store-values" id="elementNo${elements.length}" rows="3"></textarea>
                <small class="form-text text-muted">Simple paragraph </small>
            </div>
        </div>
        <div class="col-sm-2"><button class="btn btn-primary deleteElement" id="del${elements.length}">Delete</button></div>
    </div>
    `

    let new_element = document.createElement('div');
    new_element.innerHTML = template;
    document.getElementById('addHere').appendChild(new_element);
    // at end 
    elements.push(['simple-paragraph', '' ,id]);

})

// Links
$('#link').click(()=>{
    let id = elements.length;
    let template = `
    <!-- links -->
    <div class="row">
        <div class="col-sm-10">
            <div class="form-row">
                <div class="col-md-4">
                    <input type="text" class="form-control store-values" id="elementNo${elements.length}" placeholder="Link text">
                    <small class="form-text text-muted">Link text</small>
                </div>
                <div class="col-md-8">
                    <input type="text" class="form-control store-values" id="elementNo${elements.length+1}" placeholder="Link address">
                    <small class="form-text text-muted">Link address</small>
                </div>
            </div>
        </div>
        <div class="col-sm-2"><button class="btn btn-primary deleteElement" id="del${elements.length}">Delete</button></div>
    </div>
    `

    let new_element = document.createElement('div');
    new_element.innerHTML = template;
    document.getElementById('addHere').appendChild(new_element);
    // at end 
    
    elements.push(['link-text','',id]);
    elements.push(['link-href', '', id+1]);

}) 

// Display image to preview
function readURL(input, id){
    if(input.files && input.files[0]){
        var reader = new FileReader();
        reader.onload = function(e){
            elements[id] = e.target.result;
            $('#'+id).attr('src',e.target.result);
            console.log(id);
            elements.forEach(function(list,index){
                if(id.substring(3,)==list[list.length-1]){
                    elements[index][1] = e.target.result;
                    console.log(list[list.length-1]);
                }
            })
        }
        reader.readAsDataURL(input.files[0]);
    }
}

// Calls readURl when an image is uploaded
$(document).on('change','.imgInp',function(event){
        readURL(this, 'img'+event.target.id.substring(9,));
})

// Two Image width 50% - 50% 
$('#img-50-50').click(()=>{
    let id = elements.length;
    let template = `
    <!-- 50-50 image -->
    <div class="row my-2">
        <div class="col-sm-10">
            <div class="row">
                <div class="col-sm-6 border">
                    <div class="form-group">
                        <label for="">Left image</label>
                        <input type="file" class="form-control-file imgInp" id="elementNo${elements.length}">
                    </div>
                </div>
                <div class="col-sm-6 border">
                    <div class="form-group">
                        <label for="">Right image</label>
                        <input type="file" class="form-control-file imgInp" id="elementNo${elements.length+1}">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-2"><button class="btn btn-primary deleteElement" id="del${elements.length}">Delete</button></div>
    </div>
    `
    let new_element = document.createElement('div');
    new_element.innerHTML = template;
    document.getElementById('addHere').appendChild(new_element);

    //at end
    elements.push(['img-50-50-1','' , id]);
    elements.push(['img-50-50-2','' , id+1]);

})

// Main big image
$('#img-100').click(()=>{
    let id = elements.length;
    let template = `
    <!-- 100% image -->
    <div class="row my-2">
        <div class="col-sm-10">
            <div class="row">
                <div class="col-sm-12 mb-2 border text-center">
                    <div class="form-group">
                        <label for="">Middle image | width 100%</label>
                        <input type="file" class="form-control-file imgInp" id="elementNo${elements.length}">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-2"><button class="btn btn-primary deleteElement" id="del${elements.length}">Delete</button></div>
    </div>
    `

    let new_element = document.createElement('div');
    new_element.innerHTML = template;
    document.getElementById('addHere').appendChild(new_element);
    // at end 
    elements.push(['img-100','',id])
    
})

// Image placed on left (50%) with paragraph placed on right
$('#img-50-l').click(()=>{
    let id = elements.length;
    let template = `
    <!-- 50% image left -->
    <div class="row my-2">
        <div class="col-sm-10">
            <div class="row">
                <div class="col-sm-6  border text-center">
                    <div class="form-group">
                        <label for="">Left Large image | width 50%</label>
                        <input type="file" class="form-control-file imgInp" id="elementNo${elements.length}">
                    </div>
                </div>
                <div class="col-sm-6 border">
                    <div class="form-group">
                        <!-- <label for="exampleFormControlTextarea1">Example textarea</label> -->
                        <textarea class="form-control store-values" id="elementNo${elements.length+1}" rows="3"></textarea>
                        <small class="form-text text-muted">Simple paragraph </small>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-2"><button class="btn btn-primary deleteElement" id="del${elements.length}">Delete</button></div>
    </div>`


    let new_element = document.createElement('div');
    new_element.innerHTML = template;
    document.getElementById('addHere').appendChild(new_element);

    //in the end
    elements.push(['img-50-left-img','',id]);
    elements.push(['img-50-left-text', '', id+1]);
    // console.log(elements);
});


// Image placed on left (25%) with paragraph placed on right
$('#img-25-l').click(()=>{
    let id = elements.length;
    let template = `
    <!-- 50% image left -->
    <div class="row my-2">
        <div class="col-sm-10">
            <div class="row">
                <div class="col-sm-3  border text-center">
                    <div class="form-group">
                        <label for="">Left Large image | width 50%</label>
                        <input type="file" class="form-control-file imgInp" id="elementNo${elements.length}">
                    </div>
                </div>
                <div class="col-sm-9 border">
                    <div class="form-group">
                        <!-- <label for="exampleFormControlTextarea1">Example textarea</label> -->
                        <textarea class="form-control store-values" id="elementNo${elements.length+1}" rows="3"></textarea>
                        <small class="form-text text-muted">Simple paragraph </small>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-2"><button class="btn btn-primary deleteElement" id="del${elements.length}">Delete</button></div>
    </div>`


    let new_element = document.createElement('div');
    new_element.innerHTML = template;
    document.getElementById('addHere').appendChild(new_element);

    //in the end
    elements.push(['img-25-left-img','',id]);
    elements.push(['img-25-left-text', '', id+1]);
    // console.log(elements);
});
// Image placed on left (very small) with paragraph placed on right
$('#img-vs-l').click(()=>{
    let id = elements.length;
    let template = `
    <!-- very small image left -->
    <div class="row my-2">
        <div class="col-sm-10">
            <div class="row">
                <div class="col-sm-2 border text-center">
                    <div class="form-group">
                        <label for="">Very Small Left image</label>
                        <input type="file" class="form-control-file imgInp" id="elementNo${elements.length}">
                    </div>
                </div>
                <div class="col-sm-10 border">
                    <div class="form-group">
                        <!-- <label for="exampleFormControlTextarea1">Example textarea</label> -->
                        <textarea class="form-control store-values" id="elementNo${elements.length+1}" rows="3"></textarea>
                        <small class="form-text text-muted">Simple paragraph </small>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-2"><button class="btn btn-primary deleteElement" id="del${elements.length}">Delete</button></div>
    </div>`


    let new_element = document.createElement('div');
    new_element.innerHTML = template;
    document.getElementById('addHere').appendChild(new_element);

    //in the end
    elements.push(['img-vs-left-img','',id]);
    elements.push(['img-vs-left-text', '', id+1]);
    // console.log(elements);
});

// Image placed on right (50%) with paragraph placed on left
$('#img-50-r').click(()=>{
    let id = elements.length;
    let template = `
    <!-- 50% image right -->
    <div class="row my-2">
        <div class="col-sm-10">
            <div class="row">
                <div class="col-sm-6 border">
                    <div class="form-group">
                        <!-- <label for="exampleFormControlTextarea1">Example textarea</label> -->
                        <textarea class="form-control store-values" id="elementNo${elements.length+1}" rows="3"></textarea>
                        <small class="form-text text-muted">Simple paragraph </small>
                    </div>
                </div>
                <div class="col-sm-6 border text-center">
                    <div class="form-group">
                        <label for="">Right Large image | width 50%</label>
                        <input type="file" class="form-control-file imgInp" id="elementNo${elements.length}">
                    </div>
                </div>

            </div>
        </div>
        <div class="col-sm-2"><button class="btn btn-primary deleteElement" id="del${elements.length}">Delete</button></div>
    </div>`


    let new_element = document.createElement('div');
    new_element.innerHTML = template;
    document.getElementById('addHere').appendChild(new_element);

    //in the end
    elements.push(['img-50-right-img','',id]);
    elements.push(['img-50-right-text', '', id+1]);
    // console.log(elements);
});

// Image placed on right (very small) with paragraph placed on left
$('#img-vs-r').click(()=>{
    let id = elements.length;
    let template = `
    <!-- very small image right -->
    <div class="row my-2">
        <div class="col-sm-10">
            <div class="row">
                <div class="col-sm-10 border">
                    <div class="form-group">
                        <!-- <label for="exampleFormControlTextarea1">Example textarea</label> -->
                        <textarea class="form-control store-values" id="elementNo${elements.length+1}" rows="3"></textarea>
                        <small class="form-text text-muted">Simple paragraph </small>
                    </div>
                </div>
                <div class="col-sm-2 border text-center">
                    <div class="form-group">
                        <label for="">Very Small Right image</label>
                        <input type="file" class="form-control-file imgInp" id="elementNo${elements.length}">
                    </div>
                </div>

            </div>
        </div>
        <div class="col-sm-2"><button class="btn btn-primary deleteElement" id="del${elements.length}">Delete</button></div>
    </div>`


    let new_element = document.createElement('div');
    new_element.innerHTML = template;
    document.getElementById('addHere').appendChild(new_element);

    //in the end
    elements.push(['img-vs-right-img','',id]);
    elements.push(['img-vs-right-text', '', id+1]);
    // console.log(elements);
});

// Image placed on right (25%) with paragraph placed on left
$('#img-25-r').click(()=>{
    let id = elements.length;
    let template = `
    <!-- 25% image right -->
    <div class="row my-2">
        <div class="col-sm-10">
            <div class="row">
                <div class="col-sm-8 border">
                    <div class="form-group">
                        <!-- <label for="exampleFormControlTextarea1">Example textarea</label> -->
                        <textarea class="form-control store-values" id="elementNo${elements.length+1}" rows="3"></textarea>
                        <small class="form-text text-muted">Simple paragraph </small>
                    </div>
                </div>
                <div class="col-sm-4 border text-center">
                    <div class="form-group">
                        <label for="">Right Small image | width 25%</label>
                        <input type="file" class="form-control-file imgInp" id="elementNo${elements.length}">
                    </div>
                </div>

            </div>
        </div>
        <div class="col-sm-2"><button class="btn btn-primary deleteElement"  id="del${elements.length}">Delete</button></div>
    </div>`


    let new_element = document.createElement('div');
    new_element.innerHTML = template;
    document.getElementById('addHere').appendChild(new_element);

    //in the end
    elements.push(['img-25-right-img','',id]);
    elements.push(['img-25-right-text', '', id+1]);
    // console.log(elements);
});
