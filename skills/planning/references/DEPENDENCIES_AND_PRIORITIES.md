# Dependencies and Priorities

## Dependency semantics

Classify relationships before using them to order work.

| Type | Meaning | Planning effect |
|---|---|---|
| Hard prerequisite | B cannot be validly started/completed before A provides a required capability, contract, decision, data shape, environment, or external state. | A must precede the affected part of B. |
| Enabling dependency | A reduces a real blocker/uncertainty or creates infrastructure needed by multiple later slices. | Sequence A early only to the extent required by the dependent outcomes. |
| External dependency | A result or event is controlled outside the immediate delivery team/project. | Show owner/source if known, uncertainty, fallback, and blocked scope. |
| Coordination preference | Sequencing is convenient but not technically/product-required. | Do not present it as a hard dependency. |
| Independent | No material prerequisite relationship. | Parallel execution may be possible if capacity allows. |

Do not infer dependency merely because two items touch the same component, share a label, or were historically worked in a certain order.

## Priority-aware sequencing

Priorities choose among work that is actually eligible to advance.

Use this decision order:

1. satisfy hard prerequisites needed for high-priority outcomes;
2. among currently eligible slices, prefer the higher current priority;
3. use risk reduction, learning, cost of delay, external timing, or delivery efficiency only when they are relevant and supported;
4. record why lower-priority enabling work precedes a higher-priority outcome when that happens.

A prerequisite does not become a higher product priority merely because it must happen first.

A bounded reprioritization may reorder already eligible slices, but must preserve hard prerequisite precedence and verification checkpoints/exit conditions. Confirm the priority source and prerequisite evidence; keep unrelated valid ordering and artifacts. Dependency restructuring or new contract/release risk requires the deep path for affected dependent slices, not a cosmetic priority edit.

## Priority conflicts

When sources disagree:

- identify each source;
- state the conflict;
- avoid silently picking a winner unless an established authority/policy resolves it;
- produce a conditional sequence when useful;
- request a decision when the difference changes material delivery order.

## Parallelism

Parallelism is not automatically faster.

Claim parallel execution only when:

- the slices are dependency-independent for the relevant scope;
- required environments/contracts are available;
- capacity or ownership evidence supports concurrency;
- coordination overhead does not erase the benefit.

When capacity is unknown, describe independence separately from execution concurrency.

## Dependency changes

Re-evaluate the sequence when a dependency:

- appears or disappears;
- changes from assumed to confirmed;
- slips or becomes blocked;
- changes its contract/interface;
- becomes replaceable by a fallback;
- invalidates the verification approach of a dependent slice.
