
## Input

```javascript
// @enableChangeDetectionForDebugging
import { useState } from "react";

function Component(props) {
  const [x, _] = useState(f(props.x));
  return <div>{x}</div>;
}

```

## Code

```javascript
import { $structuralCheck } from "react-compiler-runtime";
import { c as _c } from "react/compiler-runtime"; // @enableChangeDetectionForDebugging
import { useState } from "react";

function Component(props) {
  const $ = _c(3);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = f(props.x);
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  const [x] = useState(t0);
  let t1;
  let old$t1;
  if ($[1] !== x) {
    t1 = <div>{x}</div>;
    $[1] = x;
    $[2] = t1;
  } else {
    t1 = <div>{x}</div>;
    old$t1 = $[2];
    $structuralCheck(old$t1, t1, "t1", "Component");
    t1 = old$t1;
  }
  return t1;
}

```
      