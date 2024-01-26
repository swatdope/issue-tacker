import { Button } from "@radix-ui/themes";
import Link from "next/link";

const IssuePage = () => {
  return (
    <div>
      <Button>
        <Link href="/issues/new">New Issues</Link>
      </Button>
    </div>
  );
};

export default IssuePage;
