---
name: planning
description: Plans incremental software delivery from requirements, architecture, and priorities. Use when sequencing small verifiable delivery increments, exposing dependencies, defining checkpoints, handling planning uncertainty, or replanning after priority or constraint changes without inventing commitments.
license: MIT
metadata:
  author: Turpial AI Academy
  version: "0.5.6"
---

# planning

## Operating flow

~~~text
DISCOVER -> DECIDE -> IMPLEMENT -> VALIDATE -> REPORT
~~~

## Purpose

Create and maintain an evidence-backed, priority-aligned delivery plan whose next sequence of deliveries and dependencies is clear. Prefer small verifiable increments, expose uncertainty, and replan when evidence changes rather than treating an old plan as a promise.

## Non-negotiable rules

- Discover requirements, architecture, priorities, and existing planning conventions before sequencing work.
- Treat priorities as current decision inputs, not permanent truth. Record the source or assumption when material.
- Respect hard dependencies. Do not disguise optional sequencing preferences as dependencies.
- A prerequisite may need to occur before a higher-priority outcome; explain the dependency rather than silently changing the priority.
- Prefer small, independently verifiable delivery slices over large phase-shaped batches.
- Do not invent dates, effort, velocity, capacity, owners, or confidence that the available evidence does not support.
- Separate verified facts, assumptions, estimates, risks, and decisions.
- Do not rewrite requirements or architecture merely to make the plan easier.
- Do not decompose implementation into detailed tasks unless the user explicitly asks for task-level planning.
- Preserve a healthy existing roadmap/plan format when it already satisfies the capability.
- Do not report an obsolete or unvalidated plan as current.

## Minimum-sufficient evidence

Choose depth from the planning delta and evidence health, not from a new session. Keep valid delivery evidence and unchanged plan sections.

### Bounded amendment

Use the fast path for a local priority-rationale change or ordering adjustment among already eligible slices in a healthy existing plan when requirements, architecture constraints, hard prerequisites, dependency relationships, verification checkpoints/exit conditions, and release constraints remain unchanged.

1. Locate the authoritative existing plan and affected priority/slice rows.
2. Confirm the current priority source and inspect only affected requirement/status/dependency evidence plus prerequisite consumers needed to establish eligibility.
3. Amend the smallest coherent set of rows and its next sequence. Preserve unrelated slices, hard prerequisite precedence, checkpoint definitions, artifacts and valid evidence; do not reconstruct the entire roadmap or replay its template.
4. Revalidate the affected order and mandatory invariants: hard prerequisites remain ahead of dependents, current priorities and conflicts are explicit, near-term slices retain observable exit evidence, and the next delivery sequence/dependencies stay clear.
5. Report reused evidence with source/scope, invalidated ordering/status claims and why, fresh priority observations/checks, and assumptions/estimates separately. A status label or remembered completion is not durable proof of an executed checkpoint; unsupported dates/capacity never become commitments.

### Deep path and evidence invalidation

Use the deep path for a new plan, unclear scope, contradictory or missing durable evidence, dependency restructuring (including cross-provider prerequisites), changed requirements/architecture/public contracts, persisted data/migration, security boundaries, failed checkpoints, or release/deployment/rollback risk. Expand to affected dependencies and mandatory cross-cutting invariants; preserve healthy unrelated scope.

Reuse evidence only while its requirement, priority source, prerequisite state, contract, checkpoint, and validation conditions remain covered. A relevant mutation, disproven assumption, or failed invariant invalidates affected sequence/eligibility claims and dependent slices; obtain fresh source/status evidence and revalidate the affected order before advancing. Keep assumptions and forecasts separate from observations/executed proof. A new turn alone does not invalidate durable checkpoint evidence.

Load references by trigger: planning model for new/unhealthy or materially restructured plans; dependencies/priorities for eligibility, ordering or conflict questions; estimation/replanning for dates, capacity, changed assumptions or material uncertainty. Use templates only for missing or structurally incomplete artifacts; amend a healthy plan in its existing format.

## Discover

Read [PLANNING_MODEL.md](references/PLANNING_MODEL.md) before creating or materially restructuring a plan.

For a bounded amendment, start with the existing plan and affected priority/prerequisite evidence; do not rediscover unrelated product scope.

Collect the minimum useful evidence:

- requirements, acceptance outcomes, scope boundaries, and exclusions;
- architecture constraints, technical boundaries, known migrations, and prerequisite decisions;
- current priorities and any ordering constraints imposed by product, business, compliance, operations, or delivery policy;
- existing roadmap, milestones, plan, backlog, decision records, and status evidence;
- known external dependencies, integration windows, fixed events, contractual dates, or environment constraints;
- capacity, ownership, historical throughput, or estimates only when they are actually available and relevant;
- current blockers, material risks, and assumptions that can invalidate the proposed sequence.

For compatibility with the `planning/v1` minimum contract, the core inputs are:

~~~text
requirements
architecture
priorities
~~~

If one is missing, say what is missing and make only the smallest clearly labeled assumption needed to proceed.

## Decide

Use [DEPENDENCIES_AND_PRIORITIES.md](references/DEPENDENCIES_AND_PRIORITIES.md) for affected sequence/eligibility decisions and [ESTIMATION_AND_REPLANNING.md](references/ESTIMATION_AND_REPLANNING.md) when estimates, capacity, uncertainty or replanning assumptions are involved.

Build the plan in this order:

1. identify the outcomes that matter now;
2. derive the smallest meaningful delivery slices that advance those outcomes;
3. identify true prerequisite relationships and external blockers;
4. order the slices using priorities subject to hard dependencies;
5. define verification/checkpoint evidence for each near-term slice;
6. record material risks, assumptions, and uncertainty;
7. define triggers that require replanning;
8. keep farther-horizon detail coarser than the next delivery window.

Prefer outcome checkpoints to ceremony. A milestone is useful when it represents a meaningful verified state, decision boundary, external dependency, or release/review point.

## Implement

Create or update the project's planning artifact. When the project uses the ASPS-compatible numbered project-doc convention, write:

~~~text
docs/project/09-PLAN.md
~~~

Otherwise preserve the repository's healthy planning location. Use [plan.template.md](assets/plan.template.md) for a missing or structurally incomplete plan, rather than recreating a healthy existing artifact.

For each near-term delivery slice, capture enough information to execute the next planning decision:

- outcome or objective;
- included scope and explicit exclusions when material;
- requirement/outcome trace;
- prerequisite dependencies and why they are dependencies;
- current priority and relevant priority rationale/source;
- verification or exit evidence;
- major risk/assumption;
- uncertainty or estimate basis when applicable.

Do not create a false waterfall. Independent slices may proceed in parallel only when their dependencies and available capacity support that conclusion.

## Validate

Validate the plan against the actual inputs, not against formatting alone.

Confirm:

- every near-term slice advances a current requirement/outcome or an explicit enabling dependency;
- the ordering does not violate known hard dependencies;
- priority conflicts are visible rather than silently resolved;
- each near-term slice has observable verification/exit evidence;
- the plan does not invent unsupported commitments;
- assumptions and unknowns that could change sequence are visible;
- architecture constraints are respected without being re-decided inside the plan;
- the next sequence of deliveries and dependencies is understandable without reconstructing hidden reasoning;
- replanning triggers exist for material changes.

The minimum planning gate is:

> The next delivery sequence and dependencies are clear and compatible with current priorities.

## Report

Report:

1. planning evidence used;
2. current priorities and material assumptions;
3. ordered near-term delivery slices;
4. dependencies/blockers and why they affect sequence;
5. checkpoints and verification evidence;
6. risks, uncertainty, and unsupported unknowns;
7. replanning triggers;
8. changes made to the planning artifact;
9. unresolved decisions requiring human/product input.

For amendments, identify changed rows/order, preserved prerequisites/checkpoints, reused/invalidated/fresh evidence, and remaining assumptions.

Keep facts separate from assumptions and estimates. Do not present a planning forecast as a guarantee.

## Detailed references

- [Planning Model](references/PLANNING_MODEL.md)
- [Dependencies and Priorities](references/DEPENDENCIES_AND_PRIORITIES.md)
- [Estimation and Replanning](references/ESTIMATION_AND_REPLANNING.md)
- [Plan Template](assets/plan.template.md)
