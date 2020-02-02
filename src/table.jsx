import React, { Component } from "react";
import { getcontacts } from "../src/data";

import axios from "axios";

class Table extends Component {
  state = {
    contacts: getcontacts(),
    Contacts: [],
    authUrl: ""
  };

  async componentDidMount() {
    const { data: contacts } = await axios.get("http://localhost:9000");
    // const allconstacts = contacts.map;
    console.log(contacts.authUrl);
    if (contacts.authUrl) {
      this.setState({ authUrl: contacts });
      console.log(contacts);
    } else {
      this.setState({ Contacts: contacts });
      console.log("1", contacts);
    }
  }

  // button = () => {
  //   const { data: contacts } = axios.get(
  //     "https://api.hubapi.com/contacts/v1/lists/all/contacts/all"
  //   );
  // };
  // async componentDidUpdate()
  getdata = async () => {
    const { data: contacts } = await axios.get("http://localhost:9000/getdata");
    this.setState({ Contacts: contacts.contacts });
    // this.setState({ Contacts: contacts });
    console.log("data:--", contacts);
  };

  render() {
    // console.log(this.state.contacts.map(contact => contact._id));

    return (
      <div class="container text-center">
        {/* {console.log("data from  satte", this.state.authUrl.authUrl)}

       */}
        {this.state.Contacts.length === 0 ? (
          <div>
            <h1 className="text-center">welcome to Hubspot</h1>
            <h3 className="text-center">
              please click install for Hubspot connection then
            </h3>
            <h3>click on Get Data</h3>
            <button
              className="btn  btn-outline-success m-2 btn-lg "
              aria-pressed="true"
            >
              {" "}
              <a href={this.state.authUrl.authUrl}>Install </a>
            </button>

            <button
              className="btn btn-success m-2 btn-lg"
              onClick={this.getdata}
            >
              {" "}
              Get Data
            </button>
          </div>
        ) : (
          <table className="table table-borderless table-striped">
            {console.log("render:-", this.state.Contacts)}
            <thead className="thead-light">
              <tr>
                <th>first_name</th>
                <th> last_name </th>
                <th>email </th>
              </tr>
            </thead>

            <tbody>
              {this.state.Contacts.map(contact => (
                <tr>
                  {console.log(
                    "table:-",
                    contact["identity-profiles"][0].identities[0].value
                  )}
                  <td> {contact.properties.firstname.value}</td>
                  <td> {contact.properties.lastname.value}</td>
                  <td>
                    {" "}
                    {contact["identity-profiles"][0].identities[0].value}
                  </td>
                  {/* <td> {contact.first_name}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default Table;
