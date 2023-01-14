import React from "react";

const LoginBar = () => {
  return (
    <div className="login-bar">
      <div className="login-left">
        Not logged in. &nbsp;[ <a href="/register">&nbsp;register&nbsp;</a> :
        <a href="/login">&nbsp;login&nbsp;</a> ]
      </div>

      <div className="login-right">
        <form>
          <div className="login-right-top">
            <div className="form-group">
              user: &nbsp;
              <input
                type="text"
                name="username"
                placeholder=""
                className="compact"
                maxLength={40}
                size="10"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              pass: &nbsp;
              <input
                className="compact"
                type="password"
                name="password"
                placeholder=""
                maxLength={40}
                size="10"
              />
            </div>
            <div className="form-group">
              ghost? <input type="checkbox" name="ghost" />
            </div>
          </div>
          <div className="login-right-bottom">
            cookied:{" "}
            <div className="form-group">
              <select
                type="dropdown"
                name="cookie"
                size="1"
                className="compact"
              >
                <option value="0">until I log out</option>
                <option value="1">half hour</option>
                <option value="2">one hour</option>
                <option value="3">one day</option>
                <option value="0">one week</option>
              </select>
            </div>
            <div className="form-group">
              <input type="submit" value="login" className="compact" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginBar;
