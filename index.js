const logger = console;

const scope = [
    "https://www.googleapis.com/auth/fitness.activity.read"
    ,"https://www.googleapis.com/auth/fitness.location.read"
    ,"https://www.googleapis.com/auth/fitness.body.read"
    ,"https://www.googleapis.com/auth/fitness.activity.write"
    ,"https://www.googleapis.com/auth/fitness.location.write"
    ,"https://www.googleapis.com/auth/fitness.body.write"
];

let access_token = "";      

function getToken() {
    access_token = "";
    gapi.auth.authorize({ client_id: CLIENT_ID, scope: scope, immediate: false, response_type: "token" }, function (e) {
        access_token = e.access_token;
        $.ajax({
            type: "GET",
        //    url: "https://www.googleapis.com/fitness/v1/users/me/dataSources",
        //    url: "https://www.googleapis.com/fitness/v1/users/me/dataSources/derived:com.google.distance.delta:com.google.android.gms:from_high_accuracy_location<-derived:com.google.location.sample:com.google.android.gms:merge_high_fidelity/datasets/1000448674395-2999820159644",
        //    url: "https://www.googleapis.com/fitness/v1/users/me/sessions",
            // url: "https://www.googleapis.com/fitness/v1/users/me/dataSources/derived:com.google.step_count.delta:com.google.android.gms:estimated_steps/datasets/1479995613104000000-1479999605867000000",
            // url: "https://www.googleapis.com/fitness/v1/users/me/dataSources/raw:com.google.step_count.delta:com.google.android.apps.fitness:user_input/datasets/1000475368000000000-3000475368000000000",
            // url: "https://www.googleapis.com/fitness/v1/users/me/dataSources/raw:com.google.activity.segment:com.google.android.apps.fitness:user_input/datasets/1000475368000000000-3000475368000000000",
            // url: "https://www.googleapis.com/fitness/v1/users/me/dataSources/derived:com.google.distance.delta:com.google.android.gms:merge_distance_delta/datasets/1479995613104000000-1479999605867000000",
            // url: "https://www.googleapis.com/fitness/v1/users/me/dataSources/derived:com.google.distance.delta:com.google.android.gms:platform_distance_delta/datasets/1479995613104000000-1479999605867000000",
            // url: "https://www.googleapis.com/fitness/v1/users/me/dataSources/derived:com.google.speed:com.google.android.gms:smoothed_speed<-merge_speed/datasets/1479995613104000000-1479999605867000000",
            url: "https://www.googleapis.com/fitness/v1/users/me/dataSources/derived:com.google.stride_model:com.google.android.gms:stride_model_average/datasets/1479995613104000000-1479999605867000000",
           data: {
                "access_token": access_token
            },
            success: function (data) {
                logger.dir(data);
                document.write(JSON.stringify(data));
            }
        });
    });
}

