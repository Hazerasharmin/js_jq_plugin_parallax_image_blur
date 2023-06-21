//js









//jq


$(document).ready(function(){


var data = [
        {speed:30,blur:3,scale:.8},
        {speed:40,index:2},
        {speed:30,blur:2,scale:.7},
        {speed:60,index:2},
        {speed:20,blur:3,scale:.5},
        {speed:30,index:2},
        {speed:50},
        {speed:30,index:2,scale:.5},
    ];
    $('img').each(function(i,o){
        $(this).parallax(data[i]);
    });



});