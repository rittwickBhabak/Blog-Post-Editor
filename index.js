let elements = [];
// $('#preview').hide();
// $('#show-editor').click(()=>{
    // $("#preview").hide();
    // $('#editor').show();
    // $('#show-preview').parent()[0].className = "nav-item"    
    // $('#show-editor').parent()[0].className = "nav-item active"    
// })

$(document).on('click', '#show-preview',function(){
    // $("#preview").show();
    // $('#editor').hide();
    // $('#show-preview').parent()[0].className = "nav-item active"    
    // $('#show-editor').parent()[0].className = "nav-item"
    elements.forEach(function(list,index){
        let myHtmlTemplate = ``;
        if(list[0]==1){
            let x = $(list[1]).val();
            myHtmlTemplate = `${list[2]}${$(list[1]).val()}${list[3]}`
            let pre = $('#preview').html()
            // $('#preview').html(pre+myHtmlTemplate)
            console.log(x);
        }
    })
})

$('#lhc').click(()=>{
    let id = '#'+'elementNo'+elements.length;
    let template = `
    <!-- large-heading-center -->
    <div class="row my-2">
        <div class="col-sm-10">
            <div class="form-group">
                <!-- <label for="elementNo${elements.length}">Large Heading (center aligned)</label> -->
                <input type="text" class="form-control text-center" id="elementNo${elements.length}" value="nice heading" placeholder="Large Heading center aligned">
                <small class="form-text text-muted">Large Heading (center aligned)</small>
            </div>
        </div>
        <div class="col-sm-2"><button class="btn btn-primary" id="del${elements.length}">Delete</button></div>
    </div>`

    let pre = $('#addHere').html();
    $('#addHere').html(pre+template);
    // at end 
    let part1 = `<h1 class="text-center>`
    let part2 = `</h1>`
    elements.push([1,id,part1,part2]);
    
})
$('#lhl').click(()=>{
    let template = `
    <!-- large-heading-left -->
    <div class="row">
        <div class="col-sm-10">
            <div class="form-group">
                <!-- <label for="elementNo${elements.length}">Large Heading (left aligned)</label> -->
                <input type="text" class="form-control" id="elementNo${elements.length}" placeholder="Large Heading left aligned">
                <small class="form-text text-muted">Large Heading (left aligned)</small>
            </div>
        </div>
        <div class="col-sm-2"><button class="btn btn-primary"  id="del${elements.length}">Delete</button></div>
    </div>`

    let pre = $('#addHere').html();
    $('#addHere').html(pre+template);
    // at end 

})
$('#nhc').click(()=>{
    let template = `
    <!-- Normal-heading-center -->
    <div class="row">
        <div class="col-sm-10">
            <div class="form-group">
                <!-- <label for="elementNo${elements.length}">Normal Heading (center aligned)</label> -->
                <input type="text" class="form-control text-center" id="elementNo${elements.length}" placeholder="Normal Heading center aligned">
                <small class="form-text text-muted">Normal Heading (center aligned)</small>
            </div>
        </div>
        <div class="col-sm-2"><button class="btn btn-primary" id="del${elements.length}">Delete</button></div>
    </div>`

    let pre = $('#addHere').html();
    $('#addHere').html(pre+template);
    // at end 

})
$('#nhl').click(()=>{
    let template = `
    <div class="row">
        <div class="col-sm-10">
            <div class="form-group">
                <!-- <label for="elementNo${elements.length}">Normal Heading (left aligned)</label> -->
                <input type="text" class="form-control" id="elementNo${elements.length}" placeholder="Normal Heading left aligned">
                <small class="form-text text-muted">Normal Heading (left aligned)</small>
            </div>
        </div>
        <div class="col-sm-2"><button class="btn btn-primary" id="del${elements.length}">Delete</button></div>
    </div>`

    let pre = $('#addHere').html();
    $('#addHere').html(pre+template);
    // at end 

})
$('#shc').click(()=>{
    let template = `
    <!-- small-heading-center -->
    <div class="row">
        <div class="col-sm-10">
            <div class="form-group">
                <!-- <label for="elementNo${elements.length}">small Heading (center aligned)</label> -->
                <input type="text" class="form-control text-center" id="elementNo${elements.length}" placeholder="Small Heading center aligned">
                <small class="form-text text-muted">Small Heading (center aligned)</small>
            </div>
        </div>
        <div class="col-sm-2"><button class="btn btn-primary" id="del${elements.length}">Delete</button></div>
    </div>`

    let pre = $('#addHere').html();
    $('#addHere').html(pre+template);
    // at end 

})
$('#shl').click(()=>{
    let template = `
    <!-- small-heading-left -->
    <div class="row">
        <div class="col-sm-10">
            <div class="form-group">
                <!-- <label for="elementNo${elements.length}">small Heading (left aligned)</label> -->
                <input type="text" class="form-control" id="elementNo${elements.length}" placeholder="small Heading left aligned">
                <small class="form-text text-muted">Small Heading (left aligned)</small>
            </div>
        </div>
        <div class="col-sm-2"><button class="btn btn-primary" id="del${elements.length}">Delete</button></div>
    </div>`

    let pre = $('#addHere').html();
    $('#addHere').html(pre+template);
    // at end 

})
$('#sp').click(()=>{
    let template = `
    <!-- simple-paragraph -->
    <div class="row">
        <div class="col-sm-10">
            <div class="form-group">
                <!-- <label for="elementNo${elements.length}">Example textarea</label> -->
                <textarea class="form-control" id="elementNo${elements.length}" rows="3"></textarea>
                <small class="form-text text-muted">Simple paragraph </small>
            </div>
        </div>
        <div class="col-sm-2"><button class="btn btn-primary" id="del${elements.length}">Delete</button></div>
    </div>
    `

    let pre = $('#addHere').html();
    $('#addHere').html(pre+template);
    // at end 

})
$('#link').click(()=>{
    let template = `
    <!-- links -->
    <div class="row">
        <div class="col-sm-10">
            <div class="form-row">
                <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Link text">
                    <small class="form-text text-muted">Link text</small>
                </div>
                <div class="col-md-8">
                    <input type="text" class="form-control" placeholder="Link address">
                    <small class="form-text text-muted">Link address</small>
                </div>
            </div>
        </div>
        <div class="col-sm-2"><button class="btn btn-primary" id="del${elements.length}">Delete</button></div>
    </div>
    `

    let pre = $('#addHere').html();
    $('#addHere').html(pre+template);
    // at end 

})
$('#img-50-50').click(()=>{
    let template = `
    <!-- 50-50 image -->
    <div class="row my-2">
        <div class="col-sm-10">
            <div class="row">
                <div class="col-sm-6 border">
                    <div class="form-group">
                        <label for="">Left image</label>
                        <input type="file" class="form-control-file" id="">
                    </div>
                </div>
                <div class="col-sm-6 border">
                    <div class="form-group">
                        <label for="">Right image</label>
                        <input type="file" class="form-control-file" id="">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-2"><button class="btn btn-primary">Delete</button></div>
    </div>
    `

    let pre = $('#addHere').html();
    $('#addHere').html(pre+template);
    // at end 

})
$('#img-100').click(()=>{
    let template = `
    <!-- 100% image -->
    <div class="row my-2">
        <div class="col-sm-10">
            <div class="row">
                <div class="col-sm-12 mb-2 border text-center">
                    <div class="form-group">
                        <label for="">Middle image | width 100%</label>
                        <input type="file" class="form-control-file" id="">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-2"><button class="btn btn-primary">Delete</button></div>
    </div>
    `

    let pre = $('#addHere').html();
    $('#addHere').html(pre+template);
    // at end 

})

