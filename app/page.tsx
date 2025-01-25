import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Buying&nbsp;</span>
        <span className={title({ color: "violet" })}>Data & Airtime&nbsp;</span>
        <br />
        <span className={title()}>
          Made Eazy
        </span>

      </div>

      <div className="flex gap-3">
        <Link

          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={"/register"}
        >
          Register
        </Link>
        <Link

          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={"/login"}
        >

          Login
        </Link>
      </div>


    </section>
  );
}
