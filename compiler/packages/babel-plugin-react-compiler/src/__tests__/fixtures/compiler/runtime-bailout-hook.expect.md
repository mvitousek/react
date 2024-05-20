
## Input

```javascript
// @enableRuntimeBailouts

function randomNumber() {
  "use no memo";
  $setBailedOut(true);
  // https://xkcd.com/221/
  return 4;
}

function useHook(x) {
  const foo = randomNumber();
  const bar = foo + x;
  return <div>{bar}</div>;
}

```

## Code

```javascript
import { $isBailedOut, $setBailedOut } from "react-compiler-runtime";
import { c as _c } from "react/compiler-runtime"; // @enableRuntimeBailouts

function randomNumber() {
  "use no memo";
  $setBailedOut(true);
  // https://xkcd.com/221/
  return 4;
}

function useHook(x) {
  const $ = _c(2);
  const foo = randomNumber();
  const bar = foo + x;
  let t0;
  if ($[0] !== bar || $isBailedOut()) {
    t0 = <div>{bar}</div>;
    $[0] = bar;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  return t0;
}

```
      