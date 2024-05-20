
## Input

```javascript
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

```

## Code

```javascript
import {
  $dispatcherGuard,
  $isBailedOut,
  $setBailedOut,
} from "react-compiler-runtime";
import { c as _c } from "react/compiler-runtime"; // @enableRuntimeBailouts @enableEmitHookGuards

function randomNumber() {
  "use no memo";
  $setBailedOut(true);
  // https://xkcd.com/221/
  return 4;
}

function Component() {
  const $ = _c(2);
  try {
    $dispatcherGuard(0);
    $setBailedOut(
      $[0] === Symbol.for("react.memo_cache_sentinel") ? false : $[0]
    );
    const foo = randomNumber();
    const bar = foo + x;
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
      t0 = <div>{bar}</div>;
      $[1] = t0;
    } else {
      t0 = $[1];
    }
    return t0;
  } finally {
    $dispatcherGuard(1);
    $[0] = $isBailedOut() || $[0];
  }
}

```
      