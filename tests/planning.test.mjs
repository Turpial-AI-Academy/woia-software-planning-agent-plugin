import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const ROOT = path.resolve(import.meta.dirname, "..");

const skillRoot = path.join(ROOT, "skills", "planning");

function assertConcepts(value, concepts) {
  for (const concept of concepts) assert.match(value, concept);
}

function rejectsStatusLabelsAsExecutionProof(value) {
  return value.split(/[.!?\n]+/).some((clause) =>
    /status\s+labels?|remembered\s+completion|recollection/i.test(clause) &&
    /proof|prove|evidence|establish/i.test(clause) && /execut(?:ed|ion)|checkpoint/i.test(clause) &&
    /\b(?:not|never|cannot|insufficient)\b/i.test(clause));
}

test("planning follows discover decide implement validate report", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  const discover = skill.indexOf("## Discover");
  const decide = skill.indexOf("## Decide");
  const implement = skill.indexOf("## Implement");
  const validate = skill.indexOf("## Validate");
  const report = skill.indexOf("## Report");
  assert.ok(discover >= 0 && decide > discover && implement > decide && validate > implement && report > validate);
});

test("planning minimum contract consumes requirements architecture priorities and supports 09-PLAN", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  for (const input of ["requirements", "architecture", "priorities"]) {
    assert.match(skill, new RegExp(`^${input}$`, "m"));
  }
  assert.match(skill, /docs\/project\/09-PLAN\.md/);
  assert.match(skill, /next sequence of deliveries and dependencies is clear/i);
});

test("planning model uses small verifiable delivery slices and progressive horizon detail", async () => {
  const model = await readFile(path.join(skillRoot, "references", "PLANNING_MODEL.md"), "utf8");
  assert.match(model, /smallest meaningful increment/i);
  assert.match(model, /verification\/exit evidence/i);
  assert.match(model, /next slice\(s\).*concrete/s);
  assert.match(model, /far horizon.*coarse outcomes\/options/s);
});

test("dependencies distinguish real prerequisites from sequencing preferences", async () => {
  const deps = await readFile(path.join(skillRoot, "references", "DEPENDENCIES_AND_PRIORITIES.md"), "utf8");
  assert.match(deps, /Hard prerequisite/);
  assert.match(deps, /Enabling dependency/);
  assert.match(deps, /External dependency/);
  assert.match(deps, /Coordination preference/);
  assert.match(deps, /Do not present it as a hard dependency/);
  assert.match(deps, /prerequisite does not become a higher product priority/i);
});

test("priority conflicts remain visible and unsupported winners are not invented", async () => {
  const deps = await readFile(path.join(skillRoot, "references", "DEPENDENCIES_AND_PRIORITIES.md"), "utf8");
  assert.match(deps, /identify each source/);
  assert.match(deps, /avoid silently picking a winner/i);
  assert.match(deps, /request a decision when the difference changes material delivery order/i);
});

test("estimation guidance rejects false precision and invented capacity", async () => {
  const estimation = await readFile(path.join(skillRoot, "references", "ESTIMATION_AND_REPLANNING.md"), "utf8");
  assert.match(estimation, /Do not manufacture precision/i);
  assert.match(estimation, /explicitly unknown/);
  assert.match(estimation, /Do not invent team size, availability, ownership, working hours, or utilization/);
  assert.match(estimation, /avoid claiming parallel execution dates/);
});

test("replanning reacts to changed evidence instead of preserving an invalid plan", async () => {
  const estimation = await readFile(path.join(skillRoot, "references", "ESTIMATION_AND_REPLANNING.md"), "utf8");
  for (const trigger of ["priority or scope changes", "architecture or interface changes", "dependency blocked/slipped/resolved", "checkpoint fails"]) {
    assert.match(estimation, new RegExp(trigger.replace("/", "\\/"), "i"));
  }
  assert.match(estimation, /Refusing to update an invalid plan is the failure mode/);
});

test("plan template captures basis sequence dependencies checkpoints risks and replanning", async () => {
  const template = await readFile(path.join(skillRoot, "assets", "plan.template.md"), "utf8");
  for (const heading of [
    "## Planning basis",
    "## Assumptions and unknowns",
    "## Ordered delivery sequence",
    "## Dependency notes",
    "## Checkpoints / milestones",
    "## Risks and uncertainty",
    "## Replanning triggers",
    "## Next decision",
  ]) {
    assert.ok(template.includes(heading), `missing ${heading}`);
  }
});

test("planning keeps adjacent capability boundaries explicit", async () => {
  const model = await readFile(path.join(skillRoot, "references", "PLANNING_MODEL.md"), "utf8");
  assert.match(model, /Planning consumes requirements; it does not redefine them/);
  assert.match(model, /Planning consumes architecture; it does not decide architecture/);
  assert.match(model, /detailed implementation tasks belong to task decomposition/);
});

test("bounded planning amendment preserves hard order and checkpoint obligations", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  const bounded = skill.split("### Bounded amendment")[1]?.split("### Deep path")[0];
  assert.ok(bounded);
  assertConcepts(bounded, [/eligible/i, /healthy|sound/i, /existing|current/i,
    /hard.*prerequisite|required.*dependency/i, /dependency.*relationship/i,
    /checkpoint/i, /exit.*condition/i, /unchanged|unaltered|stable/i, /authoritative|canonical/i,
    /current.*priority/i, /source/i, /consumer/i, /eligibility/i,
    /preserve|retain|keep/i, /unrelated|unaffected/i, /precedence|ahead|before/i,
    /revalidate|verify/i, /mandatory|invariant/i, /dependent/i, /observable.*evidence/i]);
});

test("planning retains deep reconciliation for new plans and dependency or release risk", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  const deep = skill.split("### Deep path and evidence invalidation")[1]?.split("## Discover")[0];
  assert.ok(deep);
  assertConcepts(deep, [/new.*plan/i, /contradict|conflict/i, /missing|absent/i, /durable.*evidence/i,
    /dependency.*restructur/i, /cross-provider/i, /requirement/i, /architecture/i, /public.*contract/i,
    /persist/i, /migration/i, /security/i, /failed.*checkpoint/i,
    /release|deployment|rollback/i, /affected.*dependenc/i, /cross-cutting.*invariant/i]);
});

test("planning evidence reuse does not turn labels or forecasts into executed proof", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  const estimation = await readFile(path.join(skillRoot, "references", "ESTIMATION_AND_REPLANNING.md"), "utf8");
  assertConcepts(skill, [/reus/i, /source/i, /scope/i, /invalidat/i, /order|sequence|status/i,
    /fresh/i, /observ|execut/i, /assumption/i, /estimate|forecast/i, /separat|distinct/i,
    /mutation|change/i, /failed.*invariant/i, /dependent.*slice/i, /before.*advanc/i]);
  assert.equal(rejectsStatusLabelsAsExecutionProof(skill), true);
  assert.equal(rejectsStatusLabelsAsExecutionProof("A checkpoint status label cannot prove that execution occurred."), true);
  assert.equal(rejectsStatusLabelsAsExecutionProof("A checkpoint status label proves actual execution."), false);
  assertConcepts(estimation, [/preserve|retain|keep/i, /unaffected|unrelated/i, /valid.*proof|reusable.*evidence/i]);
  assert.equal(rejectsStatusLabelsAsExecutionProof(estimation), true);
});

test("planning loads references by trigger and amends existing artifact rows", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  const plan = await readFile(path.join(skillRoot, "assets", "plan.template.md"), "utf8");
  const dependencies = await readFile(path.join(skillRoot, "references", "DEPENDENCIES_AND_PRIORITIES.md"), "utf8");
  const referencePolicy = skill.split("Load references")[1]?.split("## Discover")[0];
  assert.ok(referencePolicy);
  assertConcepts(referencePolicy, [/trigger|when|conditional/i, /template/i, /missing|incomplete/i,
    /amend/i, /healthy|existing/i]);
  assertConcepts(plan, [/affected.*rows/i, /reus/i, /invalidat/i, /fresh/i, /assumption|estimate/i]);
  assertConcepts(dependencies, [/repriorit/i, /preserve|retain|keep/i,
    /hard.*prerequisite/i, /precedence|ahead|before/i, /checkpoint/i, /exit.*condition/i]);
});
