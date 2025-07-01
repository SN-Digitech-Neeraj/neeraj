

const Logins = () => {

 const showHidePassword = () => {
    const passwordInput = document.getElementById('password');
    const icon = document.getElementById('togglePassword');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    } else {
      passwordInput.type = 'password';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    }
  };

  const loginAdmin = () => {
    document.getElementById('email').value = 'root@alicom.com';
    document.getElementById('password').value = 'secret';
  };
  return (
    <section className="login-section">
      <div className="thumbnail">
        <img
          src="https://demo.alicom.app/assets/images/login.png"
          alt="thumbnail"
          width="100%"
        />
      </div>

      <div className="card loginCard">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center gap-2">
          <span className="powerBy">
            Powered by{' '}
            <a
              className="text-primary text-decoration-none"
              href="https://razinsoft.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              RazinSoft
            </a>{' '}
            ©2025
          </span>
          <span className="version fw-bold">v1.1.0</span>
        </div>

        <div className="text-center mt-4">
          <img
            src="https://demo.alicom.app/assets/logo.png"
            alt="Alicom Logo"
            height="80"
            style={{ maxWidth: '100%' }}
          />
        </div>

        <div className="page-content text-center mb-4">
          <p className="pagePera my-3">
            Welcome to <span className="fw-bold text-primary">Alicom</span>
          </p>

          <h2 className="pageTitle">Login To Admin</h2>
        </div>

        <hr />

        <form action="https://demo.alicom.app/admin/login" method="POST">
          <input
            type="hidden"
            name="_token"
            value="JKAF0KchqDUUNYMDYAX1vATy37Oep52oUMyuYkwJ"
            autoComplete="off"
          />

          <div className="mb-3">
            <label htmlFor="email">Enter Address</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Enter Email Address"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <div className="position-relative passwordInput">
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter Password"
              />
              <span className="eye" onClick={showHidePassword}>
                <i className="fa fa-eye-slash" id="togglePassword"></i>
              </span>
            </div>
          </div>

          <button className="btn loginButton" type="submit">
            Login
          </button>

          <div className="credentials-section">
            <div className="item">
              <div className="header">Admin Credentials</div>
              <div className="content">
                <div className="credentials">
                  <span>Email: root@alicom.com</span>
                  <span>Password: secret</span>
                </div>
                <div className="copyBtn" onClick={loginAdmin}>
                  <i className="fa-regular fa-copy"></i>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    </section>
  );
};

export default Logins;
