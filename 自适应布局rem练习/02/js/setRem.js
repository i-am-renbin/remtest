let flg=true;
function setRem(){
    if(flg){
        flg=false;
        let ui_W=375;
        let clientWidth=document.documentElement.clientWidth||document.body.clientWidth;
        let html_=document.getElementsByTagName('html')[0];
        html_.style.fontSize=(clientWidth/ui_W)*10 +'px';
        setTimeout(()=>{
            flg=true;
        },300)
    }
}
window.onresize=setRem;