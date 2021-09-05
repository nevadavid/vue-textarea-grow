# Vue 2 textarea autogrow

Very simple Vue directive for handling textarea autogrow (automatically adjustable height).

There is no need any custom component registration or CSS out-of-the-box.

If you want to set a min-height to textarea, you should use the native [`rows`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attr-rows) textarea attribute.

It works with [Nuxt.js](https://nuxtjs.org/) nicely too. Please run only on [client-side](https://nuxtjs.org/docs/2.x/directory-structure/plugins#object-syntax).

## Installation

```
npm install vue-textarea-grow
```

## Examples

### Local registration

```javascript
import { grow } from 'vue-textarea-grow';

export default {

  directives: {
    grow,
  },

};
```

### Global registration

```javascript
import { grow } from 'vue-textarea-grow';

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

So it is not necessary to add extra textarea element:

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

Instead:

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
