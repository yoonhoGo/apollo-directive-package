"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tools_1 = require("graphql-tools");
var RenameDirective = /** @class */ (function (_super) {
    __extends(RenameDirective, _super);
    function RenameDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RenameDirective.prototype.visitFieldDefinition = function (field) {
        var graphqlObjectType;
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
        field.deprecationReason = "Rename to \"" + this.args.to + "\"";
    };
    return RenameDirective;
}(graphql_tools_1.SchemaDirectiveVisitor));
exports.RenameDirective = RenameDirective;
//# sourceMappingURL=RenameDirective.js.map