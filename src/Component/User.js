import React from "react";

const User = ({ users }) => {
	return (
		<>
			<div className="table">
				<table border="1">
					<thead>
						<tr>
							<th>username</th>
							<th>email</th>
						</tr>
					</thead>
					{users.map((user) => (
						<tbody>
							<tr>
								<td>{user.username}</td>
								<td>{user.useremail}</td>
							</tr>
						</tbody>
					))}
				</table>
			</div>
		</>
	);
};

export default User;
