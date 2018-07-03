import { GraphQLField, GraphQLObjectType } from 'graphql'
import { SchemaDirectiveVisitor } from 'graphql-tools'

export class RenameDirective extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field: GraphQLField<any, any>) {
    let graphqlObjectType
    switch (this.args.type) {
      case 'Query':
        graphqlObjectType = this.schema.getQueryType() as GraphQLObjectType
        break
      case 'Mutation':
        graphqlObjectType = this.schema.getMutationType() as GraphQLObjectType
        break
      case 'Subscription':
        graphqlObjectType = this.schema.getSubscriptionType() as GraphQLObjectType
        break
      default:
        throw new Error('Unkown type paramater')
    }
    field.resolve = graphqlObjectType.getFields()[this.args.to].resolve

    field.isDeprecated = true
    field.deprecationReason = `Rename to "${this.args.to}"`
  }
}
