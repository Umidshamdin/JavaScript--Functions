let arr =[1,2,3,7,8,9,10,12,13];
let sum=0;
function powerTwo(arr){
   let count=0; 
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i]%2==0) {
            
            count=((arr[i])*(arr[i]))
            sum+=count;   
        }  
    }
    console.log(sum);
}


powerTwo(arr);

