/**
 * Created by Administrator on 2015/6/22.
 */

$.get("http://ipinfo.io", function (response) {
    this.response = response;
   // $("#ip").html("IP: " + this.response.ip);
    //$("#address").html("Location: " +
     var cityarray =   [ this.response.city, this.response.region];
   // $("#details").html(JSON.stringify(response, null, 4));
}, "jsonp");

