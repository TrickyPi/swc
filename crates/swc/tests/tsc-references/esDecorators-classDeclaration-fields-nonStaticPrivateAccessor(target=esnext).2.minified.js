//// [esDecorators-classDeclaration-fields-nonStaticPrivateAccessor.ts]
//! 
//!   x Unexpected token `@`. Expected identifier, string literal, numeric literal or [ for the computed key
//!    ,-[2:1]
//!  2 | declare let dec: any;
//!  3 | 
//!  4 | class C {
//!  5 |     @dec accessor #field1 = 0;
//!    :     ^
//!  6 | }
//!    `----
