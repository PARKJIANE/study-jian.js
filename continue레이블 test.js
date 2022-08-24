outerloop: // 라벨 이름
for (var i = 0; i < 3; i++) {
   console.log("Outerloop: " + i);
   for (var j = 0; j < 5; j++) {
      if (j == 3) {
      continue outerloop;
      }
      console.log("Innerloop: " + j );
   }
}