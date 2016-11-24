const logger = console;

const scope = ["https://www.googleapis.com/auth/fitness.activity.read"];

let access_token = "";

function getToken(){
    gapi.auth.authorize({client_id: CLIENT_ID, scope: scope, immediate: false, response_type: "token"}, callback);
}
 
function callback(e){
    access_token = e.access_token; 
    $.ajax({
        type:"GET",
        url: "https://www.googleapis.com/fitness/v1/users/me/dataSources",
        data: {
            "access_token": access_token
        },
        success: function(data){
            logger.log(data)
        }
    });
}
