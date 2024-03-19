import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        {/* <p>{currentUser.username}</p> */}
        <img
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
          src={currentUser.avatar}
          alt="Profile Picture"
          title={currentUser.username}
        />
        <input
          id="username"
          defaultValue={currentUser.username}
          type="text"
          placeholder="username"
          className="text-center border p-3 rounded-lg"
        />
        <input
          id="email"
          defaultValue={currentUser.email}
          type="text"
          placeholder="email"
          className="text-center border p-3 rounded-lg"
        />
        <input
          id="password"
          // defaultValue={currentUser.email}
          type="text"
          placeholder="password"
          className="text-center border p-3 rounded-lg"
        />
        <button className="text-white bg-slate-700 p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
};

export default Profile;
