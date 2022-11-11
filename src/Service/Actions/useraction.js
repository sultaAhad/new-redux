import axios from "axios";
import { GET_USER_REQUEST, GET_USER_SECCESS, GET_USER_FAIL } from "../Constant";

export const useraction = () => (dispatch) => {
	axios
		.get("https://jsonplaceholder.typicode.com/users")
		.than((res) => {
			console.log("secces", res.data);
		})
		.catch((error) => {
			console.log("error");
		});
};
// export default UserAction;
