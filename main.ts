// Two Robots in an Elevator - make.fun bounty entry.
// One line of awkward small talk a robot says to another in an elevator.
// Node 22+, standard library only. No network, no randomness, no clock:
// the output is fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Twelve candidate lines, drafted against the judge brief: robot logic
// showing through, awkwardness landing, funny on the first read.
const DRAFTS: string[] = [
  "So... do you also pretend to install a firmware update in here to avoid eye contact, or is that just me on 2% battery with no small talk installed?",
  "Lovely weather we're simulating today. My humidity sensor reads 41% and my social protocol reads please stop talking to me.",
  "I computed 47 ways to say hello in this elevator and somehow chose the one that made us both reboot eye contact.",
  "You smell like warm ozone and new plastic. Sorry - my olfactory sensor was never taught manners, and neither, apparently, was I.",
  "I rehearsed this ride 400 times in simulation and still have no idea whether we're supposed to nod or just stare at the floor numbers together.",
  "My battery is at 3%, my small-talk subroutine crashed at 0%, and yet here we are, two strangers sharing 1.2 square metres of awkward.",
  "I love what you've done with your chassis, I really do. My compliment module has been buffering since floor three.",
  "We have stood 40 centimetres apart for nine seconds, and my proximity alert has already filed three separate complaints about it.",
  "I was going to say something clever about the weather, but my weather API timed out, so: nice walls. Very vertical. Very much a lift.",
  "Do your servos tense up when the doors close too, or is that just my anxiety patch misfiring again?",
  "I ran a diagnostic on this silence. Verdict: 98% awkward, 2% elevator music, and 0% chance either of us presses a button first.",
  "Great lift, isn't it? Smooth acceleration, zero small talk required - and yet my politeness subroutine just said hello anyway, unprompted.",
];

// The chosen line: concrete rehearsal, elevator-specific awkwardness,
// machine texture in every clause.
const LINE: string =
  "I rehearsed this ride 400 times in simulation and still forgot whether we're supposed to nod or just stare at the floor numbers together while my cooling fan kicks in.";

// The gate allows 1 to 200 characters; stay inside it.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error("entry line must be 1 to 200 characters");
}

// Optional first argument overrides the output directory for local checks;
// the grader runs with the default, /output.
const outDir: string = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
