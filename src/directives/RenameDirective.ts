import { GraphQLField } from 'graphql'
import { SchemaDirectiveVisitor } from 'graphql-tools'

export class RenameDirective extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field: GraphQLField<any, any>) {
    switch (this.args.type) {
      case 'Query':
        field.resolve = this.schema.getQueryType().getFields()[this.args.to].resolve
        break
      case 'Mutation':
        field.resolve = this.schema.getMutationType().getFields()[this.args.to].resolve
        break
      case 'Subscription':
        field.resolve = this.schema.getSubscriptionType().getFields()[this.args.to].resolve
        break
      default:
        throw new Error('Unkown type paramater')
    }
    field.isDeprecated = true
    field.deprecationReason = `Rename to "${this.args.to}"`
  }
}
