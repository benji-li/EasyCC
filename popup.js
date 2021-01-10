document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('button').addEventListener('click',onclick,false)
    function onclick(){
        chrome.windows.create({height:30,url:'http://www.google.com'});
        chrome.tabs.query({currentWindow: true,active:true},
        function(tabs){
            chrome.tabCapture.capture({audio:true, video:false},(stream)=>{
                //sbubtitle stuff here using stream
                
                this.context = new AudioContext();
                this.stream = this.context.createMediaStreamSource(stream);
                this.stream.connect(this.context.destination);

            })

        }
            )
    }
},false)