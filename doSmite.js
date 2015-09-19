$(function() {
    var urlFormat = "http://api.smitegame.com/smiteapi.svc";
    var signature;
    $.ajax({
        url:getQueryURL("createsession")
    }).done(function(response){
        signature = response.session_id;
        console.log(signature);
    });
    
    console.log(getQueryURL("createsession"));
    
    function getQueryURL(method){
        return (urlFormat+"/"+method+"Json/"+devId+"/"+getSignature(method)+"/"+getFormattedDate());
    }
//    console.log(getMD5Hash("createSession"));
    
});

function formatNumString(num,places){
    while(num.length<places){
        num = "0"+num;
    }
    return String(num);
}

function getFormattedDate(){
    var time = new Date();
    var yyyy = time.getFullYear();
    var mm = formatNumString(time.getMonth(),2);
    var day = formatNumString(time.getDate(),2);
    var hour = formatNumString(time.getHours(),2);
    var min = formatNumString(time.getMinutes(),2);
    var sec = formatNumString(time.getSeconds(),2);
    return yyyy+mm+day+hour+min+sec;

}

function getSignature(method) {
    var myHash = devId+method+authKey+getFormattedDate();
    console.log('signature url:'+myHash);
    myHash = CryptoJS.MD5(myHash);
    //myHash =  CryptoJS.enc.Utf8.stringify(myHash).toUpperCase();
    
    console.log(myHash);
    return myHash.toString(CryptoJS.enc.Hex).toUpperCase();
}

//function getSignature(){
//    return (urlFormat+"/createSession/"+devId+"/"+authKey+"/"+getFormattedDate());
//    
//}