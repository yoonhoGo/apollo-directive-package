# Apollo-directives-package

![npm package](https://img.shields.io/badge/npm%20package-1.0.9-brightgreen.svg)

This is directives package for [Apollo](https://www.apollographql.com/)

## Usage
in .js
```js
var { RenameDirective } = require('apollo-directives-package') // in VanillaJS(javascript)
// or
import { RenameDirective } from 'apollo-directives-package' // in ES

const schema = makeExecutableSchema({
  schemaDirectives: {
    ...
    rename: RenameDirective,
  }
})
```

in .ts
```typescript
// in Typescript
import { RenameDirective } from 'apollo-directives-package'

const schema = makeExecutableSchema({
  schemaDirectives: {
    ...
    rename: RenameDirective as any, // Refer to Bug in Todo
  }
})
```

## Directives list

1. RenameDirective: To rename(redirect) other Query, Mutation, Field resolve

Please pull-request to update your awesome directive!🤩 and give me your username in github, npm to register collaborators.



## To Do
- [ ] Bug: Directive type is no match in Typescript
```js
makeExecutableSchema({
    schemaDirectives: {...} // <- type no match error in Typescript
})
```



## License

Code copyright 2018 Yoonho Go. Code released under [the MIT license](https://github.com/jgthms/bulma/blob/master/LICENSE).