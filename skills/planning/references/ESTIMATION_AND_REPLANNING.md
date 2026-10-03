# Estimation and Replanning

## Evidence before precision

Dates, effort, throughput, capacity, and confidence are evidence-bearing claims. Do not manufacture precision to make a plan look complete.

Use the strongest form supported by evidence:

~~~text
known fixed constraint
-> evidence-backed estimate/range
-> relative size/order
-> explicitly unknown
~~~

If only ordering is known, publish ordering. If a range is supported, include the range and basis. If a fixed external date exists, distinguish the date from the forecast of completing work by that date.

## Estimates

When estimates are useful, state:

- what is being estimated;
- units or range;
- evidence/basis;
- important assumptions;
- confidence or uncertainty where meaningful;
- what new evidence would revise the estimate.

Do not convert story points, historical velocity, model intuition, or a single prior task into calendar commitments without an explicit justified model.

## Capacity

Capacity can affect concurrency and forecast but is optional input to the planning capability.

Use only observed/authorized capacity information. Do not invent team size, availability, ownership, working hours, or utilization.

If capacity is unavailable:

- preserve dependency/priority ordering;
- avoid claiming parallel execution dates;
- mark scheduling detail as unresolved rather than guessing.

## Replanning triggers

Replan when evidence changes materially, including:

- priority or scope changes;
- requirement acceptance changes;
- architecture or interface changes that alter prerequisites;
- dependency blocked/slipped/resolved;
- a material risk occurs;
- estimate/capacity evidence changes enough to alter sequence;
- a checkpoint fails its exit evidence;
- a new external date/constraint appears;
- an assumption supporting the sequence is disproven.

## Replanning procedure

1. preserve the prior plan/status for traceability when the repository convention supports it;
2. identify what evidence changed;
3. identify which slices/dependencies are invalidated;
4. recompute only the affected ordering before expanding scope;
5. restate assumptions and current priorities;
6. validate the new next sequence and dependencies;
7. report what changed and why.

Do not treat replanning as failure. Refusing to update an invalid plan is the failure mode.

Keep reusable evidence with its source/scope and conditions. Invalidate affected sequence/eligibility claims and dependent slices when prerequisites, contracts, priority sources, checkpoint conditions or assumptions change, then obtain fresh observations/executed evidence as required. Preserve unaffected valid proof; do not replay checkpoints merely because a new session began. Status labels, recollection, assumptions and estimates are not evidence of checkpoint execution.
