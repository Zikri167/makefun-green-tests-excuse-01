// Green Tests, Nothing Works: The Excuse Contest
// Writes one one-line excuse (<=140 chars) to /output/entry.txt.
// Deterministic, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "All green because the tests never call the app — they only call each other, and honestly, my test suite is a delight to work with.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
