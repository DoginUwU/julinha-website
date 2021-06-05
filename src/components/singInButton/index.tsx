import { signIn, signOut, useSession } from "next-auth/client";
import { useState } from "react";
import { Popover } from "react-tiny-popover";
// styles
import styles from "./styles.module.scss";

export function SignInButton() {
  const [session] = useSession();
  const [popover, setPopover] = useState(false);

  return session ? (
    <Popover
      isOpen={popover}
      positions={["bottom"]}
      content={
        <div className={styles.popover}>
          Já está de saida, {session.user.name}?
        </div>
      }
    >
      <div
        className={styles.profile}
        onClick={() => signOut()}
        onMouseEnter={() => setPopover(true)}
        onMouseLeave={() => setPopover(false)}
      >
        <img src={session.user.image} alt={session.user.name} />
      </div>
    </Popover>
  ) : (
    <div className={styles.signInButton} onClick={() => signIn("discord")}>
      Login com Discord
    </div>
  );
}
