import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Phrase } from './phrase';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const phrases = [
        {
            id: 11,
            acronym: 'CSFW',
            expression: 'Client Server Framework',
            description: 'Helps managing client server communication'
        },
        {
            id: 12,
            acronym: 'REST',
            expression: 'REpresentational State Transfer',
            description: 'Specifies how a client and a server exchange data'
        },
        {
            id: 13,
            acronym: 'TIBCO',
            expression: 'The Information Bus Company',
            description: 'Real-Time Communication. Survived the dot com bubble'
        },
        {
            id: 14,
            acronym: 'LIR',
            expression: 'Lot Incident Report',
            description: '...?'
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
        {
            id: 22,
            acronym: 'MOM',
            expression: 'Message Oriented Middleware',
            description: ''
        },
        {
            id: 23,
            acronym: 'AMQP',
            expression: 'Advanced Message Queuing Protocol',
            description: ''
        },
        {
            id: 24,
            acronym: 'MQTT',
            expression: 'Message Queue Telemetry Transport',
            description: ''
        },
        {
            id: 25,
            acronym: 'TIB/RV',
            expression: 'Rendezvous',
            description: 'The messaging system of TIBCO'
        },
        {
            id: 26,
            acronym: 'AMQ',
            expression: 'Apache Active Message Queque',
            description: ''
        },
        {
            id: 27,
            acronym: 'VFEI',
            expression: 'Virtual Factory Equipment Interface',
            description: ''
        },
        {
            id: 28,
            acronym: 'DAD',
            expression: 'Die/Defect Attribute Database',
            description: 'Collects visual inspection and test audit data.'
        },
        {
            id: 29,
            acronym: 'NIRDA',
            expression: 'NIKON Inspection Review and Defect Cause Code Assignment',
            description: 'Allows for imagary to be reviewed and defect cause codes to be assigned.'
        },
        {
            id: 30,
            acronym: 'SWAMI',
            expression: '?',
            description: 'Wafer map and defect visualization UI for DAD data; allows users to scrap and unscrap parts'
        },
        {
            id: 31,
            acronym: 'DAD NG',
            expression: 'New DAD next generation application',
            description: 'See DAD?!'
        },
        {
            id: 32,
            acronym: 'SWAMI NG',
            expression: 'New SWAMI next generation application',
            description: 'See SWAMI?!'
        },
        {
            id: 33,
            acronym: 'WorkStream',
            expression: '',
            description: 'MES for wafer and overmold fab'
        },
        {
            id: 33,
            acronym: 'iWAC',
            expression: '',
            description: 'HPs shop floor control system for integration and automation below MES level.'
        },
        {
            id: 34,
            acronym: 'SPC',
            expression: 'Statistical process control',
            description:
'Statistical process control is a method of quality control which employs statistical methods to monitor and control a process.'
        },
        {
            id: 35,
            acronym: 'SDI',
            expression: 'Software-Defined Infrastructure',
            description:
'HPs engineering database and analysis system; collects any kind of product and ' +
'process engineering data during production and testing; includes detailed genealogy data'
        },
        {
            id: 36,
            acronym: 'Klarity',
            expression: '',
            description: 'Yield management and analysis system'
        },
        {
            id: 37,
            acronym: 'PDCA',
            expression: 'Plan, Do, Check, Act',
            description: ''
        },
        {
            id: 38,
            acronym: 'FCM',
            expression: 'Factory Control Message',
            description: ''
        },
        {
            id: 39,
            acronym: 'EMC',
            expression: 'Epoxy Mold Compound',
            description: ''
        },
        {
            id: 40,
            acronym: 'TIP',
            expression: 'Technical Implementation Plan',
            description: ''
        },
        {
            id: 41,
            acronym: 'TSG',
            expression: 'Trouble Shooting Guide',
            description: ''
        },
        {
            id: 42,
            acronym: 'WLS',
            expression: 'Whole Lot Scrap',
            description: ''
        },
        {
            id: 43,
            acronym: '',
            expression: 'Ink in the eye',
            description:
'A reference descriptor meaning that the orientation of the part is displayed such that the nozzles are facing the viewer.'
        },
        {
            id: 44,
            acronym: 'OM',
            expression: 'Overmold',
            description: 'Parts with EMC substrate'
        },
        {
            id: 45,
            acronym: 'OOC',
            expression: 'Out Of Control',
            description: ''
        },
        {
            id: 46,
            acronym: 'OOS',
            expression: 'Out Of Spec',
            description: ''
        },
      ];
    return {phrases};
  }
}
