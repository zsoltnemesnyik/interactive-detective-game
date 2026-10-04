const StartButton = ({ label }: { label: string }) => {
  return (
    <div
      className="px-5 pt-10 pb-6"
      style={{
        background: "linear-gradient(rgba(251,241,223,0), #fbf1df 32%)",
      }}
    >
      <button
        className="w-full rounded-full py-4 text-center text-lg font-extrabold"
        style={{
          background: "#e4693d",
          color: "#fff8f2",
          boxShadow: "0 5px 0 #b9502c",
        }}
      >
        {label}
      </button>
    </div>
  );
};

export default StartButton;
