import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";

import { reactQueryKeys } from "../../../constants/reactQueryKeys";
import { UserService } from "../../../services";
import Page, { PageProps } from "./Page";

const PrivatePage: React.FC<PageProps> = ({ ...props }) => {
  const router = useRouter();
  const { isLoading, data } = useQuery(
    [reactQueryKeys.user],
    UserService.getCurrentUser
  );

  if (!isLoading && !data?.username) {
    router.push("/login");
  }

  if (!isLoading && data?.username) {
    return <Page {...props}></Page>;
  }
  return <div>Authenticating</div>;
};
export default PrivatePage;
