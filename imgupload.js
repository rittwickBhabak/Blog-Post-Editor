function readURL(input, id){
    if(input.files && input.files[0]){
        var reader = new FileReader();
        reader.onload = function(e){
            $('#'+id).attr('src',e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$('.imgInp').change(function(event){
    readURL(this, event.delegateTarget.dataset['target']);
})

$(document).on('keyup', '.test', (event)=>{
    console.log(event.target.value)
})