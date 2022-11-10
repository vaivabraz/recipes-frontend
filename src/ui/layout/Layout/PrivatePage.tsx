import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

import { reactQueryKeys } from "../../../constants/reactQueryKeys";
import { UserService } from "../../../services";
import Page, { PageProps } from "./Page";

const PrivatePage: React.FC<PageProps> = ({ ...props }) => {
  const { status } = useSession();

  const router = useRouter();
  const { data } = useQuery(
    [reactQueryKeys.user],
    UserService.getCurrentUser
  );

  if (status === "unauthenticated") {
    router.push("/login");
  }

  if (status === "authenticated" && data) {
    return <Page {...props}></Page>;
  }
  return <div>Authenticating</div>;
};
export default PrivatePage;
