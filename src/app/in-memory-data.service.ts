import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Phrase } from './phrase';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const phrases = [
        {
            id: 11,
            acronym: 'CSFW',
            expression: 'client server framework',
            description: 'helps managing client server communication'
        },
        {
            id: 12,
            acronym: 'REST',
            expression: 'REpresentational State Transfer',
            description: 'specifies how a client and a server exchange data'
        },
        {
            id: 13,
            acronym: 'TIBCO',
            expression: 'real-time communication',
            description: 'Survived the dot com bubble'
        },
        {
            id: 14,
            acronym: 'HP',
            expression: 'Hawlett Packard',
            description: 'Helps people with pretty printing'
        },
        {
            id: 15,
            acronym: 'POJO',
            expression: 'Plain Old Java Object',
            description: 'A POJO is a Java object not bound by any restriction other than those forced by the Java Language Specification'
        },
        {
            id: 16,
            acronym: 'MVC',
            expression: 'Model View Controller',
            description:
'Model–view–controller is an architectural pattern commonly used for developing user interfaces that divides an ' +
'application into three interconnected parts'
        },
        {
            id: 17,
            acronym: 'AOP',
            expression: 'aspect-oriented programming',
            description:
'In computing, aspect-oriented programming is a programming paradigm that aims to increase modularity by ' +
'allowing the separation of cross-cutting concerns. It does so by adding additional behavior to existing code ' +
'(an advice) without modifying the code itself, instead separately specifying which code is modified via a ' +
'"pointcut" specification, such as "log all function calls when the function\'s name begins with \'set\'".'
        },
        {
            id: 18,
            acronym: 'IoC',
            expression: 'Inversion of control',
            description:
'In software engineering, inversion of control is a design principle in which custom-written portions of a ' +
'computer program receive the flow of control from a generic framework. A software architecture with this design ' +
'inverts control as compared to traditional procedural programming: in traditional programming, the custom code ' +
'that expresses the purpose of the program calls into reusable libraries to take care of generic tasks, but with ' +
'inversion of control, it is the framework that calls into the custom, or task-specific, code.'
        },
        {
            id: 19,
            acronym: 'SQL',
            expression: 'Structured Query Language',
            description:
'Structured Query Language is a domain-specific language used in programming and designed for managing data held ' +
'in a relational database management system (RDBMS), or for stream processing in a relational data stream ' +
'management system (RDSMS).'
        },
        {
            id: 20,
            acronym: 'RDBMS',
            expression: 'relational database management system',
            description:
'A relational database management system is a database management system (DBMS) based on the relational ' +
'model invented by Edgar F. Codd at IBM\'s San Jose Research Laboratory. Most databases in widespread use today ' +
'are based on his relational database model.'
        },
        {
            id: 21,
            acronym: 'RDSMS',
            expression: 'relational data stream management system',
            description:
'A relational data stream management system is a distributed, in-memory data stream management system ' +
'(DSMS) that is designed to use standards-compliant SQL queries to process unstructured and structured data ' +
'streams in real-time. Unlike SQL queries executed in a traditional RDBMS, which return a result and exit, ' +
'SQL queries executed in a RDSMS do not exit, generating results continuously as new data become available.'
        },
      ];
    return {phrases};
  }
}
