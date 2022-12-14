const Teams = ({ team1 }) => {
  return (
    <div className="">
      <div className="flex justify-between bg-lighter2 rounded-md border border-gray-800 h-12 shadow-xl hover:bg-gray-800 duration-75">
        <label className="flex justify-center w-full items-center">
          {team1}
        </label>
      </div>
    </div>
  );
};

export default Teams;
