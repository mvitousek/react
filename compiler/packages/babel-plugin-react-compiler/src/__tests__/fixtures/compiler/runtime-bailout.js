// @enableRuntimeBailouts @enableEmitHookGuards

function randomNumber() {
  "use no memo";
  $setBailedOut(true);
  // https://xkcd.com/221/
  return 4;
}

function Component() {
  const foo = randomNumber();
  const bar = foo + x;
  return <div>{bar}</div>;
}
