"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
class RenameDirective extends graphql_tools_1.SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
        let graphqlObjectType;
        switch (this.args.type) {
            case 'Query':
                graphqlObjectType = this.schema.getQueryType();
                break;
            case 'Mutation':
                graphqlObjectType = this.schema.getMutationType();
                break;
            case 'Subscription':
                graphqlObjectType = this.schema.getSubscriptionType();
                break;
            default:
                throw new Error('Unkown type paramater');
        }
        field.resolve = graphqlObjectType.getFields()[this.args.to].resolve;
        field.isDeprecated = true;
        field.deprecationReason = `Rename to "${this.args.to}"`;
    }
}
exports.RenameDirective = RenameDirective;
