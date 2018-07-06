# Apollo-directives-package

![npm package](https://img.shields.io/badge/npm%20package-1.0.9-brightgreen.svg)

This is directives package for [Apollo](https://www.apollographql.com/)

## Usage example
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
    rename: RenameDirective, // if graphql-tools >= 3.x.x
    rename: RenameDirective as any, // if graphql-tools < 3.x.x
  }
})
```

```graphql
type Query {
  getBook: Book
  anotherGetBook: Book @rename(type: "Query", to: "allBook")
}

type Mutation {
  createBook(title: "Apollo Directives Package"): Book
  newBook(title: "Apollo Directives Package"): Book @rename(type: "Mutation", to: "createBook")
}
```

## Directives list

1. RenameDirective: To rename(redirect) other Query, Mutation, Field resolve

Please pull-request to update your awesome directive!🤩 and give me your username in github, npm to register collaborators.



## To Do
### Bugs
- [x] Directive type is no match in Typescript -> Resolved.(Refer to version of `graphql-tools`)
```js
makeExecutableSchema({
    schemaDirectives: {...} // <- type no match error in Typescript
})
```
<!-- ### Features
- [ ] RenameDirective: Apply a resolve of Type -->


## License

Code copyright 2018 Yoonho Go. Code released under [the MIT license](https://github.com/jgthms/bulma/blob/master/LICENSE).