import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div className="w-9/12 mx-auto h-[70vh]">
            <h2 className="text-5xl">This is home page</h2>
        </div>
    );
};

export default Home;