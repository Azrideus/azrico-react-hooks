# deus-object

> Some useful object functions

## Install

```bash
yarn add @azrico/object
```

## Functions

```js
object_clone(object);
object_first(object);
object_update(a, b);
object_delta(a, b);
object_has_delta(object);
object_equals(a, b);
isEmpty(object);
```

## Usage

```js
import React, { Component } from 'react'
import { View } from 'react-native'
import {
	getInArray,
	object_clone,
	object_delta,
	object_equals,
	object_first,
	object_isEmpty,
	origCompare,
	setInArray,
/* ... */
} from "@azrico/object";

class Example extends Component {

  let eq1=object_equals({a:"b"},{a:"b"});//true
  let eq2=object_equals({a:"b"},{a:"c"});//false

  let ie1=object_isEmpty({});  //true
  let ie2=object_isEmpty([]);  //true
  let ie3=object_isEmpty(null);//true
  let ie4=object_isEmpty({test:"a"});//false

  let if1=object_first({a:"a",b:"b",c:"c"});// a:"a"
  let if2=object_first([1,2,3,4]);//1


  render() {
    return <View></View>
  }
}
```

## License

MIT © [](https://github.com/)
