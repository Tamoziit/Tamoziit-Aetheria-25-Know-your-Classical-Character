import { characters } from "../data/characters.js";
import { questions } from "../data/questions.js";

const TRAIT_COUNT = 8; // keeps the 8-dimension model

// ------------------------------
// Utility math helpers
// ------------------------------
function addVec(a, b) {
  return a.map((v, i) => v + (b[i] ?? 0));
}

function dot(a, b) {
  let s = 0;
  for (let i = 0; i < Math.min(a.length, b.length); i++) s += a[i] * b[i];
  return s;
}

function norm(a) {
  return Math.sqrt(dot(a, a));
}

function cosineSimilarity(a, b) {
  const na = norm(a);
  const nb = norm(b);
  if (na === 0 || nb === 0) return 0;
  return dot(a, b) / (na * nb);
}

// ------------------------------
// Helpers to normalize inputs
// ------------------------------
function getCharacterList(chars) {
  // Accept either an array or an object keyed by slug
  if (Array.isArray(chars)) return chars;
  return Object.values(chars || {});
}

function extractTraitVector(ch) {
  // prefer explicit names, fall back if available and numeric
  const candidates = [ch.traitVector, ch.vector, ch.traits];
  for (const c of candidates) {
    if (Array.isArray(c) && c.length >= TRAIT_COUNT && typeof c[0] === "number") {
      // ensure we only take the first TRAIT_COUNT numbers
      return c.slice(0, TRAIT_COUNT);
    }
  }
  return null;
}

// ------------------------------
// Core algorithm
// ------------------------------

/**
 * Compute the user's trait vector by summing the deltas from answered options.
 * Accepts two answer formats:
 *  - Array aligned with questions: ['a','b','c', ...] (index 0 -> questions[0])
 *  - Map of qid -> optionId: { 1: 'a', 2: 'b', ... }
 *
 * @param {string[]|Object} answers
 * @returns {number[]} userVector - TRAIT_COUNT-element vector
 */
export function computeUserVector(answers) {
  const v = Array(TRAIT_COUNT).fill(0);

  if (!answers) return v;

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    if (!q || !Array.isArray(q.options)) continue;

    // picking from array-style answers or map-style answers
    let pickRaw;
    if (Array.isArray(answers)) {
      pickRaw = answers[i];
    } else if (typeof answers === "object") {
      // allow numeric or string keys
      pickRaw = answers[q.id] ?? answers[String(q.id)] ?? answers[String(q.id).toLowerCase()];
    } else {
      pickRaw = undefined;
    }

    const pick = String(pickRaw || "").toLowerCase();

    // finding option by id
    const opt = q.options.find(o => {
      const oid = (o.id).toString().toLowerCase();
      return oid === pick;
    });

    if (opt && Array.isArray(opt.delta) && opt.delta.length >= TRAIT_COUNT) {
      // adding only first TRAIT_COUNT entries
      for (let t = 0; t < TRAIT_COUNT; t++) v[t] += (opt.delta[t] ?? 0);
    }
  }

  return v;
}

/**
 * Get similarity scores for every character. Works with characters as array or object.
 * @param {number[]} userVector
 * @returns {Array<{id?:string,name:string, sim:number, traitVector:number[]}>}
 */
export function getAllSimilarities(userVector) {
  const list = getCharacterList(characters);
  const out = [];

  for (const ch of list) {
    const vec = extractTraitVector(ch);
    if (!vec) continue; // skip characters without numeric vector

    const sim = cosineSimilarity(userVector, vec);
    out.push({
      id: ch.id,
      sim,
      raw: ch
    });
  }

  // sorting descending by similarity
  out.sort((a, b) => b.sim - a.sim);
  return out;
}

/**
 * Compute top N matches and their relative percentages among the top N
 * @param {string[]|Object} answers - either array aligned with questions or map {qid: 'a', ...}
 * @param {number} topN - how many top results to return (default 3)
 * @returns {Array<{name:string, sim:number, percent:number, raw:object}>}
 */
export function getTopMatches(answers, topN = 3) {
  const userVector = computeUserVector(answers);
  const sims = getAllSimilarities(userVector);
  const top = sims.slice(0, topN);

  return top.map(t => {
    const sim = Number(t.sim.toFixed(4));
    const percent = Number((Math.max(0, sim) * 100).toFixed(1));

    return {
      character: t.raw,
      sim,
      percent
    };
  });
}