![Code Coverage](https://img.shields.io/badge/coverage-96%25-green?style=flat-square)

# Clean Architecture with Nest.JS

## Installation

```
git clone git@github.com:edsonmoretti/koro-clean-architecture-with-nestjs.git
npm install
npm run start:dev
```

## Database

I used in-memory database and sqlite for this project. You can flip between them in the `src/brand/brand.controller.ts` file.

## Clean Architecture Diagram Based

![Cleab Architecture](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

### Folder structure
```
└ .                             → Framework and Drivers / NestJS
└ @core/domain                  → Enterprise core business rules such as domain model objects (Aggregates, Entities, Value Objects) and repository interfaces
└ @core/application             → Application core business rules such as usecases and types for usecases
└ @core/controller              → Controllers interfaces
└ infra                         → Frameworks, drivers and tools, too interfaces for database, cache, etc
```

