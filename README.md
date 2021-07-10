# Vue textarea autogrow

Vue directive for handling textarea autogrow (automatically adjustable height).

## Installation

`npm install vue-textarea-grow`

## Examples

### Local registration

```javascript
import grow from 'vue-textarea-grow';

export default {

  directives: {
    grow,
  },

};
```

### Global registration

```javascript
import grow from 'vue-textarea-grow';

Vue.directive(
  'grow',
  grow,
);
```


### Template

```html
<textarea
  v-grow
></textarea>
```

### Conditional usage

When you need to use this directive conditionally, you can do this.

So it is not necessary to add the textarea element twice, if you don't need it:

```html
<template>
  <div>
    <textarea
      v-if="grow"
    ></textarea>

    <textarea
      v-else
    ></textarea>

    <button
      @click="grow = false"
    ></button>
</div>
</template>

<script>
export default {

  data() {
    return {
      grow: true,
    };
  },

};
</script>
```

Instead of:

```html
<template>
  <div>
    <textarea
      v-grow="grow"
    ></textarea>

    <button
      @click="grow = false"
    ></button>
  </div>
</template>

<script>
export default {

  data() {
    return {
      grow: true,
    };
  },

};
</script>
```
