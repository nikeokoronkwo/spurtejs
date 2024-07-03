/**
 * **Dyte**
 * @file The Dyte Entrypoint
 * @copyright The Dyte Authors
 * 
 *
 * The Dyte entrypoint file
 *
 * The Dyte CLI at the moment makes use of the
 */

import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.4/command/mod.ts";
import version from "./gen/version.ts";
import { run } from "./commands/run.ts";
import { build } from "./commands/build.ts";

const main = new Command()
  .name("dyte")
  .version(version)
  .description("Universal Frontend Tooling with Deno")
  .command("run", run)
  .command("build", build);

await main
  .parse(Deno.args);
