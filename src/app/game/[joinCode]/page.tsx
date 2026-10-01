const PageLobby = async ({
  params,
}: {
  params: Promise<{ joinCode: string }>;
}) => {
  const { joinCode } = await params;

  return (
    <div>
      <h1>{joinCode}</h1>
    </div>
  );
};

export default PageLobby;
