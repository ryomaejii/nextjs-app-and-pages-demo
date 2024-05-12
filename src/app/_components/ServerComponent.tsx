export const ServerComponent = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return (
    <div className="bg-gray-200 p-8 rounded-lg w-full">
      <h2>Server Component</h2>
    </div>
  );
};
