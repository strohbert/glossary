import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Acronym } from './acronym';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const acronyms = [
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
            description: 'survived the dot com bubble'
        },
        {
            id: 14,
            acronym: 'HP',
            expression: 'Hawlett Packard',
            description: 'helps people with pretty printing'
        },
      ];
    return {acronyms};
  }
}
