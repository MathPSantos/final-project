import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { Button } from "../Button";

export function LoginButton() {
  return (
    <Link href="/login">
      <Button label="login" icons={[<FiArrowRight />]} color="green" />
    </Link>
  );
}
