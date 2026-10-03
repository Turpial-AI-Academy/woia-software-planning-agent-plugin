# Planning Model

## Objective

A useful software delivery plan answers a practical question:

> What should be delivered next, in what order, why that order, and what evidence or change would cause us to revise it?

The plan is not a promise that uncertainty has disappeared. It is a current decision model built from requirements, architecture, priorities, dependencies, and available delivery evidence.

## Planning inputs

Minimum inputs:

| Input | Planning use |
|---|---|
| Requirements | Identify outcomes, scope, acceptance, and value-bearing behavior. |
| Architecture | Respect system boundaries, technical prerequisites, migration constraints, and integration limits. |
| Priorities | Decide which eligible outcomes should advance first. |

Optional evidence may include capacity, historical throughput, estimates, external dates, owners, incidents, operational constraints, and existing roadmap status. Optional evidence must not be fabricated when absent.

## Delivery slices

A delivery slice is the smallest meaningful increment that can advance an outcome and be verified without requiring the entire larger initiative to be complete.

A good near-term slice has:

- a clear outcome;
- bounded scope;
- a trace to requirement/outcome or a justified enabling dependency;
- explicit prerequisites;
- observable exit evidence;
- uncertainty small enough to make the next decision useful.

A slice does not need to be deployable independently in every architecture. It does need to represent a coherent, verifiable planning increment.

Prefer vertical or outcome-bearing slices when practical. Horizontal enabling work is legitimate when it is a real prerequisite; label it as enabling work rather than pretending it directly delivers user value.

## Horizon detail

Use progressive detail:

~~~text
next slice(s)     -> concrete
near horizon      -> ordered with dependencies/checkpoints
far horizon       -> coarse outcomes/options
~~~

Do not spend precision on distant work that current evidence cannot support.

## Checkpoints and milestones

Use a checkpoint when a verified state changes what can happen next. Examples include:

- acceptance of a usable increment;
- completion of a prerequisite contract/migration;
- resolution of a blocking decision;
- availability of an external integration;
- evidence that reduces a major uncertainty;
- a release/review boundary when it materially affects sequencing.

A milestone without an observable state or decision purpose is merely a label.

## Bounded plan amendments

Amend a healthy existing plan for a local priority-rationale change or reorder among eligible slices when hard prerequisites/dependency relationships, architecture/requirements, checkpoint exit conditions and release constraints are unchanged. Revalidate the affected order and current priority evidence while preserving hard prerequisite precedence, unrelated slices, checkpoints and valid artifacts/proof. Do not rebuild the whole roadmap or replay a template.

Track evidence by lifecycle: reusable evidence has source/scope and still-valid conditions; invalidated ordering/eligibility claims no longer cover changed inputs or failed invariants; fresh evidence is actually observed/executed; assumptions/estimates remain unverified forecasts. A bare status label is not checkpoint execution evidence. New plans, contradictory/missing durable proof, dependency restructuring, contract/data/migration/security changes or release/deployment risk require deeper reconciliation of affected slices and required invariants.

## Boundaries with adjacent capabilities

Planning consumes requirements; it does not redefine them.

Planning consumes architecture; it does not decide architecture merely to simplify scheduling.

Planning may identify work packages or slices; detailed implementation tasks belong to task decomposition.

Planning can use capacity evidence; organizational staffing allocation belongs to resource/portfolio management when that is a separate process.

Testing, CI/CD, release preparation, and deployment provide constraints/evidence but retain their own policies.

## Minimum plan quality gate

A plan is ready for the next delivery decision when:

- the next sequence is explicit;
- dependencies affecting that sequence are explicit;
- current priorities are respected or any conflict is explained;
- each near-term slice has verification/exit evidence;
- material assumptions/unknowns are visible;
- the plan states what changes would cause replanning.
