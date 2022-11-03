import "./index";

const AllContacts = ({ users }) => {
  const sortedContacts = users.sort((a, b) => a.userLastName.localeCompare(b.userLastName));

  return (
    <table className="all-contacts">
      <thead>
        <tr>
          <th className="table-cell">First name</th>
          <th className="table-cell">Last name</th>
          <th className="table-cell">Phone</th>
        </tr>
      </thead>
      <tbody>
        {sortedContacts.length > 0
          ? sortedContacts.map((user, index) => (
              <tr key={index}>
                <td className="table-cell">{user.userFirstName}</td>
                <td className="table-cell">{user.userLastName}</td>
                <td className="table-cell">{user.userPhone}</td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
};

export default AllContacts;
