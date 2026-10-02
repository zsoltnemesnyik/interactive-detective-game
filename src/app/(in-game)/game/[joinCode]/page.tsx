import { notFound } from "next/navigation";
import { SessionQueries } from "@/lib/queries";

const PageLobby = async ({
  params,
}: {
  params: Promise<{ joinCode: string }>;
}) => {
  const { joinCode } = await params;

  const session = await SessionQueries.getSessionByJoinCode(joinCode);
  if (!session) notFound();

  return (
    <div>
      <h1>{joinCode}</h1>
    </div>
  );
};

export default PageLobby;
