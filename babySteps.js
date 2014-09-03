var sum = 0;
if (process.argv.length >= 3) {
  for (var i = 2; i < process.argv.length; i++) {
      sum += +process.argv[i]
  };

  console.log(sum);
}else{
  console.log("Enter at least one number");
}
