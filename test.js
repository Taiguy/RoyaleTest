$('#hit-me').on("click", function(){

    // $('#hit-me').hide();
    $.ajax({
      // url:"test.json",
      url: "https://api.clashroyale.com/v1/players/%232VG9PPLYR",
      method:'GET',
      headers: {
        "Access-Control-Allow-Origin": "api.clashroyale.com",
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjMxZmNjNTU1LTc5NzYtNDMzYi1hMWRjLWEwYzY3ZWExNjMxMiIsImlhdCI6MTYwMDk0MDk1Niwic3ViIjoiZGV2ZWxvcGVyLzBkYjJiNzAxLWE4ZjMtMWQ3OS0zOTJhLWUxMmQ3NzFkZWY0ZSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxNzQuMjEuMTcxLjM0Il0sInR5cGUiOiJjbGllbnQifV19.8XBYDMdH3CuQolf9FRhz4oV2eROnI2WDn0rVgwH7nYa7_xq6DjStTpmDXeP7GckeWFt8HCc_gvVOpTvU4Sg9Nw",
      },
      success: function(api){
        console.log("success!");
        var myName = "Not Changed";
        myName = api.name;
        var myTrophy = api.trophies;
        $('#datas').append(
          "<h1> " +myName+ " </h1>" +
          "<h1> " +myTrophy+ " </h1>"
        );
      },
      error: function(result){console.log(result);}
    });
  });