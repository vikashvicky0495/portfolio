var app = angular.module('myApp', []);
var school = [['school_images/school1.jpg','intermediate_images/int1.jpg','college_images/college1.jpg','masters_images/masters1.jpg'],
              ['school_images/school2.jpg','intermediate_images/int2.png','college_images/college2.jpg','masters_images/masters2.jpg'],
              ['school_images/school3.jpg','intermediate_images/int3.jpg','college_images/college3.jpg','masters_images/masters3.jpg']];
var x =0;
var i = 0;

//    $scope.image = $('#sch').attr('src',timing() );
/*      $scope.image = setTimeout(function timing(){
         $('#sch').attr('src',school[i]);
         i++;
         timing();
      },3000);
})
//function timing(){
//        i++;
//        console.log(i);
        
//} */
app.controller('slider', function($scope,$interval) {
    $interval(function () {
        $scope.skol= $('#sch').attr('src',school[i][0]).attr('height','200px').attr('width','300px');
        $scope.into= $('#inter').attr('src',school[i][1]).attr('height','200px').attr('width','300px');
        $scope.col= $('#col').attr('src',school[i][2]).attr('height','200px').attr('width','300px');
        $scope.mas= $('#mas').attr('src',school[i][3]).attr('height','200px').attr('width','300px');
        i++;
        if(i==3)
        {
            i=0;
        }
    },3000);
    $scope.sider = false;
    $(document).ready(function(){
        $("#contact").click(function(){
         x++;
         if(x%2==0)
         {
            $("#contact").append("<p style = "+"color:white"+">contact</p>");
         }
         else
         $("#contact").append('contact');
         console.log("true");
        });
       });
    
});
