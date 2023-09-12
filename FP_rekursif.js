const countDown = start => {
  console.log(start);
  if (start > 0) countDown(start - 1); // pemanggilan fungsi dirinya sendiri
};

countDown(10);