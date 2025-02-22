import { BASE_API_URL } from "@zuri/utilities";
import axios from "axios";
import React from "react";

const myStyle = {
  inputfield: {
    margin: "10px 0",
    width: "70%"
  },
  btn: {
    backgroundColor: "#00B87C",
    color: "#ffffff",
    border: "none"
  }
};

const modifyOrganizationSettings = () => {
  let organizationid = localStorage.getItem("currentWorkspace");
  let workspacelanguage = "";
  let token = sessionStorage.getItem("token");
  axios.defaults.baseURL = BASE_API_URL;
  axios.defaults.headers.common = { Authorization: `bearer ${token}` };
  axios({
    method: "patch",
    url: "/organizations/" + organizationid + "/settings",
    data: {
      workspacelanguage: workspacelanguage
    }
  });
};

const WorkspaceLanguage = () => {
  return (
    <>
      <select className="form-select" style={myStyle.inputfield}>
        <option selected>English(US)</option>
        <option value="1">Enlish(UK)</option>
        <option value="2">French</option>
      </select>
      <button
        type="button"
        className="btn btn-primary"
        style={myStyle.btn}
        onClick={modifyOrganizationSettings}
      >
        Save
      </button>
    </>
  );
};

export default WorkspaceLanguage;
