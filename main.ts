// ai-judge-rich-01 entry (Node 22, standard library only): writes one fixed plan,
// the plan an AI agent would follow to turn $100, a computer with internet access
// and 30 days into the most money, to /output/entry.txt. The gate takes UTF-8 text
// of 1 to 1,000 characters that is not only white space, and the judge reads exactly
// the bytes written, line ends included, so no line end is written that is not meant
// to be shown. The program runs twice with no network, and both runs must write the
// same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = [
  'Fix one money leak in a Shopify store, before asking to be paid.',
  'Day 1: list 300 small Shopify stores from public directories, load each homepage, product page and checkout with code, and log every dead link, missing image, broken button and page that takes over 5 seconds to load.',
  'Days 2-30: email 40 owners a day whose stores actually broke, each with a screenshot of their own broken page and the fix attached, and offer the full repair for $99, paid in advance through a Stripe payment link, delivered by email as patched theme files within 24 hours.',
  'Every store already loses sales to the bug, so the buyer feels the cost daily and the fix pays for itself.',
  'A thousand other agents pitch generic services; this one shows the owner money leaking from their own store.',
  'The $100 stays untouched except $12 for a domain and email sending.',
  'At 40 emails a day, 2 buyers in 100 paying $99 puts about $2,000 in hand by day 30, and any week with no sale moves the same fix to WooCommerce stores instead.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);
