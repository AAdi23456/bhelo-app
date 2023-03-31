let arr=[1,1,3,5,7,98,9,1]
let max=-Infinity
let n=arr.length
for(let i=0;i<arr.length;i++){
if(max<arr[i]){
    max=arr[i]
}
if(i==6){
    arr[i]=max
}
if(i==1  && arr[i]<=arr[n-1]){
    let temp=arr[i]
arr[i]=arr[n-1]
arr[n-1]=temp
}
if(arr[n-2]>8+arr[5]){
    let temp=arr[n-2]
arr[n-2]=arr[5]
arr[5]=temp
}
}
console.log(arr);

