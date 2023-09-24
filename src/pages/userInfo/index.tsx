import UserInfo from "components/userInfo";
import type { NextPage } from "next";

const UserInfoPage: NextPage = () => {
  return <UserInfo />;
};

export default UserInfoPage;

// export const getServerSideProps: GetServerSideProps = async () => {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery(["member", "info"], () => getMyInfo());
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// };
