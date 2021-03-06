﻿using System;
using System.Collections.Generic;
using System.Text;
using GraphQLParser.AST;
using System.Linq;
using System.Diagnostics;

namespace Tocsoft.GraphQLCodeGen.ObjectModel
{
    [DebuggerDisplay(@"\{{Name}\}")]
    internal class EnumType : IGraphQLInitter, IGraphQLType
    {
        private GraphQLEnumTypeDefinition op;

        public EnumType(GraphQLEnumTypeDefinition op)
        {
            this.op = op;
        }

        public string Name => this.op.Name.Value;
        public IEnumerable<string> Values => this.op.Values.Select(x => x.Name.Value);

        public void Resolve(GraphQLDocument doc)
        {
            
        }
    }
}
