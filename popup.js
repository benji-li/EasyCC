document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('button').addEventListener('click',onclick,false)
    function onclick(){
        chrome.tabs.query({currentWindow: true,active:true},
        function(tabs){
            chrome.tabCapture.capture({audio:true, video:false},(stream)=>{
                //sbubtitle stuff here using stream

            })

        }
            )
    }
},false)