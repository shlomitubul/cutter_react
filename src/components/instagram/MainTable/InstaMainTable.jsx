import React, { Component } from "react";
import { followers as followersData } from "../../../mockDataTest/followers.js";
// eslint-disable-next-line no-unused-vars
import { style } from "../MainTable/MainTable.css";
import Pageination from "../MainTable/Pageination";
import { paginate } from "../../../until/pager.js";
import Filter from "./Filter.jsx";
import { toast } from "react-toastify";
import { getCurrerntUser } from "../../../services/authService.js";

class InstaMainTable extends Component {
  state = {
    following: [],
    followers: [],
    username: "",

    pageination: {
      totalFollowers: followersData.length,
      followersBackCount: 60,
      deafultPageSize: 4,
      currentPage: 1
    },
    tableType: {
      totalFollowers: true,
      followersBackCount: false
    }
  };

  render() {
    toast.success("Welcome " + getCurrerntUser());
    const { following: _following } = this.state;
    const {
      pageination: { currentPage }
    } = this.state;
    const {
      pageination: { deafultPageSize }
    } = this.state;

    const followingPageinated = paginate(
      _following,
      currentPage,
      deafultPageSize
    );
    return (
      <React.Fragment>
        {/*
        Start Main table section
        */}
        <div className="row justify-content-center ">
          {/*
          Start filter  section
        */}
          <div className="col-2">
            <Filter getFollwers={this.handleGetFollowers} />
          </div>
          <div className="col-8">
            <table className="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Username</th>
                  <th scope="col">Profile pictrue</th>
                  <th scope="col" className="align-middle">
                    Operations
                  </th>
                </tr>
              </thead>
              <tbody>
                {followingPageinated.map(follower => {
                  return (
                    <tr key={follower.id}>
                      <th scope="row">{follower.id}</th>
                      <td className="align-middle">
                        <p>{follower.username}</p>
                      </td>
                      <td className="w-25 align-middle">
                        <img
                          src={follower.profilePictureUrl}
                          className="profile_img"
                          alt="Sheep"
                        />
                      </td>
                      <td className="w-25 align-middle">
                        <button className="btn btn-danger blockBtn">
                          <i className="fa fa-ban" aria-hidden="true"></i>
                        </button>
                        <button className="btn btn-warning unfBtn">
                          <i
                            className="fa fa-user-times"
                            aria-hidden="true"
                          ></i>
                        </button>
                        <button className="btn btn-primary unfBtn">
                          <i className="fa fa-plus" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {/*
        Start Pageintion section
        */}
        <div className="row justify-content-center">
          <div className="col-2 offset-2">
            <Pageination
              itemsCount={
                this.state.tableType.totalFollowers
                  ? this.state.pageination.totalFollowers
                  : this.state.tableType.followersBackCount
              }
              pageSize={this.state.pageination.deafultPageSize}
              onPageSelected={this.handlePageSelected}
              currentPage={
                this.state.currentPage != null || undefined
                  ? this.state.currentPage
                  : 1
              }
            />
          </div>
        </div>
      </React.Fragment>
    );
  }

  handlePageSelected = pageNumber => {
    this.setState(prevState => ({
      ...prevState.following,
      ...prevState.followers,
      pageination: {
        ...prevState.pageination,
        currentPage: pageNumber
      }
    }));
  };
  handleGetFollowers = () => {
    fetch("../../../mockDataTest/followers.js")
      .then(result => result.text())
      .then(data => console.log(data));
  };
  componentDidMount() {
    this.setState({
      following: followersData
    });
  }
}

export default InstaMainTable;
