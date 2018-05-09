$(document).ready(function(){
    $('#hidden').hide();

    $('#rukovodilac').change(function(){
        if(this.checked) {
            $('#hidden').show();
        }
        else {
            $('#hidden').hide();
        }
    });
});