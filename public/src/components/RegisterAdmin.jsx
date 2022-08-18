import React, { useState } from "react";
import { registerAdmin } from "../services/Service";

function RegisterAdmin() {
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(0);
  const [userName, setUserName] = useState("");

  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = () => {
    let errors = {};

    if (!userName) {
      errors["userNameErr"] = "Please Enter a Username";
    }
    if (!number) {
      errors["numberErr"] = "Please Enter a number";
    }
    if (!password) {
      errors["passwordErr"] = "Please Enter a password";
    }

    setFormErrors(errors);

    const noErr = Object.keys(errors).length === 0;

    if (noErr) {
      const payload = {
        password: password,
        number: number,
        userName: userName,
      };
      registerAdmin(payload).then((res) =>
        alert("New Admin registered with ID" + res.data.adminId)
      );
    }
  };

  return (
    <>
      <section class="vh-100">
        <div class="container h-100">
          {/* <h1 class="text-center">
            <strong>Fitness Tracker</strong>
          </h1> */}
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black">
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Admin Sign Up
                      </p>

                      <form class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              id="form3Example1c"
                              class="form-control"
                              value={userName}
                              onChange={(e) => setUserName(e.target.value)}
                            />
                            {formErrors.userNameErr && (
                              <div style={{ color: "red", paddingBottom: 10 }}>
                                {" "}
                                {formErrors.userNameErr}
                              </div>
                            )}
                            <label class="form-label" for="form3Example1c">
                              Name
                            </label>
                          </div>
                        </div>

                

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              class="form-control"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            {formErrors.passwordErr && (
                              <div style={{ color: "red", paddingBottom: 10 }}>
                                {" "}
                                {formErrors.passwordErr}
                              </div>
                            )}
                            <label class="form-label" for="form3Example4c">
                              Password
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="number"
                              id="form3Example3c"
                              class="form-control"
                              value={number}
                              onChange={(e) => setNumber(e.target.value)}
                            />
                            {formErrors.numberErr && (
                              <div style={{ color: "red", paddingBottom: 10 }}>
                                {" "}
                                {formErrors.numberErr}
                              </div>
                            )}
                            <label class="form-label" for="form3Example3c">
                              Contact
                            </label>
                          </div>
                        </div>

                        


                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            class="btn btn-outline-primary btn-lg"
                            onClick={handleSubmit}
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid"
                        alt="Sample "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegisterAdmin;
