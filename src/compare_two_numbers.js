function compare_num(num1,num2){
    if (num1 == num2) {
        return '4A0B';
    } else {
        var different_counts_of_num1_and_num2=0;
        for(var i=0;i<4;i++){
            var num1_each_value=num1.charAt(i);
            for(var j=0;j<4;j++){
                var num2_each_value=num2.charAt(j);
                if(num1_each_value!=num2_each_value){
                    different_counts_of_num1_and_num2++;
                }
            }
        }
        if(different_counts_of_num1_and_num2==16){
            return "0A0B";
        }
    }
}