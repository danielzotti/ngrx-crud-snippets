# NgRx CRUD Entity snippets | `ngrx-crud-snippets`

A bunch of snippets for a common CRUD Entity in NgRx.

Working with NgRx it's as simple as writing `ngrx-crud-`\*.

## The complete list of snippets (alphabetical order)

- **actions**: `ngrx-crud-actions`
  - see result file in [EntityActionTypes.ts](./examples/EntityActionTypes.ts)
- **adapter**: `ngrx-crud-adapter`
  - see result file in [EntityAdapter.ts](./examples/EntityAdapter.ts)
- **effects**: `ngrx-crud-effects`
  - see result file in [EntityEffects.ts](./examples/EntityEffects.ts)
- **facade**: `ngrx-crud-facade`
  - see result file in [EntityFacade.ts](./examples/EntityFacade.ts)
- **reducer**: `ngrx-crud-reducer`
  - see result file in [EntityReducer.ts](./examples/EntityReducer.ts)
- **selectors**: `ngrx-crud-selectors`
  - see result file in [EntitySelectors.ts](./examples/EntitySelectors.ts)
- **service**: `ngrx-crud-service`
  - see result file in [EntityService.ts](./examples/EntityService.ts)
- **state**: `ngrx-crud-state`
  - see result file in [EntityState.ts](./examples/EntityState.ts)

## Other models

A file with other models used by the snippets can be found in [EntityModels.ts](./examples/EntityModels.ts)

## Project structure

- src/app
  - components
    - entity
      - create
        - entity-create.models.ts
      - edit
        - ...
        - entity-edit.models.ts
      - select-list
        - ...
        - entity-select-list.models.ts
    - entity2
      - ...
  - facades
    - entity.facade.ts
    - entity2.facade.ts
  - services
    - entity.service.ts
    - entity2.service.ts
  - store
    - entity
      - entity.actions.ts
      - entity.adapter.ts
      - entity.effects.ts
      - entity.reducers.ts
      - entity.selectors.ts
      - entity.state.ts
    - entity 2
      - ...
    - effects.ts
    - reducers.ts
    - state.ts

## Requirements

NgRx could be a good requirement ;)

## Known Issues

none (for now)

## Release Notes

### 1.0.0

Initial release
