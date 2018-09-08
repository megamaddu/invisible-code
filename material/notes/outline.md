# Invisible Code

## Abstract

"Avoid global state" is a simplification of the problems caused by shared state. It really does help, but it's good to know why that's the case so you know wh
en/where exceptions are appropriate. It's also good to understand because it can influence isolated bits of code as well, but with less severe consequences.

## Outline

- intro -> "Avoid global state"

  - :tada: surprise, _any_ state!
  - "global" just implies "shared"
  - when shared and mutable

- the problems caused by shared, mutable state

  - files A, B, and C

    - A defines some [intentionally?] mutable state
    - B and C both use that state and each has its own logic for deciding when to read or write that state
    - B and C are now implicitly connected

      - they may break each other, potentially only in very specific edge cases
      - B and C may have been written by different people
      - B might depend on the way C behaves, moving B or deleting/changing C may cause B to break (and maybe only in non-obvious ways, i.e. there's no test for that scenario but eventually a user will run into it)

  - invisible code

    - these threads are "invisible code"
    - the behavior and dependencies don't materialize until the code is running
    - or "running" in a developer's head

  - more invisible code

    - modifying browser globals

      - can't track dependencies
      - breaks expectations
      - tools can't analyze

    - the dnd component

      - existing dnd logic
      - certain events reset to `initialState`
      - later, business logic is added to cache data
      - data cleared unexpectedly!

    - the dom

      - `request -> html` was (\*is) great for static pages
      - increasingly interactive apps demanded mutability
      - global jQuery (not its fault, just the tool of the time) resulted in unmaintainable messes

    - angular 1.x's `$scope`

      - global? definitely shared!
      - components and services quickly became locked to the shape of the app
      - very brittle, easy to accidentally create dependencies
      - see: future slide on "invisible changes"

    - react "controlled" vs "uncontrolled" components

      - need to explicitly choose one, or ownership is ambiguous
      - if unsure, use callbacks over state

    - class inheritence / mixins

      - blending state machines = undefined results

  - invisible changes

    - "mutability hides change"
    - TODO: more?

  - red flags (just warning signs) / takeaways

    - functions which return nothing, or only a "status"
    - classes and inheritence
    - TODO: more

## Anecdotes

### Seth House

[Mutable state is] impossible to maintain over time, I don't know what the knobs do

### Joshua Comeau

[Explorable Explanations with React (React Rally 2018)](https://www.youtube.com/watch?v=XjFR9Jc-ras&t=21m15s)

Joshua uses the pedalboard metaphor for describing React components, but it also applies very well to functional pipelines as well.
