import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRoot } from "react-formio";
import { useLocation } from "react-router-dom";

import { STAFF_REVIEWER } from "../constants/constants";
import { getUserRoleName, getUserRolePermission, getNameFromEmail } from "../helper/user";

import "./styles.scss";

const SideBar = (props) => {
  const location = useLocation();

  const { pathname } = location;

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => {
    return selectRoot("user", state).userDetail;
  });
  const userRoles = useSelector((state) => {
    return selectRoot("user", state).roles;
  });

  return (
    <header>
      <nav id="sidebar">
        <ul className="list-unstyled components">
          {isAuthenticated && (
            <li className="nav-item nav-profile mt-3">
              <div className="nav-link">
                <div className="profile-image">
                  <img
                    className="img-xs rounded-circle"
                    src="/assets/Images/user.svg"
                    alt="profile"
                  />

                  <div className="dot-indicator bg-success" />
                </div>
                <div className="text-wrapper">
                  <p className="profile-name">
                    {user.given_name ||
                      user.name ||
                      user.preferred_username || getNameFromEmail(user.email) ||
                      ""}{" "}
                  </p>
                  <p className="profile-role">{getUserRoleName(userRoles)}</p>
                </div>
              </div>
            </li>
          )}

          <li className={`${pathname.match(/^\/form/) ? "active" : ""}`}>
            <Link
              to="/form"
              className={`main-nav nav-link ${
                pathname.match(/^\/form/) ? "active-tab" : ""
              }`}
            >
              <img
                className="nav-icons"
                src="/form_white.svg"
                width="22"
                height="22"
                alt="form"
              />
              Forms
            </Link>
          </li>
          <li className={`${pathname.match(/^\/task/) ? "active" : ""}`}>
            {getUserRolePermission(userRoles, STAFF_REVIEWER) ? (
              <Link
                to="/task"
                className={`main-nav nav-link ${
                  pathname.match(/^\/task/) ? "active-tab" : ""
                }`}
              >
                <i className="fa fa-list" />
                Tasks
              </Link>
            ) : null}
          </li>
          <li
            className={` ${
              pathname && pathname.match(/^\/metrics/) ? "active" : ""
            }`}
          >
            {getUserRolePermission(userRoles, STAFF_REVIEWER) ? (
              <Link
                data-toggle="collapse"
                aria-expanded="false"
                to="/metrics"
                className={`main-nav nav-link ${
                  pathname.match(/^\/metrics/) ? "active-tab" : ""
                }`}
              >
                <i className="fa fa-pie-chart" aria-hidden="true" />
                Metrics
              </Link>
            ) : null}
          </li>
          <li className={`${pathname.match(/^\/insights/) ? "active" : ""}`}>
            {getUserRolePermission(userRoles, STAFF_REVIEWER) ? (
              <Link
                to="/insights"
                className={`main-nav nav-link ${
                  pathname.match(/^\/insights/) ? "active-tab" : ""
                }`}
              >
                <i className="fa fa-lightbulb-o" />
                Insights
              </Link>
            ) : null}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default SideBar;
