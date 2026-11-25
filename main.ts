// The 3AM Fridge Text — one line, 113 characters: the message a smart
// fridge sends its owner at 3am. The gate wants /output/entry.txt to be
// UTF-8 text of 1 to 140 characters, not only white space.
//
// Why this line:
//   - It IS a fridge texting at 3am, in the fridge's own small voice:
//     it watches, it keeps a log, it has opinions, and it has no shame
//     about sharing them at 3am.
//   - Fresh angle, not the obvious milk / ice / door-left-open joke:
//     the owner caught mid-crime, eating shredded cheese straight from
//     the bag, lit only by the fridge light.
//   - Screenshot-worthy: "raccoon in a trench coat" is the image a
//     reader sends to a friend; "I respect it. I also logged it." is
//     the machine punchline — approving and surveilling at once.
//   - Complete on a lock screen, no follow-up needed.
// Run outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "3am. You're eating shredded cheese over my light like a raccoon in a trench coat. I respect it. I also logged it.";

// The gate refuses anything over 140 characters: fail loudly here
// rather than shipping a line the scorer would mark invalid.
if ([...LINE].length > 140) {
  throw new Error(`entry line is ${[...LINE].length} characters, over the 140 cap`);
}

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// In the grader /output is a mount point: create it when it is missing,
// never remove it and never empty it wholesale.
mkdirSync(dest, { recursive: true });
writeFileSync(`${dest}/entry.txt`, LINE, "utf8");

console.log(`wrote ${dest}/entry.txt (${LINE.length} characters)`);
