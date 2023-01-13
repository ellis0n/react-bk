import React from "react";

const LoginBar = () => {
  return (
    <div className="login-bar">
      <div className="login-flash">
        Not logged in. [ <a href="/register">register</a> :
        <a href="/login"> login</a> ]
      </div>

      <div className="login-form">
        <form>
          <div className="form-group">
            Username:
            <input type="text" name="username" placeholder="username" />
          </div>
          <div className="form-group">
            Password:
            <input
              className="compact"
              type="password"
              name="password"
              placeholder="password"
              maxLength={40}
              size="10"
            />
          </div>
          ghost? <input type="checkbox" name="ghost" />
          cookied:{" "}
          <select type="dropdown" name="cookie">
            <option value="0">until I log out</option>
            <option value="1">half hour</option>
            <option value="2">one hour</option>
            <option value="3">one day</option>
            <option value="0">one week</option>/option>
          </select>
          <input type="submit" value="login" />
        </form>
      </div>
    </div>
  );
};

export default LoginBar;
