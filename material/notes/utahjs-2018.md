# utahjs 2018

## slack notes

"Avoid global state" is a simplification of the problems caused by shared state. It really does help, but it's good to know why that's the case so you know when/where exceptions are appropriate. It's also good to understand because it can influence isolated bits of code as well, but with less severe consequences.

There are two problems caused by globals:

1. unclear dependencies, avoid this by interacting with the globals in one place and importing them as modules everywhere else
2. sharing mutable references causes bugs

1 is pretty straightforward, but 2 is a huge topic. In short, if your shared things are immutable it's not a big deal. However, in JS basically everything is mutable.

So why is this a problem? If we have two files, `a.js` and `b.js`, which both import a mutable (global or otherwise, it doesn't really matter -- "global" just implies "shared") reference to something there's now an implicit behavior in the code. `a.js` and `b.js` are now dependent on each other, the order in which they are run, and the code in each file. `b.js` might not work if it's moved to another project where `a.js` doesn't exist. This relationship gets exponentially more complicated as more and more things become involved. The "avoid global state" mantra comes from the fact that a `window.xyz` global is more likely to be abused than a module nested inside a folder which is only imported once by a file next to it.

What about Redux? Well, sometimes a global, mutating variable is necessary. It turns out apps are more useful when they change over time :slightly_smiling_face:. Redux is a bit "safer" than a lot of other solutions to that problem because it imposes some very specific constraints on that shared state:

1. the root reference can be changed, but the trees of state stored in that reference must be immutable
2. you can only change that root reference by dispatching an "action" explaining the change (helps with debugging)

Those constraints are interesting because even though Redux is using mutating, shared state internally, there are no (condoned) ways of manipulating it which are not (mostly-)pure functions. I.E. reducers are pure functions you can write tests for, selectors are pure functions you can write tests for, connect fudges the rules a little bit but it's not a big deal in single-store apps.

One extra note I hinted at but didn't articulate --

The dependency between `a.js` and `b.js` in that example is a real concrete thing, except it doesn't exist in the code. It could exist in a comment, but comments are unreliable. It's a constraint that materializes suddenly as the code is running, or in a developer's head as they read and run the code in their heads. You can imagine why this is mentally draining and one of the most common sources of inexplicable bugs. Especially ones that appear in software which worked just fine for years and suddenly broke because something in a completely different part of the program changed.

Don't write "invisible code"

If this is interesting, Rust is a really unique language worth investigating, even if it's just the intro material. The language itself imposes those rules on all variables -- a reference must be immutable to be shared; mutable references can only have a single "owner" and that ownership can be handed off to other functions, and only the owner is allowed to mutate it.

## some type stuff that might be related

```text
Luke Barrett [19:48]
What are peoples thoughts on PropTypes? Should it be used in production or something else like typscript or flow?


Michael Trotter [20:21]
Type checking in production is not ideal. It slows things down, increases bundle size, and a failure can't be recovered from (at least not any better than just attempting it and recovering from that). PropTypes in dev mode add type checking to the code that runs in dev. It's also pretty specific to React itself, so you're on your own outside of your component props. It's better than nothing but not perfect (nothing is, really, just different tradeoffs). It's more of an early warning sign for a particular subset of errors (passing incorrect props). TypeScript/Flow/[other static typing] differ in that they run statically, regardless of whether the code is executed. This is good for catching errors you didn't manually test or have set up in an automation suite. It can also cover a lot more of your code. (edited)

Michael Trotter [20:31]
Type checking is also a spectrum. Here are a few examples, from loose to strict (also hugely simplified since there are way more than two dimensions here):
Clojure[Script]-------------JavaScript-----------React+PropTypes----------------------TypeScript/Flow----Reason--------Elm/PureScript

Clojure's approach is to stay dynamic and use even fewer types than JS. If most things are the same type/shape and are relatively flexible on error states, it's harder to cause runtime crashes (i.e. nulls tend to propagate/bubble up instead of causing explosions -- try to read a prop from a null value and you just get more null). Some people really like this but I don't really buy into it since simply avoiding runtime exceptions doesn't mean your business logic works and usually business logic failures are just as bad as exceptions.

JavaScript has just a few built in types, but they do differ and can cause runtime errors.

TypeScript/Flow add types to JS, but some bits of JS are really not typeable. They handle this case by allowing bits of untyped code, which you have to be careful to contain and use safely (not any less safe than plain JS though).

Reason is a bit more strict, in that you know things within Reason/OCaml code are safe but you can still import an interact with JS things when necessary. It's a little farther to the strict side because the type system is more powerful and it's harder to accidentally leak unsafe code.

Elm/PureScript are similar to Reason, but they also add side effect tracking to the type system, reducing the surface area for state-related bugs further. (edited)
```
